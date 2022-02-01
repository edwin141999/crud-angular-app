import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  form: FormGroup;
  constructor(private _db: FirestoreService, private _fb: FormBuilder) {
    this.form = _fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: [false],
    });
  }

  ngOnInit(): void {}

  addTask() {
    const TASK: Task = {
      title: this.form.value.title,
      description: this.form.value.description,
      done: false,
    };
    this._db.add_Task(TASK).then(
      () => {
        console.log(TASK);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
