
import {NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
@NgModule(
{
declarations:[SigninComponent,
              SignupComponent],
imports :[FormsModule,CommonModule
]
})
export class AuthModule{

}
