import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  id: string = '';
  form: FormGroup;
  _TASK: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private _db: FirestoreService,
    private _fb: FormBuilder
  ) {
    this.form = _fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: [false],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getTask(this.id);
  }

  getTask(id: string) {
    this._db.get_TaskEdit(id).subscribe((doc) => {
      this._TASK.push(doc.data());
      this.form.patchValue({
        title: this._TASK[0].title,
        description: this._TASK[0].description,
      });
    });
  }

  updateTask() {
    const TASK: any = {
      title: this.form.value.title,
      description: this.form.value.description,
      done: false,
    };

    this._db.editTask(this.id, TASK).then(
      () => {},
      (error) => {
        console.log(error);
      }
    );
  }
}
