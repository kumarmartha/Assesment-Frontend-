import { render, screen } from '@testing-library/react';
import CustomListItem from '../../../Component/Atoms/CustomListItem';
test('renders Custom List Item data for list', () => {
    const props=[{ price: 120,
        rewards: 90,
        transactionDate: new Date(
          "Fri Jun 25 2021 20:57:39 GMT+0530 (India Standard Time)"
        )}]
    render(<CustomListItem items={props}/>);
    const element = screen.getAllByTestId('itemValue_0');
    expect(element[0]).toBeInTheDocument();
  });