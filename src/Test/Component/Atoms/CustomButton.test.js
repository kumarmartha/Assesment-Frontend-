import { render, screen } from '@testing-library/react';
import CustomButton from '../../../Component/Atoms/CustomButton';
test('renders Custom Button component', () => {
    render(<CustomButton data-testid='test-button'/>);
    const element = screen.getAllByTestId('test-button');
    expect(element[0]).toBeInTheDocument();
  });