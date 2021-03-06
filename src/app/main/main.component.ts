import { Response } from '@angular/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import 'rxjs/Rx';
import { Users } from '../users.model';
import { Album } from '../album.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: Users[];
  constructor(private mainservice: MainserviceService) { }
  
  ngOnInit() {
    this.mainservice.getUserData()
      .subscribe(
      (data: any[]) => {
        this.users = data;
        console.log(this.users);
      }
      );
  }


  

}
