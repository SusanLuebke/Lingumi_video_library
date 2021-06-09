import { render, screen } from '@testing-library/react';
import SearchArea from './SearchArea';
import userEvent from '@testing-library/user-event';

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

  test('Tests core components/methods', () => {
    const handleChangeMock = jest.fn();
    // workaround for a documented issue
    handleChangeMock.mockImplementation((event) => {
      event.preventDefault();
    });

    render(
      <SearchArea
        searchVideo={handleChangeMock}
        getTopRatedTutorialsForTags={handleChangeMock}
        handleSort={handleChangeMock}
      />
    );

    const searchButton = screen
      .getAllByRole('button')
      .find((button) => button.textContent === 'Search');
    // simulate that search button is clicked
    userEvent.click(searchButton);

    // expect(handleChangeMock).toHaveBeenCalledTimes(1);

    expect(
      screen
        .getAllByRole('textbox')
        .find((textbox) => textbox.id === 'topRated')
    ).toBeInTheDocument();
  });
});
