import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/model';
import { TodoListData } from '../../todo-list-data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoitemsService {
  todoItems:ToDoItem[] = [...TodoListData];

  //apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  apiUrl = 'https://mp0577c524dc44c7b22b.free.beeceptor.com/data';
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
  }

  getTodoItems() {
    return this.todoItems;
  }

  getTodoItems1(): Observable<ToDoItem[]> {
    return this.httpClient.get<ToDoItem[]>(this.apiUrl);
  }

  getTodoItem(id: number) {
    return this.todoItems.find(item => item.id == id);
  } 

  deleteTodoItem(id: number) {
    console.log('Delete item with id: ' + id);
      this.todoItems = this.todoItems.filter(item => item.id !== id);
   }

   updateTodoItem(todoItem: ToDoItem) {
      console.log('Update item');
      this.todoItems = this.todoItems.map(item => {
        if(item.id === todoItem.id) {
          return todoItem;
        }
        return item;
      });
    }



    addTodoItem(todoItem: ToDoItem) {
      console.log('Add item');
      todoItem.id = Math.max(...this.todoItems.map(item => item.id)) + 1;
      this.todoItems.push(todoItem);
    }
}
