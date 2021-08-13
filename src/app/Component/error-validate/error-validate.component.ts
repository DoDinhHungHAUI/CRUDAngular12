import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {


  @Input('frmUserName') Control : any;
  @Input('frmEmpName') Control2 : any;

  constructor() { }
  ngOnInit(): void {
  }

  get message(){
    console.log(this.Control)
    for(let err in this.Control.errors)
    {
      if(this.Control.dirty)
      {
        return this.getErrorMessage(err , this.Control.errors[err]);
      }
    }
    return null;
  }


  get messages()
  {
    console.log(this.Control2)
    for(let err in this.Control2.errors)
    {
      if(this.Control2.dirty)
      {
        return this.getErrorMessage(err , this.Control2.errors[err]);
      }
    }
    return null;
  }

  getErrorMessage(err :any, value : any)
  {
    let message : any ={
      'required' : 'Không được bỏ trống',
      'minlength' : `Vui Lòng Nhập Lớn Hơn : ${value.requiredLength}` + " kí Tự ",
      'maxlength' : `Vui lòng không nhập quá  : ${value.requiredLength}` + " kí Tự",
      'pattern' : 'Không hợp lệ rồi hihi',
    }
    return message[err];
  }






}
