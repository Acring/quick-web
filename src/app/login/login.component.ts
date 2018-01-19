import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.username = 'acring';
    this.password = '2333';
  }


  login() {
    this.loginService.login(this.username, this.password).subscribe(
      fb=>{  // 反馈信息
        const ret = fb.json();
        console.log(ret);
      },
      err =>{  // 错误信息
        console.log(err);
      }
    )
  }

  register(){
    this.loginService.register(this.username, this.password).subscribe(
      fb=>{
        const ret = fb.json();
        console.log(ret);
      },
      err =>{
        console.log(err)
      }
    )
  }
}
