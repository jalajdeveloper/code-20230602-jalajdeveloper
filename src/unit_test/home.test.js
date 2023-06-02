import { getByRole, render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('homecontainer'))
  });
});