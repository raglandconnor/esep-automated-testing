import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

// before each test, re-render Counter component
beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  // getByText finds elements by their text content
  const heading = screen.getByText('Counter');
  expect(heading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0'); // check if count is 0 on initial render
});

test('clicking + increments the count', () => {
  // find increment button by text content and count by data-testid
  const incrementButton = screen.getByText('+');
  const count = screen.getByTestId('count');

  fireEvent.click(incrementButton); // simulate click event on increment button

  expect(count).toHaveTextContent('1'); // check if count is 1 after increment
});

test('clicking - decrements the count', () => {
  // find decrement button by text content and count by data-testid
  const decrementButton = screen.getByText('-');
  const count = screen.getByTestId('count');

  fireEvent.click(decrementButton); // simulate click event on decrement button

  expect(count).toHaveTextContent('-1'); // check if count is -1 after decrement
});
