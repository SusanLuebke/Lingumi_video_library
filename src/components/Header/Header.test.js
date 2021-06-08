import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('<App />', () => {
  test('renders header', () => {
    const wrapper = shallow(<Header />);
    const welcome = <h1>Vid-Tutorial Video Library</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});