
import { getByRole, render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Explore from '../pages/Explore';

describe('Explore', () => {
  it('render', () => {
    render(
    <MemoryRouter>
      <Explore />
    </MemoryRouter>
    );
  });
});