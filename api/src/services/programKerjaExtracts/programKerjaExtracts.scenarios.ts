import type { Prisma, ProgramKerjaExtract } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProgramKerjaExtractCreateArgs>({
  programKerjaExtract: {
    one: {
      data: {
        nameProker: 'String',
        persenProker: 7248363.853722027,
        programKerja: 'Keorganisasian',
      },
    },
    two: {
      data: {
        nameProker: 'String',
        persenProker: 5292382.986303958,
        programKerja: 'Keorganisasian',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  ProgramKerjaExtract,
  'programKerjaExtract'
>
