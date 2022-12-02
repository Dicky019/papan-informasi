import type { Infentaris } from '@prisma/client'

import {
  infentarises,
  infentaris,
  createInfentaris,
  updateInfentaris,
  deleteInfentaris,
} from './infentarises'
import type { StandardScenario } from './infentarises.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('infentarises', () => {
  scenario('returns all infentarises', async (scenario: StandardScenario) => {
    const result = await infentarises()

    expect(result.length).toEqual(Object.keys(scenario.infentaris).length)
  })

  scenario(
    'returns a single infentaris',
    async (scenario: StandardScenario) => {
      const result = await infentaris({ id: scenario.infentaris.one.id })

      expect(result).toEqual(scenario.infentaris.one)
    }
  )

  scenario('creates a infentaris', async () => {
    const result = await createInfentaris({
      input: { name: 'String', image_url: 'String', value: 8943978 },
    })

    expect(result.name).toEqual('String')
    expect(result.image_url).toEqual('String')
    expect(result.value).toEqual(8943978)
  })

  scenario('updates a infentaris', async (scenario: StandardScenario) => {
    const original = (await infentaris({
      id: scenario.infentaris.one.id,
    })) as Infentaris
    const result = await updateInfentaris({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a infentaris', async (scenario: StandardScenario) => {
    const original = (await deleteInfentaris({
      id: scenario.infentaris.one.id,
    })) as Infentaris
    const result = await infentaris({ id: original.id })

    expect(result).toEqual(null)
  })
})
