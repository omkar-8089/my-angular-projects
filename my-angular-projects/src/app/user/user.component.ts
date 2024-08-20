import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  // @Input({ required: true} ) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();


  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imgPath = computed(() => 'assets/users/' + this.avatar());



  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }


  // selectedUser = DUMMY_USERS[randomUserIndex];
  // selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath () {
  //   // console.log('GETTER called')
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user.id);

    // const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
    // // this.selectedUser = DUMMY_USERS[randomUserIndex];
    // console.log('Click event called.')
  }
}
