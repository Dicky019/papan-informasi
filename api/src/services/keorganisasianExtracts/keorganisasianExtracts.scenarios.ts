import type { Prisma, KeorganisasianExtract } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.KeorganisasianExtractCreateArgs>({
  keorganisasianExtract: {
    one: {
      data: {
        name: 'String',
        nra: 'String5562596',
        image_url: 'String5857982',
        hari: 'Senin',
        jenisKegiatan: 'Pembelajaran',
      },
    },
    two: {
      data: {
        name: 'String',
        nra: 'String4166254',
        image_url: 'String1112504',
        hari: 'Senin',
        jenisKegiatan: 'Pembelajaran',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  KeorganisasianExtract,
  'keorganisasianExtract'
>
