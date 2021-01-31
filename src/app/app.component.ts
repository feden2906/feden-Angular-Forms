import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'feden-Angular-Forms';
  fullUser: User;
  editFlag = false;
  users: User[];

  constructor(private userService: UserService) {}

  setUsers(value): void {
    this.users = value;
    localStorage.setItem('users', JSON.stringify(value));
  }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
    if (!this.users) {
      this.userService.getAllUsers().subscribe(value => {
        this.setUsers(value);
      });
    }
  }

  setChosenUser(user): void {
    if (user === 'edit') {
      this.editFlag = true;

    } else if (user === 'close') {
      this.editFlag = false;

    } else if (!user) {
      this.fullUser = null;

    } else {
      this.editFlag = false;
      this.fullUser = user;

      const arr = (this.users.filter(({id}) => id !== user.id));
      arr.push(user);
      arr.sort((a, b) => a.id - b.id);
      this.setUsers(arr);
    }
  }
}
