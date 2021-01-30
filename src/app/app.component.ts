import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm} from '@angular/forms';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feden-Angular-Forms';
  fullUser: User;
  editFlag = false;

  // name = new FormControl(this.user.name, this.customVal);
  // age = new FormControl(this.user.age);

  // myForm = new FormGroup({
  //   name: this.name,
  //   age: this.age
  // });


  // submit(form: NgForm): void {
  //   console.log(form);
  // }

  // customVal(inputData: AbstractControl): any {
  //   if (inputData.value.includes('fuck')) {
  //     return {error: true, msg: 'fuck is present'};
  //   }
  //   return null;
  // }


  setChosenUser(user): void {
    if (user === 'edit') {
      console.log(2);
      this.editFlag = true;
    } else if (user === 'close') {
      this.editFlag = false;
    } else {
      this.fullUser = user;
    }
  }
}
