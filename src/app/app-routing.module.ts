import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

const routes: Routes = [
  {
    path: 'add-task',
    component: AddTaskComponent,
  },
  {
    path: 'list-tasks',
    component: ListTaskComponent,
  },
  { path: 'update-task/:id', component: UpdateTaskComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
