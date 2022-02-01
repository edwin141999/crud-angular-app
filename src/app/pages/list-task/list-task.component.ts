import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  listTasks: Task[] = [];

  constructor(private _fb: FirestoreService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this._fb.get_Tasks().subscribe((doc) => {
      this.listTasks = [];
      doc.forEach((element: any) => {
        this.listTasks.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
    });
  }

  deleteTask(id: any) {
    this._fb.delete_Task(id).then(
      () => {},
      (error) => {
        console.log(error);
      }
    );
  }
}
