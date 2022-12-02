// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Kalender> = (args) => {
//   return <Kalender {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Kalender from './Kalender'

export const generated = () => {
  return <Kalender />
}

export default {
  title: 'Components/Kalender',
  component: Kalender,
} as ComponentMeta<typeof Kalender>
