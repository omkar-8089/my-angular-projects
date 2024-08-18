import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { CommonModule } from '@angular/common';
import { type User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-projects';

  users: User[] = DUMMY_USERS;
  user = this.users[0];
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((eachUser) => eachUser.id == this.selectedUserId)!;
  }

  onSelectId(id: string) {
    this.selectedUserId = id;
  }
}
