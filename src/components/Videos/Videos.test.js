import { render, screen } from '@testing-library/react';
import Videos from './Videos';

describe('searchForTutorials component', () => {
  afterEach(() => jest.clearAllMocks());

  test('Given the required events, When the component is rendered, Then the text should be present', () => {
    const requiredEvents = {
      events: true,
    };

    render(<Videos {...requiredEvents} />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('Check sorted videos text shows', () => {
    render(<Videos />);
    const input = screen.getByText('Top 20');
    expect(input).toBeInTheDocument();
  });
});
