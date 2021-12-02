import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 
  usersInSystem : User[] = [];
  tmpp = false;

  constructor() { }

  registerUser(user: User) {
    let singleUser: User = user;
    const id: string = Guid.create().toString();
    singleUser.id = id;
    this.usersInSystem.push(singleUser);
    
    localStorage.setItem(singleUser.name,JSON.stringify(singleUser));

  }
  login(user: string, _pass: any){
    let userr = JSON.parse(localStorage.getItem(user) || '{}');
   
    if(userr['password']==_pass){
       this.tmpp=true;
    }


  }
}
