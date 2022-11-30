import type { AdminExtract } from '@prisma/client'

import {
  adminExtracts,
  adminExtract,
  createAdminExtract,
  updateAdminExtract,
  deleteAdminExtract,
} from './adminExtracts'
import type { StandardScenario } from './adminExtracts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('adminExtracts', () => {
  scenario('returns all adminExtracts', async (scenario: StandardScenario) => {
    const result = await adminExtracts()

    expect(result.length).toEqual(Object.keys(scenario.adminExtract).length)
  })

  scenario(
    'returns a single adminExtract',
    async (scenario: StandardScenario) => {
      const result = await adminExtract({ id: scenario.adminExtract.one.id })

      expect(result).toEqual(scenario.adminExtract.one)
    }
  )

  scenario('creates a adminExtract', async () => {
    const result = await createAdminExtract({
      input: {
        name: 'String',
        nra: 'String8304667',
        image_url: 'String3748269',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.nra).toEqual('String8304667')
    expect(result.image_url).toEqual('String3748269')
  })

  scenario('updates a adminExtract', async (scenario: StandardScenario) => {
    const original = (await adminExtract({
      id: scenario.adminExtract.one.id,
    })) as AdminExtract
    const result = await updateAdminExtract({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a adminExtract', async (scenario: StandardScenario) => {
    const original = (await deleteAdminExtract({
      id: scenario.adminExtract.one.id,
    })) as AdminExtract
    const result = await adminExtract({ id: original.id })

    expect(result).toEqual(null)
  })
})
