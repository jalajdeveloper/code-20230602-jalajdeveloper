
import { getByRole, render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import InputSec from '../components/InputSec';

describe('InputSec', () => {
  it('render', () => {
    render(
          <InputSec />
    );
    
  });
  it('should change the value of the input elements', async () => {
    render(
        <InputSec />
        );
        expect(screen.getByRole('inputField'));
        const Input = screen.getByRole('inputField');
       
act(() => {
    fireEvent.change(Input, { target: { value: 'Delhi' } });
  });
  await waitFor(() => {
    expect(Input.value).toBe('Delhi');
  });
});
  });
