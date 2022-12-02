// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof JadwalCard> = (args) => {
//   return <JadwalCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import JadwalCard from './JadwalCard'

export const generated = () => {
  return <JadwalCard />
}

export default {
  title: 'Components/JadwalCard',
  component: JadwalCard,
} as ComponentMeta<typeof JadwalCard>
