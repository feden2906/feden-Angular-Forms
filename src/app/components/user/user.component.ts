import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user;
  @Input()
  chosenUser;
  @Input()
  editFlag;
  @Output()
  bubbleUp = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickOnUser(): void {
    this.bubbleUp.emit(this.user);
  }
}
