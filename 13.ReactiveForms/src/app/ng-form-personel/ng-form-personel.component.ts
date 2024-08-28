import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form-personel',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './ng-form-personel.component.html',
  styleUrl: './ng-form-personel.component.css'
})
export class NgFormPersonelComponent {
  addModel = new Employee();
  updateModel = new Employee();
  employees: Employee[] = [];
  index: number = 0;
  isUpdFormActive: boolean = false;
  constructor(
    private _date: DatePipe
  ) {
    const transformedDate = this._date.transform(new Date(), 'yyyy-MM-dd');
    this.addModel.startingDate = transformedDate ? transformedDate : '';
    const updtransformedDate = this._date.transform(new Date(), 'yyyy-MM-dd');
    this.updateModel.startingDate = updtransformedDate ? updtransformedDate : '';
  }
  save(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.employees.push(this.addModel);
      this.addModel = new Employee();
      const transformedDate = this._date.transform(new Date(), 'yyyy-MM-dd');
      this.addModel.startingDate = transformedDate ? transformedDate : '';

    }
  }
  get(model: Employee, index: number) {
    this.index = index;
    //böyle yaparsak güncelle butonuna tıklamadan referansta taşıdığı için alttaki referansta değişiyor
    this.updateModel = model;

    this.updateModel = { ...model };
    //bu şekilde tek tek kayıt yapmasını sağlar
    this.isUpdFormActive = true;
  }

  cancel() {
    this.isUpdFormActive = false;
  }
  update(form: NgForm) {
    if (form.valid) {
      this.employees[this.index] = this.updateModel;
      this.isUpdFormActive = false;
    }
  }
}

class Employee {
  name: string = "";
  profession: string = "";
  startingDate: string = "";
}
