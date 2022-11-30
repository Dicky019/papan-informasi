import { render } from '@redwoodjs/testing/web'

import PemateriExtractCard from './PemateriExtractCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PemateriExtractCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PemateriExtractCard />)
    }).not.toThrow()
  })
})
