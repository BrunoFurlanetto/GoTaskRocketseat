import {Component, inject, Input} from '@angular/core';
import {SlicePipe} from '@angular/common';
import {ModalControllerService} from '../../../../core/services/modal-controller-service';
import {TaskService} from '../../../../core/services/task-service';
import {TaskInterface} from '../../../../domain/tasks/interfaces/task-interface';

@Component({
  selector: 'app-task-card',
    imports: [
        SlicePipe
    ],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
    private readonly _openModalService = inject(ModalControllerService)
    private readonly _taskService = inject(TaskService)
    @Input({ required: true }) task!: TaskInterface

    protected openCommentTaskModal(task:TaskInterface) {
        return this._openModalService.openCommentTaskModal(task)
    }

    protected openEditTaskModal() {
        const dialogRef = this._openModalService.openEditTaskModal({
            name: this.task.name,
            description: this.task.description,
        })

        dialogRef.closed.subscribe((taskForm) => {
            if (taskForm) {
                this._taskService.updateUpdate(this.task.id, taskForm.name, taskForm.description, this.task.status)
            }
        })
    }

    protected deleteTask() {
        this._taskService.removeTask(this.task.id, this.task.status)
    }
}
