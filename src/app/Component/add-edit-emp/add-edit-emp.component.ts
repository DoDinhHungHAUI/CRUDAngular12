import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { FormBuilder , FormControl, FormGroup , Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  @Input('employee') employees : any;
  @Input('closeButton') closeButtonToCloseModel : any;

  isSelected : any = null;

  @Output('employeeList')

  onHandleEmployeeList = new EventEmitter<any>();


  EmployeeList : any[] = [];

  id : number = 0;
  name:string = "";
  age?:number;
  gender:string = "";
  major:string = "";


  @Input('isChecked') isChecked : any;


  majorList : any[] = [
    {
      id : 1,
      value : "Công Nghệ Thông Tin"
    },
    {
      id : 2,
      value : "Khoa Học Máy Tính"
    },
    {
      id : 3,
      value : "Kỹ Thuật Phần Mềm"
    },
    {
      id : 4,
      value : "Hệ Thống Thông Tin"
    },
  ]

  constructor(private auth : AuthService ,private _formBuilder : FormBuilder ,private toastr: ToastrService) {
    console.log(this.employees)
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit(): void {
    this.loadEmployeeList()
    this.createForm()
  }

  loadEmployeeList(){
    this.auth.getData().subscribe((data:any)=>{
      this.EmployeeList=data;

      this.id = this.employees.id;
      this.name=this.employees.name;
      this.age=this.employees.age;
      this.gender=this.employees.gender;

      this.major=this.employees.major;

      for(let mj of this.majorList)
      {
        if(mj.value == this.employees.major)
        {
          this.isSelected = mj.id;
          break;
        }
      }

      if(this.id == 0)
      {
        this.isChecked = -1;
      }

    });
  }

  addEmployee(){
    var val =
          {
            id : this.employees.length + 1,
            name:this.name,
            age:this.age,
            gender:this.gender,
            major:this.major,
          };

    this.auth.addEmployee(val).subscribe(res=>{
      this.showSuccess()
    });

    this.closeButtonToCloseModel.nativeElement.click();

    this.auth.getData().subscribe((data:any)=>{
      this.EmployeeList=data;
    });

    console.log(this.EmployeeList);

    this.onHandleEmployeeList.emit(this.EmployeeList);

  }

  updateEmployee(){

    var val = {
      id : this.id,
      name:this.name,
      age:this.age,
      gender:this.gender,
      major:this.major,
    };

    console.log(val);

    this.auth.updateEmployee(val).subscribe(res=>{
      console.log(res);
    });

    this.closeButtonToCloseModel.nativeElement.click();

    // this.auth.getData().subscribe((data:any)=>{
    //   this.EmployeeList=data;
    // });

    this.onHandleEmployeeList.emit(this.EmployeeList);

  }

  onCheckboxChange(event : any)
  {

    event.target.value == 0 ? this.gender = "Nam" : this.gender = "Nữ"

    console.log(this.gender);
    console.log(this.isChecked);
  }

  selectOption(value : any)
  {
    this.major = this.majorList[value.target.value-1].value;
    console.log(this.major);

  }

  public frmEmp : FormGroup = new FormGroup({

    username : new FormControl(''),
    age : new FormControl('')
  });



  createForm(){
    this.frmEmp = this._formBuilder.group({
      username : ['' , [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]],
      age : ['' , [
        Validators.required,
        Validators.pattern('^\S[0-9]{0,3}$')
      ]],
    });

    this.frmEmp.valueChanges.subscribe(data => {
      console.log(data);
    })

  }





}
