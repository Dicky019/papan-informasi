// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof KeorganisasianExtractsHeader> = (args) => {
//   return <KeorganisasianExtractsHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import KeorganisasianExtractsHeader from './KeorganisasianExtractsHeader'

export const generated = () => {
  return <KeorganisasianExtractsHeader />
}

export default {
  title: 'Components/KeorganisasianExtractsHeader',
  component: KeorganisasianExtractsHeader,
} as ComponentMeta<typeof KeorganisasianExtractsHeader>
