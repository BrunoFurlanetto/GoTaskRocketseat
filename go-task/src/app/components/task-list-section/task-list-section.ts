import { Component } from '@angular/core';
import {TaskCard} from '../task-card/task-card';

@Component({
  selector: 'app-task-list-section',
    imports: [
        TaskCard
    ],
  templateUrl: './task-list-section.html',
  styleUrl: './task-list-section.css',
})
export class TaskListSection {

}
