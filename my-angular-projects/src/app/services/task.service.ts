import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../tasks/task.model';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private logService = inject(LogService);
  private tasks = signal<Task[]>([]);
  public allTasks = this.tasks.asReadonly();
  constructor() {}

  addTask(newTaskData: { title: string; description: string }) {
    const newTask: Task = {
      ...newTaskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((prevTasks) => {
      return [...prevTasks, newTask];
    });
    this.logService.log('ADDED TASK WITH TITLE ' + newTaskData.title);
  }

  updateTaskStatus(taskId: string, newTaskStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newTaskStatus } : task
      )
    );
    this.logService.log('CHANGE TASK STATUS TO ' + newTaskStatus);
  }
}
