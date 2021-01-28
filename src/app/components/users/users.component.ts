import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  chosenUser: User;

  @Input()
  editFlag;

  @Output()
  bubbleUp = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
    if (!this.users) {
    // console.log('dfgh');
      this.userService.getAllUsers().subscribe(value => {
        this.users = value;
        localStorage.setItem('users', JSON.stringify(value));
      });
    }
  }

  getChosenUser(user): void {
    this.bubbleUp.emit(user);
    this.chosenUser = user;
  }

}
