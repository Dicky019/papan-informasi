// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PemateriExtractHeader> = (args) => {
//   return <PemateriExtractHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PemateriExtractHeader from './PemateriExtractHeader'

export const generated = () => {
  return <PemateriExtractHeader />
}

export default {
  title: 'Components/PemateriExtractHeader',
  component: PemateriExtractHeader,
} as ComponentMeta<typeof PemateriExtractHeader>
