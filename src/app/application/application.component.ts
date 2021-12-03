import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  userName: string = 'ime';
  isLogged: boolean = false;
  constructor(private registrationService: RegisterService,private notifications:NotificationsService ) {
    this.registrationService.isUserLog.subscribe(res => this.isLogged = res);
    this.registrationService.user.subscribe(res => {
      if(res && res.userName){
        this.userName = res.userName;
      }
    });
  }

  ngOnInit(): void {
  }
  apply()
  {
    this.notifications.success(this.userName + " успешно аплициравте!")
  }


}
