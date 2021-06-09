import { render, screen } from '@testing-library/react';
import App from './App';


describe('<App />', () => {
  test('Renders <App /> component correctly', () => {
    render(<App />);

    screen.debug();
  });
});



