import type { KeorganisasianExtract } from '@prisma/client'

import {
  keorganisasianExtracts,
  keorganisasianExtract,
  createKeorganisasianExtract,
  updateKeorganisasianExtract,
  deleteKeorganisasianExtract,
} from './keorganisasianExtracts'
import type { StandardScenario } from './keorganisasianExtracts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('keorganisasianExtracts', () => {
  scenario(
    'returns all keorganisasianExtracts',
    async (scenario: StandardScenario) => {
      const result = await keorganisasianExtracts()

      expect(result.length).toEqual(
        Object.keys(scenario.keorganisasianExtract).length
      )
    }
  )

  scenario(
    'returns a single keorganisasianExtract',
    async (scenario: StandardScenario) => {
      const result = await keorganisasianExtract({
        id: scenario.keorganisasianExtract.one.id,
      })

      expect(result).toEqual(scenario.keorganisasianExtract.one)
    }
  )

  scenario('creates a keorganisasianExtract', async () => {
    const result = await createKeorganisasianExtract({
      input: {
        name: 'String',
        nra: 'String4786522',
        image_url: 'String3861339',
        hari: 'Senin',
        jenisKegiatan: 'Pembelajaran',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.nra).toEqual('String4786522')
    expect(result.image_url).toEqual('String3861339')
    expect(result.hari).toEqual('Senin')
    expect(result.jenisKegiatan).toEqual('Pembelajaran')
  })

  scenario(
    'updates a keorganisasianExtract',
    async (scenario: StandardScenario) => {
      const original = (await keorganisasianExtract({
        id: scenario.keorganisasianExtract.one.id,
      })) as KeorganisasianExtract
      const result = await updateKeorganisasianExtract({
        id: original.id,
        input: { name: 'String2' },
      })

      expect(result.name).toEqual('String2')
    }
  )

  scenario(
    'deletes a keorganisasianExtract',
    async (scenario: StandardScenario) => {
      const original = (await deleteKeorganisasianExtract({
        id: scenario.keorganisasianExtract.one.id,
      })) as KeorganisasianExtract
      const result = await keorganisasianExtract({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
