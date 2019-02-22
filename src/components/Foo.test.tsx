import React from 'react';
import { render } from 'react-testing-library';

// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>;

test('Displays the correct title', () => {
  const { getByTestId } = render(<Title />);
  // Assertion
  expect(getByTestId('hero-title')).toHaveTextContent('Gatsby is awesome!');
  // --> Test will pass
});
