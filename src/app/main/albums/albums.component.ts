import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../album.model';
import { MainserviceService } from '../../mainservice.service';
import { Photos } from '../../photos.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  temp: Photos[];

  constructor(private mainservice: MainserviceService, private route: ActivatedRoute, private httpclient: HttpClient) { }

  ngOnInit() {

    this.mainservice.getPictureData(this.route.snapshot.params['id'])
    .subscribe(
      (data: any[]) => {
         this.temp = data;
      }
    )

      this.mainservice.getAlbumData(this.route.snapshot.params['id'])
        .subscribe(
        (data: any[]) => {
          this.albums = data;
          console.log(this.albums);
        }
      );
  }

}
