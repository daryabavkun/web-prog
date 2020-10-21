import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import { AlbumComponent } from './album/album.component';
import {HttpClientModule} from '@angular/common/http'
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms'
import { AuthCookie } from './auth-cookies-handler';
import { ActivateGuard } from './activate-guard';
import { CKEditorModule } from 'ng2-ckeditor';
import { FilesComponent } from './files/files.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WebSocketService } from './web-soket';
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    NotFoundComponent,
    AuthorComponent,
    AlbumComponent,
    AdminComponent,
    AuthComponent,
    RegComponent,
    FilesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthCookie,
    ActivateGuard,
    CKEditorModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
