import type { Prisma, AdminExtract } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminExtractCreateArgs>({
  adminExtract: {
    one: {
      data: {
        name: 'String',
        nra: 'String3056757',
        image_url: 'String1427100',
      },
    },
    two: {
      data: {
        name: 'String',
        nra: 'String5012364',
        image_url: 'String1849880',
      },
    },
  },
})

export type StandardScenario = ScenarioData<AdminExtract, 'adminExtract'>
