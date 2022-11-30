import { render } from '@redwoodjs/testing/web'

import PemateriExtractHeader from './PemateriExtractHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PemateriExtractHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PemateriExtractHeader />)
    }).not.toThrow()
  })
})
