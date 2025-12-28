import {Component, inject} from '@angular/core';
import {DIALOG_DATA} from '@angular/cdk/dialog';
import {TaskFormModalDataInterface} from '../../interfaces/task-form-modal-data-interface';

@Component({
  selector: 'app-task-form-modal',
  imports: [],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
    readonly _data: TaskFormModalDataInterface = inject(DIALOG_DATA)
}
