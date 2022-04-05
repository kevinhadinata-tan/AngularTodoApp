import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = "";

  addTodo () {
    if (this.inputTodo) {
      const todo: Todo = {
        content: this.inputTodo,
        completed: false
      };
  
      this.newTodoEvent.emit(todo)
      this.inputTodo = "";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
