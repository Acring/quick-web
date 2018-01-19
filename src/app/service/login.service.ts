import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";


@Injectable()
export class LoginService { // 登录服务

  constructor(private http:Http ) { console.log("登录服务初始化")}

  login(username, password){
    const headers = new Headers();
    headers.append('Content-Type', 'text/plain');

    if(!username || username == ""){
      return;
    }
    if(!password || password == ""){
      return;
    }
    let data = {username: username,password: password};

    return this.http.post("http://127.0.0.1:6661/api/login",JSON.stringify(data), {headers: headers});

  }

  register(username, password){
    const headers = new Headers();

    headers.append('Content-Type', 'text/plain');

    let data = {username: username,password: password};

    return this.http.post("http://127.0.0.1:6661/api/register", JSON.stringify(data), {headers: headers});
  }
}
