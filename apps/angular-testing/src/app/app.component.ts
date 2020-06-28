import { Component } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'angular-testing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: AlbumService) { }
  availableAlbums: Album[];
  show = false;

  getAllAlbums() {
    this.service.getAlbums().subscribe((result) => {
      this.availableAlbums = result;
      this.show = true;
    });
  }
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}
