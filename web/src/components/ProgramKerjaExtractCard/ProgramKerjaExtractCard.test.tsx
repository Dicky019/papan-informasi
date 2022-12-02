import { render } from '@redwoodjs/testing/web'

import ProgramKerjaExtractCard from './ProgramKerjaExtractCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProgramKerjaExtractCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProgramKerjaExtractCard />)
    }).not.toThrow()
  })
})
