// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof JadwalAgenda> = (args) => {
//   return <JadwalAgenda {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import JadwalAgenda from './JadwalAgenda'

export const generated = () => {
  return <JadwalAgenda />
}

export default {
  title: 'Components/JadwalAgenda',
  component: JadwalAgenda,
} as ComponentMeta<typeof JadwalAgenda>
