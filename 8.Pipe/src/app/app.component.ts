import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoPipe } from './todo.pipe';
import { NamePipe } from './name.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoPipe, NamePipe, CommonModule],
  template: `
  <h1>Pipe</h1>
  <!-- <div>
    <input [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  <p>{{name | name}}</p>
  <div>
    <input type="search" [(ngModel)]="search" placeholder="Search Something">
  <ul>
    @for(t of todos | todo:search;track t){
      <li>{{t}}</li>
    }
  </ul>
  </div> -->
  <!-- CommonModule angular pipe ları -->
<h1>{{name| uppercase }}</h1>
<h1>{{date | date:'dd.MMMM.yyy HH:mm:ss'}}</h1>
<h1>{{num | currency:'TRY':'symbol-narrow':'1.2-2'}}</h1>


  `
})
//ng generate pipe todo
export class AppComponent {
  name: string = "onur";
  date: Date = new Date();
  num:number=17002;

  // name:string="Onur";
  // work: string = "";
  // todos: string[] = ["Domates", "Armut", "Elma"];
  // search: string = "";
  // save() {
  //   this.todos.push(this.work);
  //   this.work = "";
  // }
}
