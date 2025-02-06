import { Component } from '@angular/core';
import { TodoListData } from '../../todo-list-data';
import { ToDoItem } from '../model/model';
import { TodoitemsService } from './todoitems.service';
import { RouterLink,RouterLinkActive} from '@angular/router'

@Component({
  selector: 'app-todo',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todoItems:ToDoItem[] = [];
 

  constructor(private todoitemsService: TodoitemsService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.todoItems = this.todoitemsService.getTodoItems();
    //this.todoitemsService.getTodoItems().subscribe(items => {
    //  this.todoItems = items;
    //});
  }

  deleteTodoItem(id: number) {
    console.log('Delete item with id: ' + id);
    if(confirm('Are you sure you want to delete this item?')) {
      this.todoitemsService.deleteTodoItem(id);
      this.todoItems = this.todoitemsService.getTodoItems();
    }
  }
}
