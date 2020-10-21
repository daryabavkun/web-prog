import { Injectable, NgModule } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
@NgModule()
export class AuthCookie {
    constructor() {}

    private authState = new BehaviorSubject(Cookie.get('id_token') != null);

    getAuthState(): Observable<boolean> {
        return this.authState;
    }

    getAuth(): string {
        if (!Cookie) {return ; }
        return Cookie.get('id_token');
    }

    setAuth(value: string): void {
        if (!value) return;
        if (!Cookie) {return ; }
        this.authState.next(true);
        Cookie.set('id_token', value);
    }

    deleteAuth(): void {
        if (!Cookie) {return ; }
        this.authState.next(false);
        Cookie.delete('id_token');
    } 
    
    getAdmin(): boolean {
        if (!Cookie) {return ; }
        return JSON.parse(Cookie.get('user_admin'));
    }
  
    setAdmin(value: boolean): void {
        if (!value) { return; }
        if (!Cookie) {return ; }
        Cookie.set('user_admin', JSON.stringify(value));
    }
} 