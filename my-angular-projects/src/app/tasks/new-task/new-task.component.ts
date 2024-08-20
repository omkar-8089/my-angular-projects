import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal
} from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeAddTaskDialog = new EventEmitter<void>();

  // enteredTitle = '';
  // enteredSummary = '';
  // enteredDate = '';
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  private taskService = inject(TasksService);

  onCancelAddNewTask() {
    this.closeAddTaskDialog.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId
    );
    this.closeAddTaskDialog.emit();
  }
}
