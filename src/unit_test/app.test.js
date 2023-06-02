import {  render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
describe('App', () => {
  it('render', () => {
    render(
        <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});