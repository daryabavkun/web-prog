import { Component, OnInit } from '@angular/core';
import { AuthCookie } from '../auth-cookies-handler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isAuthed: boolean;

  constructor(private router: Router, private _authCookie: AuthCookie) { }

  ngOnInit() {
    this._authCookie.getAuth();
    this._authCookie.getAuthState().subscribe(state => {
      this.isAuthed = state;
    });
  }
  buttonLoginLogoutClick() {
    if (this.isAuthed) {
      this._authCookie.deleteAuth();
      this._authCookie.setAdmin(false);
      this.router.navigate(["/"]);
    }
    else {
      this.router.navigate(["/auth"]);
    }
  }
}
