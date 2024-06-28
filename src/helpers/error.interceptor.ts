import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "./../app/services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private nav: NavController,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // si es paypal, no hacemos nada
          if (err.url.includes("paypal")) {
            return throwError(err);
          }

          if (localStorage.getItem("currentUser")) {
            // auto logout if 401 response returned from api
            this.auth.logout();
          } else {
            this.nav.navigateRoot(["/login"], {
              queryParams: { returnUrl: this.router.url },
            });
          }
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
