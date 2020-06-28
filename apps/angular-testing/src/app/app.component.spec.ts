import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen, userEvent, fireEvent } from '@testing-library/angular';
import { AppComponent, Album } from './app.component';
import { AlbumService } from './album.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

it('should be able to load albums', async () => {
  const albums: Album[] = [
    {
      userId: 1,
      id: 1,
      title: 'sarah',
    }
  ];

  await render(AppComponent, {
    imports: [HttpClientModule, ReactiveFormsModule],
    componentProviders: [
      {
        provide: AlbumService,
        useValue: {
          getAlbums() {
            return of(albums);
          },
        },
      },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  });

  fireEvent.click(screen.getByRole('button', { name: /get albums/i }));

  await screen.findByText(/sarah/i);
});
