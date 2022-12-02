// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProgramKerjaExtractHeader> = (args) => {
//   return <ProgramKerjaExtractHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProgramKerjaExtractHeader from './ProgramKerjaExtractHeader'

export const generated = () => {
  return <ProgramKerjaExtractHeader />
}

export default {
  title: 'Components/ProgramKerjaExtractHeader',
  component: ProgramKerjaExtractHeader,
} as ComponentMeta<typeof ProgramKerjaExtractHeader>
