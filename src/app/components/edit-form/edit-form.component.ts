import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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

  editUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  closeForm(): void {
    this.bubbleUp.emit('close');
  }

  private initForm(): void {
    this.editUserForm = this.formBuilder.group({
      name: this.editingUser.name,
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
    const {
      name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs
    } = this.editUserForm.value;

    const editedUser = {
      id: this.editingUser.id,
      name, username, email, phone, website,
      address: {street, suite, city, zipcode,
        geo: {lat, lng}
      },
      company: {name: companyName, catchPhrase, bs}
    };

    this.bubbleUp.emit(editedUser);
  }
}
