import { render } from '@redwoodjs/testing/web'

import JadwalAgenda from './JadwalAgenda'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JadwalAgenda', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JadwalAgenda />)
    }).not.toThrow()
  })
})
