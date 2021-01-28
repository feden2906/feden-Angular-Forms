import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input()
  editingUser: User;

  @Output()
  bubbleUp = new EventEmitter();

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  closeForm(): void {
    this.bubbleUp.emit('close');
  }

  private initForm(): void {
   this.myForm = this.formBuilder.group({
     name: this.editingUser.name,
     username: this.editingUser.username,
   });
  }
}
