import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import {NotFoundComponent} from './not-found/not-found.component';
import {StartPageComponent} from './start-page/start-page.component';
import {AuthorComponent} from './author/author.component';
import {AlbumComponent} from './album/album.component';
import {AdminComponent} from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { ActivateGuard } from './activate-guard';
import { FilesComponent} from './files/files.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
    {path: 'admin', component: AdminComponent, canActivate: [ActivateGuard]},
    {path:'auth', component:AuthComponent},
    {path:'home', component:StartPageComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'author', component:AuthorComponent},
    {path:'album', component:AlbumComponent},
    {path:'reg', component:RegComponent},
    {path:'files', component:FilesComponent},
    {path:'**', component:StartPageComponent}
]; 

@NgModule({ 
imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule] 
}) 
export class AppRoutingModule { }