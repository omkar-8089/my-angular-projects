import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NewTaskComponent, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) selectedUserTask!: Task;

  constructor(private readonly taskService: TasksService) {

  }

  onCompleteTask() {
    this.taskService.removeTask(this.selectedUserTask.id);
  }
}
