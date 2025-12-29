import {Component, inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskInterface} from '../../../../domain/tasks/interfaces/task-interface';
import {TaskService} from '../../../../core/services/task-service';
import {CommentInterface} from '../../../../domain/tasks/interfaces/comment-interface';
import {generateUniqueIdWithTimestamp} from '../../../../shared/utils/generate-unique-id-with-timestamp';

@Component({
    selector: 'app-task-comments-modal',
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './task-comments-modal.html',
    styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
    readonly _task: TaskInterface = inject(DIALOG_DATA)
    readonly _dialogRef = inject(DialogRef)
    private readonly _taskService = inject(TaskService)
    comments:CommentInterface[] = this._task.comments || []
    description:string = ''

    protected addComment() {
        if (this.description) {
            this._taskService.addCommentToTask(
                this._task.id,
                this._task.status,
                {id: generateUniqueIdWithTimestamp(), description: this.description,}
            )
            this._task.comments.push({id: generateUniqueIdWithTimestamp(), description: this.description,})
            this.description = ''
        }
    }

    protected deleteComment(commentId:string) {
        this._task.comments = this._task.comments.filter(comment => comment.id !== commentId)
        this._taskService.removeCommentFromTask(this._task.id, this._task.status, commentId)
    }
}
