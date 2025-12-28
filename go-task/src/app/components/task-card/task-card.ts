import {Component, inject} from '@angular/core';
import {ModalControllerService} from '../../services/modal-controller-service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
    private readonly _openModalService = inject(ModalControllerService)

    protected openCommentTaskModal() {
        this._openModalService.openCommentTaskModal()
    }

    protected openEditTaskModal() {
        const dialogRef = this._openModalService.openEditTaskModal({
            name: 'Sample Task',
            description: 'Sample Task Description',
        })

        dialogRef.closed.subscribe((taskForm) => {
            console.log(taskForm)
        })
    }
}
