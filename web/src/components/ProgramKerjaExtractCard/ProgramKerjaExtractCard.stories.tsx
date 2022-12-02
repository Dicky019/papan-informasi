// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProgramKerjaExtractCard> = (args) => {
//   return <ProgramKerjaExtractCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProgramKerjaExtractCard from './ProgramKerjaExtractCard'

export const generated = () => {
  return <ProgramKerjaExtractCard />
}

export default {
  title: 'Components/ProgramKerjaExtractCard',
  component: ProgramKerjaExtractCard,
} as ComponentMeta<typeof ProgramKerjaExtractCard>
