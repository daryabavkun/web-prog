import { Component, OnInit } from '@angular/core';
import {FilesService} from './files.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { way } from '../config';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.less'],
  providers: [FilesService]
})
export class FilesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  uploadedFiles: FileList;

  isUpload: boolean = false;
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  ngOnInit() {
  }

  fileChange(e){
    this.uploadedFiles = e.target.files;
  }

  upload() {
    let formData = new FormData();
    console.log(this.uploadedFiles[0]);
    console.log(this.uploadedFiles[0].name);
    formData.set('file', this.uploadedFiles[0], this.uploadedFiles[0].name);
    this.isUpload = true;
    
    console.log(formData.get('file'));
    this.httpClient.post(`${way}/upload`,  formData).subscribe(res =>{
        this.isUpload = false;

        if(!res) return alert('Ошибка при отправке файла');

        this.uploadedFiles = null;
        alert('Файл успешно отправлен');
      });
  }
}
