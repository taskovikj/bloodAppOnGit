import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import { User } from 'src/models/user';
import { LoginUser } from 'src/models/loginUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 
  usersInSystem : User[] = [];
 

  constructor(private router: Router) {
    
    
   }

  registerUser(user: User) {
    let singleUser: User = user;
    const id: string = Guid.create().toString();
    singleUser.id = id;
    this.usersInSystem.push(singleUser);
    
    localStorage.setItem(singleUser.name,JSON.stringify(singleUser));

  }
  login(user : LoginUser){
    let userrr : LoginUser = user;
    let name=userrr['userName'];
    let pass=userrr['password'];
    let userr = JSON.parse(localStorage.getItem(name) || '{}');
    let nameFromLocal=userr['name'];
    let passFromLocal=userr['password'];
    console.log(userr);
    if(name==nameFromLocal && pass==passFromLocal){
      
      this.router.navigate(['']);
    }else{
      
      this.router.navigate(['/login']);
    }


    }
  }


