import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Header from '../Header';
import VideoList from '../VideoList';

describe('<App />', () => {
  test('Renders <App /> component correctly', () => {
    shallow(<App />);
  });
});

test('renders Account header', () => {
  const wrapper = shallow(<Header />);
  const welcome = <h1>Vid-Tutorial Video Library</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

const videos = {
  videoTitle: 'Review: Animals',
  teacherName: 'Katy',
  tags: ['Exploring', 'Engaging', 'Energetic'],
  averageUserRating: 0.8869235664025232,
};

// enzyme mount doesn't work with React 17.0 (only 16.0) thus errors
describe('Mock for videos props', () => {
  it('accepts videos props', () => {
    const wrapper = mount(<VideoList videos={videos} />);
    expect(wrapper.props().videos).toEqual(videos);
  });
  it('contains videos teacherName', () => {
    const wrapper = mount(<VideoList videos={videos.teacherName} />);
    const value = wrapper.text();
    expect(value).toEqual('Katy');
  });
});
