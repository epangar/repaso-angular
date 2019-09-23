import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['../../styles/_reactive-form.scss']
})


export class ReactiveComponent  {

  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl("", Validators.required),
  });

  get username(){
    return this.form.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}
