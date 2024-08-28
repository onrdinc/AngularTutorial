import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validate]',
  standalone: true
})
export class ValidateDirective {

  constructor(private el:ElementRef) { }

  @HostListener("keyup") keyup(){
    this.checkInputValidation(this.el.nativeElement)
  }
//her yerde kullanabiliriz bu attributeyi
  checkInputValidation(element: any) {
    console.log(element.validity.valid);
    const valid = element.validity.valid;
    const id = element.id;
    const divE1 = document.querySelector(`#${id}+div`);
    if (!valid) {
      element.className = "invalid"
      divE1!.innerHTML = element.validationMessage
    } else {
      element.className = ""
      divE1!.innerHTML = ""
    }
  }
}
