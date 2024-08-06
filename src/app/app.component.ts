import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAppComponent } from './todo/todo-app/todo-app.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TodoAppComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-angular-app';
}
