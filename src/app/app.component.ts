import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feden-Angular-Forms';
  user = {name: 'vasya', age: 123};

  name = new FormControl(this.user.name, this.customVal);
  age = new FormControl(this.user.age);

  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  // submit(form: NgForm): void {
  //   console.log(form);
  // }

  customVal(inputData: AbstractControl): any {
    if (inputData.value.includes('fuck')) {
      return {error: true, msg: 'fuck is present'};
    }
    return null;
  }


}
