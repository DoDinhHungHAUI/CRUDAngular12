import { User } from 'src/app/Models/user';
import { Component, OnInit } from '@angular/core';

import { FormBuilder , FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public frmUser : FormGroup = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    fullname : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl('')
  });

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.frmUser = this._formBuilder.group({
      username : ['' , [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      password : ['' , [
        Validators.required
      ]],
      fullname : ['', [

        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],

      email : ['' , Validators.pattern('^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')],

      phone : ['' , Validators.required]

    });

    this.frmUser.valueChanges.subscribe(data => {
      console.log(data);
    })

  }

  onSubmitForm()
  {
    console.log(this.frmUser);
  }

  reset()
  {
    this.frmUser.reset();
  }

}
