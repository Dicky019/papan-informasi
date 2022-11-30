import type { PemateriExtract } from '@prisma/client'

import {
  pemateriExtracts,
  pemateriExtract,
  createPemateriExtract,
  updatePemateriExtract,
  deletePemateriExtract,
} from './pemateriExtracts'
import type { StandardScenario } from './pemateriExtracts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pemateriExtracts', () => {
  scenario(
    'returns all pemateriExtracts',
    async (scenario: StandardScenario) => {
      const result = await pemateriExtracts()

      expect(result.length).toEqual(
        Object.keys(scenario.pemateriExtract).length
      )
    }
  )

  scenario(
    'returns a single pemateriExtract',
    async (scenario: StandardScenario) => {
      const result = await pemateriExtract({
        id: scenario.pemateriExtract.one.id,
      })

      expect(result).toEqual(scenario.pemateriExtract.one)
    }
  )

  scenario('creates a pemateriExtract', async () => {
    const result = await createPemateriExtract({
      input: {
        name: 'String',
        nra: 'String3237499',
        image_url: 'String8562551',
        hari: 'Senin',
        konsentrasi: 'Program',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.nra).toEqual('String3237499')
    expect(result.image_url).toEqual('String8562551')
    expect(result.hari).toEqual('Senin')
    expect(result.konsentrasi).toEqual('Program')
  })

  scenario('updates a pemateriExtract', async (scenario: StandardScenario) => {
    const original = (await pemateriExtract({
      id: scenario.pemateriExtract.one.id,
    })) as PemateriExtract
    const result = await updatePemateriExtract({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a pemateriExtract', async (scenario: StandardScenario) => {
    const original = (await deletePemateriExtract({
      id: scenario.pemateriExtract.one.id,
    })) as PemateriExtract
    const result = await pemateriExtract({ id: original.id })

    expect(result).toEqual(null)
  })
})
