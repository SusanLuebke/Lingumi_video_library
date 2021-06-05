import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header'

describe('<App />', () => {
  test('Renders <App /> component correctly', () => {
    shallow(<App />);
  });
});
    
    test("renders Account header", () => {
        const wrapper = shallow(<Header />);
        const welcome = <h1>Vid-Tutorial Video Library</h1>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
