import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App show the Vite + React + TS', () => {
  render(<App />)

  const heading = screen.getByRole('heading', {
    level: 1,
    name: 'Vite + React + TS',
  })

  expect(heading).toBeInTheDocument()
})
