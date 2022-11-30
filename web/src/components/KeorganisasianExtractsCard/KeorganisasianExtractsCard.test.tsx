import { render } from '@redwoodjs/testing/web'

import KeorganisasianExtractsCard from './KeorganisasianExtractsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeorganisasianExtractsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeorganisasianExtractsCard />)
    }).not.toThrow()
  })
})
