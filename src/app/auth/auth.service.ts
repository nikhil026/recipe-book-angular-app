import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()

export class AuthService{
  token:string;
  errorCode:any;
  constructor(private router:Router ){}

  signupUser(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password);
    this.router.navigate(['signin'])

      .catch(
          error=>console.log(error))
        }

 signinUser(email:string,password:string){

     firebase.auth().signInWithEmailAndPassword(email,password)
       .then((response)=>{
       this.router.navigate(['recipes']);
          firebase.auth().currentUser.getToken()
                    .then((token:string)=>{
                      this.token=token;})
            .catch(
              (code)=>{console.log(code);
            })
       });
    }

getToken(){
firebase.auth().currentUser.getToken()
.then((token:string)=>{
this.token=token;})
return this.token;
}

isAuthenticated(){
return this.token!=null;
}
logout(){
  this.router.navigate(['signin']);
  firebase.auth().signOut();
  this.token=null;

}
}
