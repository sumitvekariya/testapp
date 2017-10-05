import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { Photos } from '../photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photos[];
  constructor(private mainservice: MainserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.mainservice.getPictureData(this.route.snapshot.params['id'])
      .subscribe(
      (data: any[]) => {
        this.photos = data;
        console.log(this.photos);
      }
      );
  }

}

