import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { MainserviceService } from './mainservice.service';
import { AlbumsComponent } from './main/albums/albums.component';
import { PhotosComponent } from './photos/photos.component';

const approutes: Routes = [
  {path: '', component: MainComponent},
  { path: 'albums', component: AlbumsComponent },
  { path: 'photos', component: PhotosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  bootstrap: [AppComponent],
  providers: [MainserviceService]
})
export class AppModule { }
