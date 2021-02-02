import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Errorw} from '../../models/error';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input()
  allUsers;
  @Input()
  editingUser;
  @Output()
  bubbleUp = new EventEmitter();

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
      name: new FormControl(this.editingUser.name, [this.requiredVal, this.badWorldVal, this.minLengthVal, this.maxLengthVal]),
      username: new FormControl(this.editingUser.username,
        [this.requiredVal, this.badWorldVal, this.uniqueUsernameVal.bind(this), this.minLengthVal, this.maxLengthVal]),
      email: new FormControl(this.editingUser.email, [this.requiredVal, this.emailVal, this.badWorldVal]),
      street: new FormControl(this.editingUser.address.street, [this.badWorldVal, this.minLengthVal, this.maxLengthVal]),
      suite: new FormControl(this.editingUser.address.suite, [this.badWorldVal, this.minLengthVal, this.maxLengthVal]),
      city: new FormControl(this.editingUser.address.city, [this.badWorldVal]),
      zipcode: new FormControl(this.editingUser.address.zipcode, [this.badWorldVal]),
      lat: new FormControl(this.editingUser.address.geo.lat, [this.badWorldVal]),
      lng: new FormControl(this.editingUser.address.geo.lng, [this.badWorldVal]),
      phone: new FormControl(this.editingUser.phone, [this.requiredVal, this.badWorldVal]),
      website: new FormControl(this.editingUser.website, [this.badWorldVal, this.minLengthVal]),
      companyName: new FormControl(this.editingUser.company.name, [this.badWorldVal, this.minLengthVal, this.maxLengthVal]),
      catchPhrase: new FormControl(this.editingUser.company.catchPhrase, [this.badWorldVal]),
      bs: new FormControl(this.editingUser.company.bs, [this.badWorldVal])
    });
  }

  saveForm(editUserForm): void {
    editUserForm.markAllAsTouched();
    if (editUserForm.status === 'VALID') {
      const {
        name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs
      } = this.editUserForm.value;

      const editedUser = {
        id: this.editingUser.id,
        name, username, email, phone, website,
        address: {
          street, suite, city, zipcode,
          geo: {lat, lng}
        },
        company: {name: companyName, catchPhrase, bs}
      };

      this.bubbleUp.emit(editedUser);
    }
  }


  // V A L I D A T O R S //

  badWorldVal(inputData: AbstractControl): Errorw {
    const arrBadWords = [
      'архипиздрит', 'басран', 'бздение', 'бздеть', 'бздех', 'бзднуть', 'бздун', 'бздунья', 'бздюха', 'бикса', 'блежник', 'блудилище', 'бляд', 'блябу', 'блябуду', 'блядун', 'блядунья', 'блядь', 'блядюга', 'взьебка', 'волосянка', 'взьебывать', 'выблядок', 'выблядыш', 'выебать', 'выеть', 'выпердеть', 'высраться', 'выссаться', 'говенка', 'говенный', 'говешка', 'говназия', 'говнецо', 'говно', 'говноед', 'говночист', 'говнюк', 'говнюха', 'говнядина', 'говняк', 'говняный', 'говнять', 'гондон', 'дермо', 'долбоеб', 'дрисня', 'дрист', 'дристать', 'дристануть', 'дристун', 'дристуха', 'дрочена', 'дрочила', 'дрочилка', 'дрочить', 'дрочка', 'ебало', 'ебальник', 'ебануть', 'ебаный', 'ебарь', 'ебатория', 'ебать', 'ебаться', 'ебец', 'ебливый', 'ебля', 'ебнуть', 'ебнуться', 'ебня', 'ебун', 'елда', 'елдак', 'елдачить', 'заговнять', 'задристать', 'задрока', 'заеба', 'заебанец', 'заебать', 'заебаться', 'заебываться', 'заеть', 'залупа', 'залупаться', 'залупить', 'залупиться', 'замудохаться', 'засерун', 'засеря', 'засерать', 'засирать', 'засранец', 'засрун', 'захуячить', 'злоебучий', 'изговнять', 'изговняться', 'кляпыжиться', 'курва', 'курвенок', 'курвин', 'курвяжник', 'курвяжница', 'курвяжный', 'манда', 'мандавошка', 'мандей', 'мандеть', 'мандища', 'мандюк', 'минет', 'минетчик', 'минетчица', 'мокрохвостка', 'мокрощелка', 'мудак', 'муде', 'мудеть', 'мудила', 'мудистый', 'мудня', 'мудоеб', 'мудозвон', 'муйня', 'набздеть', 'наговнять', 'надристать', 'надрочить', 'наебать', 'наебнуться', 'наебывать', 'нассать', 'нахезать', 'нахуйник', 'насцать', 'обдристаться', 'обдристаться', 'обосранец', 'обосрать', 'обосцать', 'обосцаться', 'обсирать', 'опизде', 'отпиздячить', 'отпороть', 'отъеть', 'охуевательский', 'охуевать', 'охуевающий', 'охуеть', 'охуительный', 'охуячивать', 'охуячить', 'педрик', 'пердеж', 'пердение', 'пердеть', 'пердильник', 'перднуть', 'пердун', 'пердунец', 'пердунина', 'пердунья', 'пердуха', 'пердь', 'передок', 'пернуть', 'пидор', 'пизда', 'пиздануть', 'пизденка', 'пиздеть', 'пиздить', 'пиздища', 'пиздобратия', 'пиздоватый', 'пиздорванец', 'пиздорванка', 'пиздострадатель', 'пиздун', 'пиздюга', 'пиздюк', 'пиздячить', 'писять', 'питишка', 'плеха', 'подговнять', 'подъебнуться', 'поебать', 'поеть', 'попысать', 'посрать', 'поставить', 'поцоватый', 'презерватив', 'проблядь', 'проебать', 'промандеть', 'промудеть', 'пропиздеть', 'пропиздячить', 'пысать', 'разъеба', 'разъебай', 'распиздай', 'распиздеться', 'распиздяй', 'распроеть', 'растыка', 'сговнять', 'секель', 'серун', 'серька', 'сика', 'сикать', 'сикель', 'сирать', 'сирывать', 'скурвиться', 'скуреха', 'скурея', 'скуряга', 'скуряжничать', 'спиздить', 'срака', 'сраный', 'сранье', 'срать', 'срун', 'ссака', 'ссаки', 'ссать', 'старпер', 'струк', 'суходрочка', 'сука', 'сцавинье', 'сцака', 'сцаки', 'сцание', 'сцать', 'сциха', 'сцуль', 'сцыха', 'сыкун', 'титечка', 'титечный', 'титка', 'титочка', 'титька', 'трипер', 'триппер', 'уеть', 'усраться', 'усцаться', 'фик', 'фуй', 'хезать', 'хер', 'херня', 'херовина', 'херовый', 'хитрожопый', 'хлюха', 'хуевина', 'хуевый', 'хуек', 'хуепромышленник', 'хуерик', 'хуесос', 'хуище', 'хуй', 'хуйня', 'хуйрик', 'хуякать', 'хуякнуть', 'целка', 'шлюха', 'fuck'
    ];
    let error = null;
    arrBadWords.map(item => {
      if (inputData.value.toLowerCase().includes(item)) {
        error = {error: true, msg: `${item} is present`};
      }
    });
    return error;
  }

  minLengthVal(inputData: AbstractControl): Errorw {
    let error = null;
    if (inputData.value.length < 5) {
      error = {error: true, msg: 'minimum number of characters is 5'};
    }
    return error;
  }

  maxLengthVal(inputData: AbstractControl): Errorw {
    let error = null;
    if (inputData.value.length > 30) {
      error = {error: true, msg: 'maximum number of characters is 30'};
    }
    return error;
  }

  requiredVal(inputData: AbstractControl): Errorw {
    let error = null;
    if (inputData.value === '') {
      error = {error: true, msg: 'cannot be empty'};
    }
    return error;
  }

  emailVal(inputData: AbstractControl): Errorw {
    let error = null;
    if (!inputData.value.includes('@')) {
      error = {error: true, msg: 'mast type correct email'};
    }
    return error;
  }

  uniqueUsernameVal(inputData: AbstractControl): Errorw {
    let error = null;
    const findUser = this.allUsers.find(x => inputData.value === x.username);
    this.allUsers.map(({id, username}) => {
      if (inputData.value === username && findUser.id !== id) { // TODO  не враховуэться що користувач якого редагуэмо маэ такий Username //
        error = {error: true, msg: `username ${inputData.value} already booked`};
      }
    });
    return error;
  }
}
