import {inject, Injectable} from '@angular/core';
import {Dialog} from '@angular/cdk/dialog';
import {TaskFormModal} from '../components/task-form-modal/task-form-modal';
import {TaskCommentsModal} from '../components/task-comments-modal/task-comments-modal';

@Injectable({
    providedIn: 'root',
})
export class ModalControllerService {
    private readonly _dialog = inject(Dialog)
    private readonly _modalSizeOptions = {
        'maxWidth': '620px',
        'width': '95%'
    }

    openNewTaskModal() {
        return this._dialog.open(TaskFormModal, {
            ...this._modalSizeOptions
        })
    }

    openEditTaskModal() {
        return this._dialog.open(TaskFormModal, {
            ...this._modalSizeOptions
        })
    }

    openCommentTaskModal() {
        return this._dialog.open(TaskCommentsModal, {
            ...this._modalSizeOptions
        })
    }
}
