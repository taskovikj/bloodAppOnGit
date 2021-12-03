import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogged: boolean = false;
  userName: string = 'ime';
  constructor(private registrationService: RegisterService) {
    this.registrationService.isUserLog.subscribe(res => this.isLogged = res);
    this.registrationService.user.subscribe(res => {
      if(res && res.userName){
        this.userName = res.userName;
      }
    });
  }

  ngOnInit(): void {

  }
  logOut()
  {
    this.isLogged = false;
  
  }

}
