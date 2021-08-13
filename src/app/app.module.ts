import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';



import { HttpClientModule}
from '@angular/common/http';

import { AuthService } from './service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowEmpComponent } from './Component/show-emp/show-emp.component';
import { AddEditEmpComponent } from './Component/add-edit-emp/add-edit-emp.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ErrorValidateComponent } from './Component/error-validate/error-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormComponent,
    ErrorValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut : 2200,
      positionClass : 'toast-top-left',
      preventDuplicates : true
    }), // ToastrModule added


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
