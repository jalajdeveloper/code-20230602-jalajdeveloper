
import { getByRole, render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/About';

describe('About', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });
});
