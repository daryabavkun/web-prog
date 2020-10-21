import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';

export const ROUTES: Routes = [
  { path: '', component: GalleryComponent}
];


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class GalleryModule { }
