import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Album } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http
      .get<Album[]>(`https://jsonplaceholder.typicode.com/albums`);
  }
}
