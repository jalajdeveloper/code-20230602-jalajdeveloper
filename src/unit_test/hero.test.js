import { render, screen, act, fireEvent, waitFor,getByRole } from '@testing-library/react';
import Hero from '../components/Hero';
import { MemoryRouter } from 'react-router-dom';
describe('Hero', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
});
// it('inputcontainer', async () => {
//     render(
//       <MemoryRouter>
//       <Hero />
//     </MemoryRouter>
//         );
//         expect(screen.getByRole('inputcontainer'));
        
// });

});