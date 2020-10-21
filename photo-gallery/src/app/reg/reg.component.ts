import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthCookie } from '../auth-cookies-handler';
import { Router } from '@angular/router';
import { way } from '../config';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.less']
})
export class RegComponent implements OnInit {
  login: string = "";
  password: string = "";

  constructor(private router: Router, private httpClient: HttpClient, private _authCookie: AuthCookie) { }
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  ngOnInit() {
    if (this._authCookie.getAuth()) {
      this.router.navigate(["/"]);
    }
  }

  buttonRegisterClick() {
    this.httpClient.post(`${way}/reg`, `data=${JSON.stringify({
      login: this.login,
      password: this.password
    })}`, this.options).subscribe((result: any) => {
      if (!result) return;
      this.router.navigate(["/auth"]);
    });
  }
}
