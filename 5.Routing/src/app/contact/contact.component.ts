import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(
    //adres çubugundaki aktif olarak gelmiş değeri yakalayıp verir
    private activated: ActivatedRoute
  ) {
    //subscribe olma sebebi adres çubugundaki değeri sürekli dinler ve değişiklik olma durumunda yakalar
    this.activated.params.subscribe((res) => {
      console.log(res['params'])
    })
  }
}
