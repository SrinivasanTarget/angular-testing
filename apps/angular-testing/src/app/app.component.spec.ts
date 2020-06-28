import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { render, screen, userEvent } from '@testing-library/angular';
import { AppComponent } from './app.component';

it('should search on username', async () => {
  await render(AppComponent, {
    imports: [HttpClientModule, ReactiveFormsModule],
  });

  const textbox = screen.getByPlaceholderText('Username');

  await userEvent.type(textbox, 'timdeschryver');

  await screen.findByText(/mocked-timdeschryver/i);
});
