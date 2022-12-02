import { render } from '@redwoodjs/testing/web'

import JadwalNginap from './JadwalNginap'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JadwalNginap', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JadwalNginap />)
    }).not.toThrow()
  })
})
