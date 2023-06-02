import { getByRole, render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });
});