import type { Prisma, AdminExtract } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AdminExtractCreateArgs>({
  adminExtract: {
    one: { data: { name: 'String', image_url: 'String2296018' } },
    two: { data: { name: 'String', image_url: 'String258407' } },
  },
})

export type StandardScenario = ScenarioData<AdminExtract, 'adminExtract'>
