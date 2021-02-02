import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  @Input()
  fullUser;
  @Output()
  bubbleUp = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  editUserInfo(): void {
    this.bubbleUp.emit('edit');
  }

  closeInfo(): void {
    this.bubbleUp.emit(null);
  }
}
