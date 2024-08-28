import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-form-example.component.html',
  styleUrl: './ng-form-example.component.css'
})
export class NgFormExampleComponent {
  login(form: NgForm) {
    if (form.valid) {
      console.log(form);

    }
  }
}
