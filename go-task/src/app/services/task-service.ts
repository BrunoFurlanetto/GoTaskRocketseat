import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {TaskFormControlsInterface} from '../interfaces/task-form-controls-interface';
import {TaskInterface} from '../interfaces/task-interface';
import {TaskStatusEnum} from '../enums/task-status-enum';
import {generateUniqueIdWithTimestamp} from '../utils/generate-unique-id-with-timestamp';
import {TypeTaskStatus} from '../types/type-task-status';
import {CommentInterface} from '../interfaces/comment-interface';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private _todoTasks$ = new BehaviorSubject<any[]>([])
    readonly todoTasks = this._todoTasks$.asObservable() .pipe(
        map((tasks) => {
            return structuredClone(tasks)
        }),
    )

    private _doingTasks$ = new BehaviorSubject<any[]>([])
    readonly doingTasks = this._doingTasks$.asObservable().pipe(
        map((tasks) => {
            return structuredClone(tasks)
        }),
    )

    private _doneTasks$ = new BehaviorSubject<any[]>([])
    readonly doneTasks = this._doneTasks$.asObservable().pipe(
        map((tasks) => {
            return structuredClone(tasks)
        }),
    )

    addTask(taskInfos: TaskFormControlsInterface) {
        const newTask: TaskInterface = {
            ...taskInfos,
            status: TaskStatusEnum.TODO,
            id: generateUniqueIdWithTimestamp(),
            comments: [],
        }
        const currentTodoList = this._todoTasks$.value
        this._todoTasks$.next([...currentTodoList, newTask])
    }

    updateTaskStatus(taskId: string, currentStatus: TypeTaskStatus, newStatus: TypeTaskStatus) {
        let taskToUpdate: TaskInterface | undefined
        const currentTaskList = this.getTaskListByStatus(currentStatus)
        const newTaskList = this.getTaskListByStatus(newStatus)
        const currentTask = currentTaskList.value.find(task => task.id === taskId)

        if (currentTask) {
            currentTask.status = newStatus
            const newCurrentTaskList = currentTaskList.value.filter((task) => task.id !== taskId)
            currentTaskList.next([...newCurrentTaskList])
            newTaskList.next([...newTaskList.value, {...currentTask}])
        }
    }

    private getTaskListByStatus(status: TypeTaskStatus) {
        const taskListObj = {
            [TaskStatusEnum.TODO]: this._todoTasks$,
            [TaskStatusEnum.DOING]: this._doingTasks$,
            [TaskStatusEnum.DONE]: this._doneTasks$,
        }

        return taskListObj[status]
    }

    updateUpdate(taskId:string, mewName:string, newDescription:string, status:TypeTaskStatus) {
        const taskList = this.getTaskListByStatus(status)
        const taskIndex = taskList.value.findIndex(task => task.id === taskId)

        if (taskIndex > -1) {
            const newTaskList = [...taskList.value]
            newTaskList[taskIndex] = {
                ...newTaskList[taskIndex],
                name: mewName,
                description: newDescription,
            }
            taskList.next(newTaskList)
        }
    }

    removeTask(taskId: string, taskStatus: TypeTaskStatus) {
        const taskList = this.getTaskListByStatus(taskStatus)
        const task = taskList.value.find(task => task.id === taskId)

        if (task) {
            const newTaskList = taskList.value.filter((task) => task.id !== taskId)
            taskList.next([...newTaskList])
        }
    }

    addCommentToTask(TaskId:string, taskStatus:TypeTaskStatus, comment:CommentInterface) {
        const taskList = this.getTaskListByStatus(taskStatus)
        const taskIndex = taskList.value.findIndex(task => task.id === TaskId)

        if (taskIndex > -1) {
            const newTaskList = [...taskList.value]
            const taskToUpdate = newTaskList[taskIndex]
            const updatedComments = [...taskToUpdate.comments, comment]
            newTaskList[taskIndex] = {
                ...taskToUpdate,
                comments: updatedComments,
            }
            taskList.next(newTaskList)
        }
    }

    removeCommentFromTask(taskId:string, taskStatus:TypeTaskStatus, commentId:string) {
        const taskList = this.getTaskListByStatus(taskStatus)
        const taskIndex = taskList.value.findIndex((task:TaskInterface) => task.id === taskId)

        if (taskIndex > -1) {
            const newTaskList = [...taskList.value]
            const taskToUpdate = newTaskList[taskIndex]
            const updatedComments = taskToUpdate.comments.filter((comment: CommentInterface) => comment.id !== commentId)
            newTaskList[taskIndex] = {
                ...taskToUpdate,
                comments: updatedComments,
            }
            taskList.next(newTaskList)
        }
    }
}
