import { render, screen } from '@testing-library/react';
import VideoList from './VideoList';
import { shallow } from 'enzyme';

describe('VideoList component', () => {
  afterEach(() => jest.clearAllMocks());

  test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map((x) => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
  });
});
