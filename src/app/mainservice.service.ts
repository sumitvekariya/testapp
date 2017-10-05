import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import 'rxjs/Rx';
import { Users } from './users.model';
import { Album } from './album.model';
import { Photos } from './photos.model';

@Injectable()
export class MainserviceService {

  constructor(private httpclient: HttpClient) { }

    getUserData() {
      return this.httpclient.get('https://jsonplaceholder.typicode.com/users')
      .map(
        data => {
          return data;
        }
      );
    }



    // getAlbumData(id: number) {
    //   return this.httpclient.get('https://jsonplaceholder.typicode.com/albums?userId=' + id)
    //   .map(
    //     data => {
    //       return data;
    //     }
    //   );
    // }

    getAlbumData(id) {
      return this.httpclient.get('https://jsonplaceholder.typicode.com/albums?userId=' + id)
        .map(
        data => {
          console.log(id);
          return data;
        }
      );
    }

    getPictureData(id) {
      return this.httpclient.get('https://jsonplaceholder.typicode.com/photos?albumsId=' + id)
        .map(
        data => {
          return data;
        }
       );
    }

}
