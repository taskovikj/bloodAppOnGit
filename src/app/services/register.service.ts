import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import { User } from 'src/models/user';
import { LoginUser } from 'src/models/loginUser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  usersInSystem : User[] = [];
  isUserLog = new BehaviorSubject<any>(false);
  user = new BehaviorSubject<any>(null);




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
      this.isUserLog.next(true);
      this.user.next(user);
      this.router.navigate(['']);
    }else{
      this.isUserLog.next(false);
      this.router.navigate(['/login']);
    }


    }
  }


