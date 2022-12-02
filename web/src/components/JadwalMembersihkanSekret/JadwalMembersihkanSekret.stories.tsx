// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof JadwalMembersihkanSekret> = (args) => {
//   return <JadwalMembersihkanSekret {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import JadwalMembersihkanSekret from './JadwalMembersihkanSekret'

export const generated = () => {
  return <JadwalMembersihkanSekret />
}

export default {
  title: 'Components/JadwalMembersihkanSekret',
  component: JadwalMembersihkanSekret,
} as ComponentMeta<typeof JadwalMembersihkanSekret>
