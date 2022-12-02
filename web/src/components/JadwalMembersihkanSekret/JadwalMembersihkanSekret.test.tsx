import { render } from '@redwoodjs/testing/web'

import JadwalMembersihkanSekret from './JadwalMembersihkanSekret'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JadwalMembersihkanSekret', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JadwalMembersihkanSekret />)
    }).not.toThrow()
  })
})
