import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountriesApp from '../CountriesApp';

test('App should render LandingPage component', () => {
  render(<CountriesApp />);
  const titleElement = screen.getByText(/Go/);
  expect(titleElement).toBeInTheDocument();
});
