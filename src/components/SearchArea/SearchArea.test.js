import { fireEvent, render, screen } from '@testing-library/react';
import SearchArea from './SearchArea';

describe('SearchArea component', () => {
  afterEach(() => jest.clearAllMocks());

  test('Given the required props, When the component is rendered, Then the text should be present', () => {
    const requiredProps = {
      text: 'Search',
      props: true,
    };

    render(<SearchArea {...requiredProps} />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('Given the required props, the button should be present', () => {
    const requiredProps = {
      text: 'Search, Refresh',
      props: true,
    };

    render(<SearchArea {...requiredProps} />);

    expect(
      screen
        .getAllByRole('button')
        .find(
          (button) =>
            button.textContent === 'Search' || button.textContent === 'Refresh'
        )
    ).toBeInTheDocument();
  });
});
