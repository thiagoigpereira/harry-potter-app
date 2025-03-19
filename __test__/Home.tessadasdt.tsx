import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';


it('should render the Home page', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to the Harry Potter App')).toBeInTheDocument();
});