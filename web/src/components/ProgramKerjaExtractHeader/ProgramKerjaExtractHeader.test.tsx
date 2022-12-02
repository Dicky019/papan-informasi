import { render } from '@redwoodjs/testing/web'

import ProgramKerjaExtractHeader from './ProgramKerjaExtractHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProgramKerjaExtractHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProgramKerjaExtractHeader />)
    }).not.toThrow()
  })
})
