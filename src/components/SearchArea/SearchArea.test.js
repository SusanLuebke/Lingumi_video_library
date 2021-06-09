import { fireEvent, render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import userEvent from '@testing-library/user-event';
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

  // test('Given a search, When the search button is clicked, Then the search function updates onChange', () => {
  //   const mockHandleChange = jest.fn();
  //   const requiredProps = {
  //     text: 'Search',
  //     props: true,
  //     onChange: mockHandleChange

  //   };

  //   render(<SearchArea {...requiredProps} />);

  //   const searchButton = screen
  //     .getAllByRole('button')
  //     .find((button) => button.textContent === 'Search');
  //   // simulate that search button is clicked
  //   userEvent.click(searchButton);

  //   expect(mockHandleChange).toHaveBeenCalledWith();
  // });

  // test('it calls start logout on button click', () => {
  //   const mockLogout = jest.fn();
  //   const wrapper = shallow(<SearchArea startLogout={mockLogout}/>);
  //   wrapper.find('button').at(0).simulate('click');
  //   expect(mockLogout).toHaveBeenCalled();
  // });
});
