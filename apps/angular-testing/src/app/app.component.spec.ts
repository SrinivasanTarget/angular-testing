import { render, screen, fireEvent } from '@testing-library/angular';
import { AppComponent, Album } from './app.component';
import { AlbumService } from './album.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);
test('should be able to load albums', async () => {
  const albums: Album[] = [
    {
      userId: 1,
      id: 1,
      title: 'sarah',
    }
  ];

  const { container } = await render(AppComponent, {
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

  const album = await screen.findByText(/sarah/i);
  expect(album).toBeInTheDocument();

  // Accessibility checks
  const results = await axe(container)

  expect(results).toHaveNoViolations()
});
