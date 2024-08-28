import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PersonelComponent } from "./personel/personel/personel.component";
import { NgFormExampleComponent } from "./ng-form-example/ng-form-example.component";
import { NgFormPersonelComponent } from "./ng-form-personel/ng-form-personel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, PersonelComponent, NgFormExampleComponent, NgFormPersonelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.createAddForm();
    this.addForm.controls["email"].setValue("onur");
  }

  createAddForm() {
    this.addForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)])
    });
  }

  add() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      this.addForm.reset();
    }
  }
}
