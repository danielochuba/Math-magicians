import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import Quotes from './quotes';
import { CalculatorLogic } from './Calculator';
import App from '../App';

describe('Components renders correctly', () => {
  test('Home Component renders correctly', () => {
    const container = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test('Quotes Component renders correctly', () => {
    const container = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });

  test('Calculator Component renders correctly', () => {
    const container = render(<CalculatorLogic />);
    expect(container).toMatchSnapshot();
  });
});

test('renders HomePage component on root path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );
});

test('renders Calculator component on Calculator path', () => {
  render(
    <MemoryRouter initialEntries={['/calculator']}>
      <App />
    </MemoryRouter>,
  );
});

test('renders QuoteComponent on Quote path', () => {
  render(
    <MemoryRouter initialEntries={['/quote']}>
      <App />
    </MemoryRouter>,
  );
});
