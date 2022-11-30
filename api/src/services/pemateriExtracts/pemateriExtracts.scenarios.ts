import type { Prisma, PemateriExtract } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PemateriExtractCreateArgs>({
  pemateriExtract: {
    one: {
      data: {
        name: 'String',
        nra: 'String1196984',
        image_url: 'String1605662',
        hari: 'Senin',
        konsentrasi: 'Program',
      },
    },
    two: {
      data: {
        name: 'String',
        nra: 'String5240298',
        image_url: 'String9779818',
        hari: 'Senin',
        konsentrasi: 'Program',
      },
    },
  },
})

export type StandardScenario = ScenarioData<PemateriExtract, 'pemateriExtract'>
