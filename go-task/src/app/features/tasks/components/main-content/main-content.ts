import {Component} from '@angular/core';
import {TaskListSection} from '../task-list-section/task-list-section';
import {WelcomeSection} from '../../../../core/layout/welcome-section/welcome-section';

@Component({
    selector: 'app-main-content',
    imports: [
        WelcomeSection,
        TaskListSection
    ],
    templateUrl: './main-content.html',
    styleUrl: './main-content.css',
})
export class MainContent {

}
