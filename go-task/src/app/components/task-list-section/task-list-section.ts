import {Component, inject} from '@angular/core';
import {TaskCard} from '../task-card/task-card';
import {TaskService} from '../../services/task-service';
import {TaskInterface} from '../../interfaces/task-interface';
import {TaskStatusEnum} from '../../enums/task-status-enum';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TypeTaskStatus} from '../../types/type-task-status';

@Component({
  selector: 'app-task-list-section',
    imports: [
        TaskCard,
        AsyncPipe,
        CdkDropList,
        CdkDrag,
        JsonPipe
    ],
  templateUrl: './task-list-section.html',
  styleUrl: './task-list-section.css',
})
export class TaskListSection {
    private readonly _taskService = inject(TaskService)
    protected readonly todoList$: Observable<TaskInterface[]> = this._taskService.todoTasks
    protected readonly doingList$: Observable<TaskInterface[]> = this._taskService.doingTasks
    protected readonly doneList$: Observable<TaskInterface[]> = this._taskService.doneTasks

    protected readonly TaskStatusEnum = TaskStatusEnum;

    onCardDrop(event: CdkDragDrop<TaskInterface[]>) {
        this.moveCardToColumn(event)

        const taskId = event.item.data.id
        const taskCurrentStatus = event.item.data.status
        const droppedColumn = event.container.id

        this.updateTaskStatus(taskId, taskCurrentStatus, droppedColumn)
    }

    private moveCardToColumn(event: CdkDragDrop<TaskInterface[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    private updateTaskStatus(taskId: string, taskCurrentStatus: TypeTaskStatus, droppedColumn: string) {
        let taskNextStatus: TypeTaskStatus;
        console.log(droppedColumn)
        switch (droppedColumn) {
            case 'todo-list':
                taskNextStatus = TaskStatusEnum.TODO
                break
            case 'doing-list':
                taskNextStatus = TaskStatusEnum.DOING
                break
            case 'done-list':
                taskNextStatus = TaskStatusEnum.DONE
                break
            default:
                throw Error('Unknown column dropped into')
        }
        console.log(taskNextStatus)
        this._taskService.updateTaskStatus(taskId, taskCurrentStatus, taskNextStatus)
    }
}
