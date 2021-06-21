import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchPage from '../Components/SearchPage';
import NoResults from '../Components/NoResults';
import ResultsPage from '../Components/ResultsPage';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Space Melody header', () => {
  render(<Router>
    <SearchPage />
  </Router>);
  const header = screen.getByText(/space melody/i);
  expect(header).toBeInTheDocument();
});

test('search button appears on page', () => {
  render(<Router> <SearchPage />
  </Router>);
  const searchButton = screen.getByRole('button');
  expect(searchButton).toBeInTheDocument();
});

test('search textfield appears on page', () => {
  render(<Router> <SearchPage />
  </Router>);
  const searchButton = screen.getByRole('textbox');
  expect(searchButton).toBeInTheDocument();
});

test('moon page appears if there is no input', async () => {
  render(<Router> <SearchPage /> <NoResults />
  </Router>);
  const searchButton = screen.getByRole('button');
  fireEvent.click(searchButton)

  await waitFor(() =>
    screen.getByText('No water has been found on the moon, try again!')
  )
});

test('renders search results page', async () => {
  render(<Router> <SearchPage /> <ResultsPage />
  </Router>);
  const textBox = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button');
  fireEvent.change(textBox, 'hello')
  fireEvent.click(searchButton)

  await waitFor(() =>
    screen.getByText(/Search Results/i)
  )
});


