import { Injectable } from "@angular/core";
import {
  IAPProduct,
  IAPProducts,
  InAppPurchase2
} from "@ionic-native/in-app-purchase-2/ngx";
import { Platform } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";

import { AuthService } from "./auth.service";
import { PaymentService } from "./payment.service";
import { Product, ProductService } from "./product.service";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private productsSubject: BehaviorSubject<Product[]>;
  public products: Observable<Product[]>;

  constructor(
    private auth: AuthService,
    private store: InAppPurchase2,
    private platform: Platform,
    private userSvc: UserService,
    private productsSvc: ProductService,
    private payment: PaymentService
  ) {
    this.platform.ready().then(() => {
      const products = this.productsSvc.getProducts();
      this.productsSubject = new BehaviorSubject<Product[]>(products);
      this.products = this.productsSubject.asObservable();

      if (this.platform.is("cordova")) {
        // this.store.verbosity = this.store.DEBUG;
        products.forEach(p => {
          let type = "";
          switch (p.type) {
            case "consumable":
            case "subscription":
              type = this.store.CONSUMABLE;
              break;
            case "non_consumable":
              type = this.store.NON_CONSUMABLE;
              break;
          }

          this.store.register({ type, id: p.id });

          this.store.when(p.id).registered((product: IAPProduct) => {
            this.updateProduct(product);
            console.log("Registered: ", JSON.parse(JSON.stringify(product)));
          });

          // Updated
          this.store.when(p.id).updated((product: IAPProduct) => {
            this.updateProduct(product);
            console.log("Updated: ", JSON.parse(JSON.stringify(product)));
          });

          // User closed the native purchase dialog
          this.store.when(p.id).cancelled((product: IAPProduct) => {
            this.updateProduct(product);
            console.error("Cancelled: ", JSON.parse(JSON.stringify(product)));
          });

          // Approved
          this.store.when(p.id).approved((product: IAPProduct) => {
            this.updateProduct(product);
            console.log("Approved: ", JSON.parse(JSON.stringify(product)));
            this.finishPurchase(product);
          });

          // Finished
          this.store.when(p.id).finished((product: IAPProduct) => {
            this.updateProduct(JSON.parse(JSON.stringify(product)));
            console.log("Finished: ", JSON.parse(JSON.stringify(product)));
          });
        });

        // Track all store errors
        this.store.error(err => {
          console.error("Store Error: ", err.code, err.message);
        });

        // Run some code only when the store is ready to be used
        /*this.store.ready(() => {
          this.updateProducts(this.store.products);
          console.log("Store is ready. Products: ", this.store.products);
        });*/

        // Refresh the status of in-app products
        this.store.refresh();
      }
    });
  }

  public get productsValue(): Product[] {
    return this.productsSubject.value;
  }

  updateProduct(product: IAPProduct) {
    this.productsValue.map(pv => {
      if (pv.id === product.id) {
        pv.data = product;
      }
    });

    this.productsSubject.next(this.productsValue);
  }

  updateProducts(products: IAPProducts) {
    this.productsValue.map(p => {
      this.store.products.forEach(sp => {
        if (sp.id === p.id) {
          p.data = sp;
        }
      });
    });

    this.productsSubject.next(this.productsValue);
  }

  get(id: string) {
    return this.store.get(id);
  }

  async order(product: Product) {
    return this.store.order(product.data);
  }

  async finishPurchase(p: IAPProduct) {
    console.log("finishPurrchase", p);
    const product = this.productsValue.find(pr => pr.id === p.id);
    switch (product.type) {
      case "consumable":
        try {
          const user = await this.userSvc.addCredits(product.value);
          this.auth.setAuthUser(user);
          // Añadimos créditos!!
          console.log("Comprado, añadimos créditos", product);

          this.payment.setPayment(
            p.id,
            `Has añadido ${p.description} a tu cuenta.`,
            p.transaction.id,
            p.transaction.purchaseToken || p.transaction.id,
            p.transaction.signature || "",
            p.transaction.type,
            +p.priceMicros / 1000000,
            p.currency
          );

          p.finish();
        } catch (e) {
          console.error("Error al añadir los créditos", product);
        }
        break;
      case "subscription":
        try {
          const user = await this.userSvc.subscribePremim(product.value);
          this.auth.setAuthUser(user);
          // Añadimos créditos!!
          console.log("Comprado, añadimos días de suscripción", product);
          this.payment.setPayment(
            p.id,
            `Has añadido ${product.name} FrikiRadar ILIMITADO a tu cuenta.`,
            p.transaction.id,
            p.transaction.purchaseToken || p.transaction.id,
            p.transaction.signature || "",
            p.transaction.type,
            +p.priceMicros / 1000000,
            p.currency
          );
          p.finish();
        } catch (e) {
          console.error("Error al suscribirse", product);
        }
        break;
    }
  }
}
