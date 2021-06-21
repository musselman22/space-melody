import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResultsPage from '../Components/ResultsPage'
import { BrowserRouter as Router } from 'react-router-dom';


const data =
{
  response: {
    hits: [
      {
        result: {
          id: 3243053,
          api_path: "/songs/2332455",
          full_title: "Hello by Adele",
          path: "/Adele-hello-lyrics",
          song_art_image_thumbnail_url: "https://images.genius.com/56fe4a76d3a480e425824b2e18a2e983.300x300x1.jpg",
        },
        url: "https://genius.com/Adele-hello-lyrics",
      }
    ]
  }
}

const server = setupServer(
  rest.post('http://localhost:3001/', (req, res, ctx) => {
    return res(ctx.json(data))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays search results', async () => {
  render(<Router> <ResultsPage /> </Router>)

  const result = screen.getByText(/Search Results/i);
  expect(result).toBeInTheDocument();
})

test('loads and displays data from search', async () => {
  render(<Router> <ResultsPage /> </Router>)
  await waitFor(() => screen.getByText("Hello by Adele"))
  expect(screen.getByText("Hello by Adele")).toBeInTheDocument();

})


