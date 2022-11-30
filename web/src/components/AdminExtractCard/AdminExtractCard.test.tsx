import { render } from '@redwoodjs/testing/web'

import AdminExtractCard from './AdminExtractCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminExtractCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminExtractCard />)
    }).not.toThrow()
  })
})
