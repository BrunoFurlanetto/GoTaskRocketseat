import {Component, signal} from '@angular/core';
import {Header} from './core/layout/header/header';
import {MainContent} from './features/tasks/components/main-content/main-content';

@Component({
    selector: 'app-root',
    imports: [Header, MainContent],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('go-task');
}
