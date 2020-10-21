import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthCookie} from '../auth-cookies-handler';
import {Router} from '@angular/router';
import { way } from '../config';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less'],
})
export class StartPageComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient, private _authCookie: AuthCookie) { }
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  ngOnInit() {
    const token = this.getTokenFromHref(document.location.href);
    const email = this.getEmail(document.location.href);
    if(email == null || token == null){
      return;
    }
    this.httpClient.post(`${way}/loginVk`,  `data=${JSON.stringify({
      login: email,
      oAuthToken: token
    })}`, this.options).subscribe((resultFromServer: any) => {
      if (!resultFromServer) { return; }
      this._authCookie.setAuth(resultFromServer.token);
      this._authCookie.setAdmin(resultFromServer.isAdmin);
      this.router.navigate(['/']);
    });  
  }

  getTokenFromHref(href){
    const startIndex = href.indexOf('access_token=');
    const endIndex = href.indexOf('&');
    if(startIndex !== -1){
      return href.slice(startIndex + 13, endIndex !== -1 ? endIndex : href.length);
    }
  }

  getEmail(href){
    const startIndex = href.indexOf('email=');
    if(startIndex !== -1){
      return href.slice(startIndex + 6, href.length);
    }
  }
}
