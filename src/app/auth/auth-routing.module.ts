<<<<<<< HEAD
import {NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


const authRoutes:Routes=[
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent}
];
@NgModule({
declarations:[],
imports:[RouterModule.forChild(authRoutes)],
exports:[RouterModule]

})
export class AuthRoutingModule{}
=======
import {NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


const authRoutes:Routes=[
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent}
];
@NgModule({
declarations:[],
imports:[RouterModule.forChild(authRoutes)],
exports:[RouterModule]

})
export class AuthRoutingModule{}
>>>>>>> a65aeda3b6158854d52c655a7025d795932dfb41
