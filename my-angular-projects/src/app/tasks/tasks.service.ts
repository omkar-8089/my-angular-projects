import { Injectable } from '@angular/core';
import { NewTask, Task } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private _tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this._tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this._tasks.filter((eachTask) => eachTask.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this._tasks.unshift({
      dueDate: taskData.date,
      summary: taskData.summary,
      title: taskData.title,
      id: new Date().getTime().toString(),
      userId: userId,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this._tasks = this._tasks.filter((eachTask) => eachTask.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }
}
