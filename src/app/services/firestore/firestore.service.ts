import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private fs: AngularFirestore) {}

  add_Task(task: Task): Promise<any> {
    return this.fs.collection('tasks').add(task);
  }

  get_Tasks(): Observable<any> {
    return this.fs.collection('tasks').snapshotChanges();
  }

  delete_Task(id: string): Promise<any> {
    return this.fs.collection('tasks').doc(id).delete();
  }

  get_TaskEdit(id: string): Observable<any> {
    return this.fs.collection('tasks').doc(id).get();
  }

  editTask(id: string, task: any): Promise<any> {
    return this.fs.collection('tasks').doc(id).update(task);
  }
}
