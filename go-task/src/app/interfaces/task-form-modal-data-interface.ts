import {TaskFormControlsInterface} from './task-form-controls-interface';

export interface TaskFormModalDataInterface {
    mode: 'create' | 'edit';
    formValues: TaskFormControlsInterface;
}
