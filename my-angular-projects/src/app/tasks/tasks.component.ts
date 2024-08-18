import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { type NewTask, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

const dummyTasks: Task[] = [
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
]

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  // selectedUserName = input.required<string>();
  @Input({required: true}) userId!: string;
  @Input({ required: true }) selectedUserName?: string;
  isAddingNewTask: boolean = false;
  tasks = [] as Task[];

  // private taskService = new TasksService()

  constructor(private readonly taskService: TasksService) {
  }


  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.isAddingNewTask = true;
  }

  onCloseNewTaskDialog() {
    this.isAddingNewTask = false;
  }

  onAddNewTask(newTaskDetail: NewTask) {
    this.taskService.addTask(newTaskDetail, this.userId);
    this.isAddingNewTask = false;
  }
}
