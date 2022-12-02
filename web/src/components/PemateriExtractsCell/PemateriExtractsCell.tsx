import { useState } from 'react'

import type { PemateriExtractsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PemateriExtractCard from '../PemateriExtractCard/PemateriExtractCard'
import PemateriExtractHeader from '../PemateriExtractHeader/PemateriExtractHeader'

export const QUERY = gql`
  query PemateriExtractsQuery {
    pemateriExtracts {
      id
      name
      nra
      image_url
      hari
      konsentrasi
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  pemateriExtracts,
}: CellSuccessProps<PemateriExtractsQuery>) => {
  const [listKonsentrasi, setListKonsentrasi] = useState<
    Array<{
      __typename?: 'PemateriExtract'
      id: number
      name: string
      nra: string
      image_url: string
      hari: string
      konsentrasi: string
    }>
  >(pemateriExtracts.filter((value) => value.konsentrasi == 'Program'))

  return (
    <>
      <section className="bg-gray-900 py-14">
        <h1 className="text-header text-white">
          Jadwal Keilmuan EXTRACT {process.env.REDWOOD_ENV_EXTRACT_KE}
        </h1>
        <div className="container mx-auto px-6 ">
          <div className="lg:-mx-12 lg:flex">
            <PemateriExtractHeader
              setListKonsentrasi={setListKonsentrasi}
              listKonsentrasi={listKonsentrasi}
              pemateriExtracts={pemateriExtracts}
            />
            <PemateriExtractCard listKonsentrasi={listKonsentrasi} />
          </div>
        </div>
      </section>
      {/* <!-- component --> */}
    </>
  )
}
