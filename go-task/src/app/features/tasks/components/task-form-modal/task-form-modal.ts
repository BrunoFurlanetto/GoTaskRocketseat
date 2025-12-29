import {Component, inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TaskFormModalDataInterface} from '../../../../core/interfaces/task-form-modal-data-interface';
import {TaskFormControlsInterface} from '../../../../core/interfaces/task-form-controls-interface';

@Component({
    selector: 'app-task-form-modal',
    imports: [ReactiveFormsModule],
    templateUrl: './task-form-modal.html',
    styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
    readonly _data: TaskFormModalDataInterface = inject(DIALOG_DATA)
    readonly _dialogRef = inject(DialogRef)

    taskForm: FormGroup = new FormGroup({
        name: new FormControl(this._data.formValues.name, [Validators.required, Validators.minLength(10)]),
        description: new FormControl(this._data.formValues.description, [Validators.required, Validators.minLength(10)])
    })

    protected OnFormSubmit() {
        this.closeModal(this.taskForm.value)
    }

    protected closeModal(formValues: TaskFormControlsInterface | undefined = undefined) {
        this._dialogRef.close(formValues)
    }
}
