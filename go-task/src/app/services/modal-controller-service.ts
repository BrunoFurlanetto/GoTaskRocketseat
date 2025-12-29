import {inject, Injectable} from '@angular/core';
import {Dialog} from '@angular/cdk/dialog';
import {TaskFormModal} from '../components/task-form-modal/task-form-modal';
import {TaskCommentsModal} from '../components/task-comments-modal/task-comments-modal';
import {TaskFormControlsInterface} from '../interfaces/task-form-controls-interface';
import {TaskInterface} from '../interfaces/task-interface';

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
        return this._dialog.open<TaskFormControlsInterface>(TaskFormModal, {
            ...this._modalSizeOptions,
            data: {
                mode: 'create',
                formValues: {
                    name: '',
                    description: '',
                }
            }
        })
    }

    openEditTaskModal(formValues: TaskFormControlsInterface) {
        return this._dialog.open<TaskFormControlsInterface>(TaskFormModal, {
            ...this._modalSizeOptions,
            data: {
                mode: 'edit',
                formValues,
            }
        })
    }

    openCommentTaskModal(taskInfos: TaskInterface) {
        return this._dialog.open(TaskCommentsModal, {
            ...this._modalSizeOptions,
            data: taskInfos,
        })
    }
}
