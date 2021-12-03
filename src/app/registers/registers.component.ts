import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';




@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {


  submitted = false;
  starShipForm!: FormGroup;


  constructor(private fb: FormBuilder,private registerUser: RegisterService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.starShipForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      motherName: ['', Validators.required],
      fatherName: ['', Validators.required],
      address:['',Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],


    });

  }

  register() {

    this.registerUser.registerUser(this.starShipForm.value);
    this.router.navigate(['login']);

  }

}

