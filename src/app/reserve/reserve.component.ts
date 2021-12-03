import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationsService } from '../services/notifications.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

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
  submit()
  {
    this.notifications.success(this.userName + " успешно закажавте термин!")
  }

}
