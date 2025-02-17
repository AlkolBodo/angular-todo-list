import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {

  private todoService = inject(TodoService)
  todos = this.todoService.getTodos();

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }
  async newTodo(title: string) {
    await this.todoService.addTodo(title);
    this.todos = this.todoService.todos;
  }
}
