import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {MainContent} from './components/main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('go-task');
}
