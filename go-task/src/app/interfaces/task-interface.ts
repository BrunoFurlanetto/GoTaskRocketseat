import {TaskStatusEnum} from '../enums/task-status-enum';
import {TypeTaskStatus} from '../types/type-task-status';
import {CommentInterface} from './comment-interface';

export interface TaskInterface {
    id: string;
    name: string;
    description: string;
    comments: CommentInterface[];
    status: TypeTaskStatus,
}
