import { render, screen } from '@testing-library/react';
import Heading from '../../../Component/Atoms/Heading';

test('renders heading component with title', () => {
  render(<Heading title={'test'}/>);
  const headingElement = screen.getByText(/Reward Point/i);
  expect(headingElement).toBeInTheDocument();
});
