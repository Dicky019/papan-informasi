import type { Prisma, SuratMasukTools } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SuratMasukToolsCreateArgs>({
  suratMasukTools: {
    one: {
      data: {
        name: 'String',
        tanggalMasuk: 'String',
        descripsi: 'String',
        image_url: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        tanggalMasuk: 'String',
        descripsi: 'String',
        image_url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SuratMasukTools, 'suratMasukTools'>
