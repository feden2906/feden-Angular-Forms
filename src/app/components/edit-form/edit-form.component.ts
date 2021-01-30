import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input()
  editingUser;
  @Output()
  bubbleUp = new EventEmitter();

  // name = new FormControl(this.editingUser.name);
  // username = new FormControl(this.editingUser.username);
  // email = new FormControl(this.editingUser.email);
  // street = new FormControl(this.editingUser.address.street);
  // suite = new FormControl(this.editingUser.address.suite);
  // city = new FormControl(this.editingUser.address.city);
  // zipcode = new FormControl(this.editingUser.address.zipcode);
  // lat = new FormControl(this.editingUser.address.geo.lat);
  // lng = new FormControl(this.editingUser.address.geo.lng);
  // phone = new FormControl(this.editingUser.phone);
  // website = new FormControl(this.editingUser.website);
  // companyName = new FormControl(this.editingUser.company.name);
  // catchPhrase = new FormControl(this.editingUser.company.catchPhrase);
  // bs = new FormControl(this.editingUser.company.bs);

  // editUser = new FormGroup({
  //   name: this.username,
  //   username: this.username,
  //   email: this.email,
  //   address: {
  //     street: this.street,
  //     suite: this.suite,
  //     city: this.city,
  //     zipcode: this.zipcode,
  //     geo: {
  //       lat: this.lat,
  //       lng: this.lng,
  //     }
  //   },
  //   phone: this.phone,
  //   website: this.website,
  //   company: {
  //     name: this.companyName,
  //     catchPhrase: this.catchPhrase,
  //     bs: this.bs,
  //   }
  // }
  // );

  editUserForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  closeForm(): void {
    this.bubbleUp.emit('close');
  }


  private initForm(): void {
    this.editUserForm = this.formBuilder.group({
      name: this.editingUser.username,
      username: this.editingUser.username,
      email: this.editingUser.email,
      street: this.editingUser.address.street,
      suite: this.editingUser.address.suite,
      city: this.editingUser.address.city,
      zipcode: this.editingUser.address.zipcode,
      lat: this.editingUser.address.geo.lat,
      lng: this.editingUser.address.geo.lng,
      phone: this.editingUser.phone,
      website: this.editingUser.website,
      companyName: this.editingUser.company.name,
      catchPhrase: this.editingUser.company.catchPhrase,
      bs: this.editingUser.company.bs,
    });
  }

  saveForm(): void {
    const {name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs} = this.editUserForm.value;
    const editedUser = {
      name, username, email, phone, website,
      address: {street, suite, city, zipcode,
        geo: {lat, lng}
      },
      company: {
        name: companyName,
        catchPhrase,
        bs,
      }
    };
    console.log(editedUser);
    this.bubbleUp.emit('close');
  }
}
