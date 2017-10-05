import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../album.model';
import { MainserviceService } from '../../mainservice.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  album: Album[];
 

  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {

  }

}
