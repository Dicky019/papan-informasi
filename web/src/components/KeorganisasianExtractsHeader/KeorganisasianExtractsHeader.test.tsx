import { render } from '@redwoodjs/testing/web'

import KeorganisasianExtractsHeader from './KeorganisasianExtractsHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeorganisasianExtractsHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeorganisasianExtractsHeader />)
    }).not.toThrow()
  })
})
