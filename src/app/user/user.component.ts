import { Component, Input} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() avatar!: string;
  @Input() name!: string;
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {

  }

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);


 // get imagePath() {
 //   return 'assets/users/' + this.selectedUser().avatar;
 // }

    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);


  }


