import { Component, EventEmitter, Input, Output} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users'
import { type User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input ({required:true}) selected!: boolean;
  @Output() select = new EventEmitter();
  // select = output<string>();


  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);


 // get imagePath() {
 //   return 'assets/users/' + this.selectedUser().avatar;
 // }

    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);


  }


