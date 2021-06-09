import { fireEvent, render, screen } from '@testing-library/react';
import Videos from './Videos';

describe('SearchArea component', () => {
    afterEach(() => jest.clearAllMocks());
  
    test('Given the required events, When the component is rendered, Then the text should be present', () => {
      const requiredEvents = {
        events: true,
      };
  
      render(<Videos {...requiredEvents} />);
  
      expect(screen.getByText('Search')).toBeInTheDocument();
    });
});