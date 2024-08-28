import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, FormsModule, TodoListComponent],
  template: `
  <h1>State Management -Input / Output</h1>
  <p>Benim adım <strong>{{name}}</strong></p>
  <hr>
  <app-example [name]='name' (changeNameEvent)="changeName($event)"></app-example>



  
  <h1>Input/Output Örnek</h1>
  <input [(ngModel)]="work">
  <button (click)="add()">Kaydet</button>
  <hr>
  <app-todo-list [todos]="todos"></app-todo-list>
  
  `
})
export class AppComponent {
  name: string = "Onur";
  work: string = "";
  todos: string[] = [];

  add() {
    this.todos.push(this.work);
    this.work = "";
  }

  changeName(event: string) {
    this.name = event;
  }
}
