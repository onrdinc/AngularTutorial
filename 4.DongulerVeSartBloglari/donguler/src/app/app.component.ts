import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Döngüler</h1>
  <ul>
    <!-- <li *ngFor="let data of todos">{{data}}</li>
    Angular 17 ile birlikte bu yapı değişti -->
    @for (data of todos; track data) {
      <!-- Trackin amacı veriyi takip et render olma esnasında veri değişmemişse tekrardan veriyi render etme trackın yanındaki değer veriye ait uniq bir değer olmak zorunda -->
      <li>index: {{$index}} || 
        ilk kayıt mı?: {{$first}} || 
        son kayıt mı?: {{$last}} || 
        veri: {{data.work}}</li>
      <!-- first bu kaydın ilk kayıt olup olmadığına dair true yada false kayıt döndürür lastta son kaydı döndürür -->
    }
  </ul>

  `

})
export class AppComponent {
  todos: { work: string, isCompleted: boolean }[] = [
    { work: "Example 1", isCompleted: true },
    { work: "Example 2", isCompleted: true },
    { work: "Example 3", isCompleted: true }
  ]

  constructor(){
    this.save();
  }

  save() {
    console.log("------------------For Döngüsü------------------------")
    for (let i = 0; i < 10; i++) {

      console.log(i);
    }

    console.log("---------------------Listeyi For İle Dönme---------------------")

    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].work)
    }
    console.log("-----------------listeyi foreach ile dönme-------------------------")
    this.todos.forEach((val) => {
      console.log(val.work);
      console.log(val.isCompleted);
    })
    console.log("------------------listeyi for of ile dönme------------------------")
    //for of da async kodlama yapabiliyoruz
    for (let data of this.todos) {
      console.log(data.work);
      console.log(data.isCompleted)
    }
    console.log("-----------------listeyi for in ile dönme-------------------------")
    for (let index in this.todos) {
      console.log(this.todos[index].work)
    }
  }
}

export class TodoModel {
  work: string = "";
  isCompleted: boolean = false;
}