import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  // providers: [TaskService]
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  // constructor(private taskService: TaskService) {
  // }
  constructor(private taskService: TaskService) {
  }

  onAddTask(title: string, description: string) {
    this.formEl()?.nativeElement.reset();
    this.taskService.addTask({
      title,
      description
    })
  }
}
