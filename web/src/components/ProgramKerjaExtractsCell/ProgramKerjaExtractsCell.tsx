import { useState } from 'react'

import type { ProgramKerja, ProgramKerjaExtractsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgramKerjaExtractCard from '../ProgramKerjaExtractCard/ProgramKerjaExtractCard'
import ProgramKerjaExtractHeader from '../ProgramKerjaExtractHeader/ProgramKerjaExtractHeader'

export const QUERY = gql`
  query ProgramKerjaExtractsQuery {
    programKerjaExtracts {
      id
      nameProker
      persenProker
      programKerja
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  programKerjaExtracts,
}: CellSuccessProps<ProgramKerjaExtractsQuery>) => {
  const [programKerja, setProgramKerja] = useState<
    Array<{
      __typename?: 'ProgramKerjaExtract'
      id: number
      nameProker: string
      persenProker: number
      programKerja: ProgramKerja
    }>
  >(programKerjaExtracts)

  return (
    <>
      <div className="bg-white py-14">
        <h1 className="text-header text-gray-900 ">
          Program Kerja KeDai Computerworks {process.env.REDWOOD_ENV_TAHUN_KE}
        </h1>
        <div className="container mx-auto px-6 ">
          {/* Header */}
          <ProgramKerjaExtractHeader
            programKerjaExtracts={programKerjaExtracts}
            setProgramKerja={setProgramKerja}
          />
          {/* End Header */}
          {/* Card */}
          <ProgramKerjaExtractCard
            programKerjaExtracts={programKerja}
            // colors={listColors[getRandomInt(5)]}
          />
          {/* End Card */}
        </div>
      </div>
      {/* <!-- component --> */}
    </>
  )
}
