import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../services/register.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ime : string = "";
  loginForm!: FormGroup;
  baseUrl: string = 'http://localhost:50732/';

  constructor(private formBuilder: FormBuilder,private router: Router,private http: HttpClient,private registerUser: RegisterService,private notifi:NotificationsService) {


   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]

  })
}

  login(){

        // if(this.loginForm.valid)
        // {
          this.registerUser.login(this.loginForm.value)
          this.notifi.success("Успешно се логиравте!")
        // }
        // else if(this.loginForm.invalid)
        // {
        //   this.notifi.error("Неуспешен обид!");
        // }













}
}
