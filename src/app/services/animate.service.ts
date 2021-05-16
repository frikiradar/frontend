import { Injectable } from "@angular/core";
import { Animation, AnimationController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class AnimateService {
  constructor(private animationCtrl: AnimationController) {}

  animateSections(
    selector: string,
    duration: number,
    delayBetweenItems: number,
    easing?: string
  ): void {
    const animationArray: Animation[] = [];
    const elemArray = document.querySelectorAll(selector);
    for (let i = 0; i <= elemArray.length; i++) {
      // console.log('aqui: ', elemArray[i]);
      const animation: Animation = this.animationCtrl
        .create()
        .addElement(elemArray[i])
        .easing(easing ? easing : "cubic-bezier(0.55, 0, 1, 0.45)")
        .duration(duration)
        .delay(i * delayBetweenItems)
        .fromTo("opacity", "0", "1");
      // .fromTo("width", "0", "100%");
      animationArray.push(animation);
    }
    animationArray.forEach((animation: Animation) => {
      animation.play();
    });
  }
}
