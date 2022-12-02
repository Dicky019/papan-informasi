import type { Prisma, Infentaris } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InfentarisCreateArgs>({
  infentaris: {
    one: { data: { name: 'String', image_url: 'String', value: 4027022 } },
    two: { data: { name: 'String', image_url: 'String', value: 9104911 } },
  },
})

export type StandardScenario = ScenarioData<Infentaris, 'infentaris'>
