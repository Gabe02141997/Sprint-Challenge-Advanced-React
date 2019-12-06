import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import DarkMode from './components/Darkmode'
import PlayerList from './components/PlayerList'
import App from './App';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Displays Womens World Cup in App', () => {
  const { getByText } = render(<App/>)
  const element = getByText(/Women's Soccer World Cup/i)
  
  expect(element.textContent).toMatch(/Women's Soccer World Cup/i) 
})

test('Displays Choose your theme text in Darkmode component', () => {
  const { getByText } = render(<DarkMode/>)
  const element = getByText(/choose your theme!!/i)


  expect(element.textContent).toMatch(/choose your theme!!/i)
})

test('Displays light mode text in Darkmode component', () => {
  const { getByText } = render(<PlayerList/>)
  const element = getByText(/list of players/i)


  expect(element.textContent).toMatch(/list of players/i)
})