import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {MainContent} from './components/main-content/main-content';
import {TaskFormModal} from './components/task-form-modal/task-form-modal';
import {TaskCommentsModal} from './components/task-comments-modal/task-comments-modal';

@Component({
  selector: 'app-root',
    imports: [Header, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('go-task');
}
