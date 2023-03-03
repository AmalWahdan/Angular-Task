import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: string[] = [];
  searchKey: string = '';
  addToList() {
    this.todoList.push(this.searchKey);
    this.searchKey = '';
  }
  removeFromList(index:number) {
    this.todoList = this.todoList.filter((item, i) => index != i);
  }

}
