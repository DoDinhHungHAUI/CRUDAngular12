import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  public user : User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(value : any)
  {
    console.log(value);
  }

  reset(value : any)
  {
    value.reset();
  }


}
