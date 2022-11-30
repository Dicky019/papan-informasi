import type { ProgramKerjaExtract } from '@prisma/client'

import {
  programKerjaExtracts,
  programKerjaExtract,
  createProgramKerjaExtract,
  updateProgramKerjaExtract,
  deleteProgramKerjaExtract,
} from './programKerjaExtracts'
import type { StandardScenario } from './programKerjaExtracts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('programKerjaExtracts', () => {
  scenario(
    'returns all programKerjaExtracts',
    async (scenario: StandardScenario) => {
      const result = await programKerjaExtracts()

      expect(result.length).toEqual(
        Object.keys(scenario.programKerjaExtract).length
      )
    }
  )

  scenario(
    'returns a single programKerjaExtract',
    async (scenario: StandardScenario) => {
      const result = await programKerjaExtract({
        id: scenario.programKerjaExtract.one.id,
      })

      expect(result).toEqual(scenario.programKerjaExtract.one)
    }
  )

  scenario('creates a programKerjaExtract', async () => {
    const result = await createProgramKerjaExtract({
      input: {
        nameProker: 'String',
        persenProker: 1410128.5369664885,
        programKerja: 'Keorganisasian',
      },
    })

    expect(result.nameProker).toEqual('String')
    expect(result.persenProker).toEqual(1410128.5369664885)
    expect(result.programKerja).toEqual('Keorganisasian')
  })

  scenario(
    'updates a programKerjaExtract',
    async (scenario: StandardScenario) => {
      const original = (await programKerjaExtract({
        id: scenario.programKerjaExtract.one.id,
      })) as ProgramKerjaExtract
      const result = await updateProgramKerjaExtract({
        id: original.id,
        input: { nameProker: 'String2' },
      })

      expect(result.nameProker).toEqual('String2')
    }
  )

  scenario(
    'deletes a programKerjaExtract',
    async (scenario: StandardScenario) => {
      const original = (await deleteProgramKerjaExtract({
        id: scenario.programKerjaExtract.one.id,
      })) as ProgramKerjaExtract
      const result = await programKerjaExtract({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
