import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Photo } from '../gallery/Photo';
import { AuthCookie } from '../auth-cookies-handler';
import { Router } from '@angular/router';
import { way } from '../config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  photos: Photo[] = [];
  isUpdate: boolean = false;
  photo: Photo = new Photo();

  constructor(private router: Router, private httpClient: HttpClient, private _authCookie: AuthCookie) { }
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  ngOnInit() {
    if (!this._authCookie.getAuth()) {
      return this.router.navigate(["/"]);
    }    
    this.httpClient.post(`${way}/gallery`, `data=${JSON.stringify({token: this._authCookie.getAuth()})}`, this.options).subscribe((result: any) => {
      if (result) {
        this.photos = result;
      }
      else {
        this.router.navigate(["/"]);
      }
    });
  }

  buttonCreateUpdateClick() {
    if (this.isUpdate) {
      this.Update();
    }
    else {
      this.Create();
    }
  }

  Create(){
    this.httpClient.post(`${way}/gallery/create`,`data=${JSON.stringify({token: this._authCookie.getAuth(), data: this.photo})}`,  this.options).subscribe((result: any) => {
      if (!result) return;
      this.photos.push({id: result.id, URL: result.URL, categoryName: result.categoryName, author: result.author, description: result.description});
      this.photo = new Photo();
    });
  }

  buttonLoadUpdateClick(id: string) {
    this.photo = JSON.parse(JSON.stringify(this.photos.find(x => x.id == parseInt(id))));
    this.isUpdate = true;
  }

  Update() {
    console.log(this.photo);
    this.httpClient.post(`${way}/gallery/update`, `data=${JSON.stringify({token: this._authCookie.getAuth(), data: this.photo})}`, this.options).subscribe((result: any) => {
      console.log("RESULT");
      if (!result) return;
      let photosIndex = this.photos.findIndex(x => x.id == result.id);
      if (photosIndex == -1) return;
      this.photos[photosIndex] = result;
      this.photo = new Photo();
    });
    this.isUpdate = false;
  }
  
  buttonDeleteClick(id: number) {
    this.httpClient.post(`${way}/gallery/delete`, `data=${JSON.stringify({token: this._authCookie.getAuth(), data: {
      id: id
    }})}`, this.options).subscribe((result: any) => {
      if (result) {
        let photosIndex = this.photos.findIndex(x => x.id == id);
        if (photosIndex == -1) return;
        this.photos.splice(photosIndex, 1);
      }
    });
  }

}
