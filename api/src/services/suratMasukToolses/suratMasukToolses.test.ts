import type { SuratMasukTools } from '@prisma/client'

import {
  suratMasukToolses,
  suratMasukTools,
  createSuratMasukTools,
  updateSuratMasukTools,
  deleteSuratMasukTools,
} from './suratMasukToolses'
import type { StandardScenario } from './suratMasukToolses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('suratMasukToolses', () => {
  scenario(
    'returns all suratMasukToolses',
    async (scenario: StandardScenario) => {
      const result = await suratMasukToolses()

      expect(result.length).toEqual(
        Object.keys(scenario.suratMasukTools).length
      )
    }
  )

  scenario(
    'returns a single suratMasukTools',
    async (scenario: StandardScenario) => {
      const result = await suratMasukTools({
        id: scenario.suratMasukTools.one.id,
      })

      expect(result).toEqual(scenario.suratMasukTools.one)
    }
  )

  scenario('creates a suratMasukTools', async () => {
    const result = await createSuratMasukTools({
      input: {
        name: 'String',
        tanggalMasuk: 'String',
        descripsi: 'String',
        image_url: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.tanggalMasuk).toEqual('String')
    expect(result.descripsi).toEqual('String')
    expect(result.image_url).toEqual('String')
  })

  scenario('updates a suratMasukTools', async (scenario: StandardScenario) => {
    const original = (await suratMasukTools({
      id: scenario.suratMasukTools.one.id,
    })) as SuratMasukTools
    const result = await updateSuratMasukTools({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a suratMasukTools', async (scenario: StandardScenario) => {
    const original = (await deleteSuratMasukTools({
      id: scenario.suratMasukTools.one.id,
    })) as SuratMasukTools
    const result = await suratMasukTools({ id: original.id })

    expect(result).toEqual(null)
  })
})
