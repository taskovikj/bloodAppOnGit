import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-deficit-bt',
  templateUrl: './deficit-bt.component.html',
  styleUrls: ['./deficit-bt.component.css']
})
export class DeficitBtComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private registrationService: RegisterService) {
    this.registrationService.isUserLog.subscribe(res => this.isLogged = res);
  }

  ngOnInit(): void {
  }

}
