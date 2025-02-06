import { Component } from '@angular/core';
import { ActivatedRoute, Router,RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CommonModule,DatePipe } from '@angular/common'; 
import { ToDoItem } from '../model/model';
import { TodoitemsService } from '../todo/todoitems.service';



@Component({
  selector: 'app-todo-item',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  providers: [DatePipe]
})
export class TodoItemComponent {

   id:number;
   todoItem:ToDoItem ={
     id: 0,
     description: '',
     targetDate: '',
     completed: false
   }; 

  constructor(private route: ActivatedRoute, private router: Router, private todoitemsService: TodoitemsService, private datePipe: DatePipe) {
    console.log('TodoItemComponent');
    this.id =  this.route.snapshot.params['id'];
    console.log('id: ' + this.id);
    //this.setTodoItem();
  }
   

  ngOnInit() {
    console.log('ngOnInit');
    if(this.id){
      const item = this.todoitemsService.getTodoItem(this.id);
      if (item) {
        this.todoItem = item;
      }
    }
    else{
      this.todoItem.targetDate = this.datePipe.transform(new Date(), 'MM-dd-yyyy') || '';
    }

    console.log('todoItem: ' + JSON.stringify(this.todoItem));
  }

  setTodoItem() {
    if(this.id){
      const item = this.todoitemsService.getTodoItem(this.id);
      if (item) {
        this.todoItem = item;
      }
    }
  }

  getTodoItem() { 
    return this.todoItem;
  }


  saveTodoItem(data: any) {
    const todoItem:ToDoItem = data.todoItem;
    //throw new Error('Method not implemented.');
    console.log('todoItem: ' + JSON.stringify(todoItem));
    if(this.id) {
      this.todoitemsService.updateTodoItem(todoItem);
    } else {
      this.todoitemsService.addTodoItem(todoItem);
    }

    this.router.navigate(['/todos']);
    }

  saveTodoItem1(todoItem:ToDoItem) {
    console.log('Save item');
    console.log('todoItem: ' + JSON.stringify(todoItem));
    this.todoItem.targetDate = this.datePipe.transform(todoItem.targetDate, 'MM-dd-yyyy') || '';
    if(this.id) {
      this.todoitemsService.updateTodoItem(todoItem);
    } else {
      this.todoitemsService.addTodoItem(todoItem);
    }

    this.router.navigate(['/todos']);

  }



}
