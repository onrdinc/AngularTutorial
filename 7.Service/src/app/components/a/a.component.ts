import { Component, Inject, inject } from '@angular/core';
import { BComponent } from '../b/b.component';
import { FormsModule } from '@angular/forms';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [BComponent, FormsModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  //1.yöntem
  //servisler genellikle ortak bir dosyayı paylaşmak için kullanılır
  ex = Inject(ExampleService)
  //2.yöntem
  //private olursa sadece ts tarafında public olursa html tarafında da kullanılır
  // constructor(
  //   public ex: ExampleService
  // ) { }
}
