import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['../../styles/_reactive-form.scss']
})


export class ReactiveComponent  {

  form = new FormGroup({

    account: new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique
      ]),
      password: new FormControl("", 
        Validators.required
      ),
    }),
    
  });

  login(){
    
      this.form.setErrors({
        invalidLogin : true,
      })
  }
  
  get username(){
    return this.form.get('account.username');
  }

  formArrayOfObjects= new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
  }

  constructor() { }

  ngOnInit() {
    console.clear()
  }

}
