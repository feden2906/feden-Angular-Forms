import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input()
  editingUser = {
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    },
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
    website: '',
  };
  @Output()
  bubbleUp = new EventEmitter();

  name = new FormControl(this.editingUser.name);
  username = new FormControl(this.editingUser.username);
  email = new FormControl(this.editingUser.email);
  street = new FormControl(this.editingUser.address.street);
  suite = new FormControl(this.editingUser.address.suite);
  city = new FormControl(this.editingUser.address.city);
  zipcode = new FormControl(this.editingUser.address.zipcode);
  lat = new FormControl(this.editingUser.address.geo.lat);
  lng = new FormControl(this.editingUser.address.geo.lng);
  phone = new FormControl(this.editingUser.phone);
  website = new FormControl(this.editingUser.website);
  companyName = new FormControl(this.editingUser.company.name);
  catchPhrase = new FormControl(this.editingUser.company.catchPhrase);
  bs = new FormControl(this.editingUser.company.bs);

  editUser = new FormGroup({
    name: this.username,
    username: this.username,
    email: this.email,
    address: {
      street: this.street,
      suite: this.suite,
      city: this.city,
      zipcode: this.zipcode,
      geo: {
        lat: this.lat,
        lng: this.lng,
      }
    },
    phone: this.phone,
    website: this.website,
    company: {
      name: this.companyName,
      catchPhrase: this.catchPhrase,
      bs: this.bs,
    }
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  closeForm(): void {
    this.bubbleUp.emit('close');
  }
}
