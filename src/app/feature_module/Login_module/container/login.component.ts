import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ILogin } from '../models/ILogin.model';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetailsArray: ILogin[]=[];
  loginForm = this.fb.group({
    email: ['',[Validators.email]],
    password: ['',[Validators.required]]
  })
  loginError!: string

  constructor(private fb: FormBuilder, private router:Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  loginFormSubmit(){
    this._loginService.login().subscribe({
      next: (response) =>{
        this.loginDetailsArray = response.body;
      }
    })
    const result = this.loginDetailsArray.filter(value => value.email === this.loginForm.controls['email'].value);
    console.log("result",result)
    // if(result){
    //   this.router.navigate(['home']);
    // }
    // else{
    //   this.loginError = "Incorrect login creds!" 
    // }
  }

}
