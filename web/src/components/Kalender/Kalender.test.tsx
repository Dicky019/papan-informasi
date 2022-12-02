import { render } from '@redwoodjs/testing/web'

import Kalender from './Kalender'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Kalender', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Kalender />)
    }).not.toThrow()
  })
})
