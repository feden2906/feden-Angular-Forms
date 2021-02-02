import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  chosenUser;
  @Input()
  users;
  @Input()
  editFlag;

  @Output()
  bubbleUp = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getChosenUser(user): void {
    this.bubbleUp.emit(user);
  }

}
