import {
  Attribute,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "img[default]",
})
export class ImagePreloadDirective {
  constructor(
    @Attribute("default") public defaultSrc: string,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    renderer.setAttribute(this.el.nativeElement, "src", this.defaultSrc);
  }

  @HostListener("error") onError() {
    this.renderer.setAttribute(this.el.nativeElement, "src", this.defaultSrc);
  }
}
