import { Component, OnInit } from '@angular/core';
import { TASKS } from './mock-tasks';
import { Task } from './task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  constructor() {}

  task: Task = {
    id: 1,
    title: 'primer tarea',
    description: 'debo de hacer un crud',
    done: false,
  };

  listTasks = TASKS;

  ngOnInit(): void {}
}
