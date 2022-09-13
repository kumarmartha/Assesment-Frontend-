import { render, screen } from '@testing-library/react';
import TextInput from '../../../Component/Atoms/TextInput';
test('renders Custom Input component', () => {
    render(<TextInput data-testid='test'/>);
    const element = screen.getAllByTestId('test');
    expect(element[0]).toBeInTheDocument();
  });