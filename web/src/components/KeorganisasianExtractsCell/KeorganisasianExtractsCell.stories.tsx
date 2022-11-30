import type { ComponentStory } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './KeorganisasianExtractsCell'
import { standard } from './KeorganisasianExtractsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty /> : <></>
}

export const failure: ComponentStory<typeof Failure> = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
}

export const success: ComponentStory<typeof Success> = (args) => {
  return Success ? <Success {...standard()} {...args} /> : <></>
}

export default { title: 'Cells/KeorganisasianExtractsCell' }
