import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { type User } from './user/user.model';

@Component({
  selector: 'app-root',
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
