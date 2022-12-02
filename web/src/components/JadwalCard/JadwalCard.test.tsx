import { render } from '@redwoodjs/testing/web'

import JadwalCard from './JadwalCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JadwalCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JadwalCard />)
    }).not.toThrow()
  })
})
