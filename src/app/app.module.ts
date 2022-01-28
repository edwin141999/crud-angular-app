import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ListTaskComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
