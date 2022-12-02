import { useState } from 'react'

import type {
  Hari,
  JenisKegiatan,
  KeorganisasianExtractsQuery,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import KeorganisasianExtractCard from '../KeorganisasianExtractsCard/KeorganisasianExtractsCard'
import KeorganisasianExtractsHeader from '../KeorganisasianExtractsHeader/KeorganisasianExtractsHeader'

export const QUERY = gql`
  query KeorganisasianExtractsQuery {
    keorganisasianExtracts {
      id
      name
      nra
      image_url
      hari
      jenisKegiatan
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  keorganisasianExtracts,
}: CellSuccessProps<KeorganisasianExtractsQuery>) => {
  const [listKeorganisasian, setListKeorganisasian] = useState<
    Array<{
      __typename?: 'KeorganisasianExtract'
      id: number
      name: string
      nra: string
      image_url: string
      hari: Hari
      jenisKegiatan: JenisKegiatan
    }>
  >(keorganisasianExtracts.filter((value) => value.jenisKegiatan == 'Nginap'))

  return (
    <section className="bg-gray-900 py-14">
      <h1 className="text-header text-white">
        Jadwal Keorganisasian EXTRACT {process.env.REDWOOD_ENV_EXTRACT_KE}
      </h1>
      <div className="container mx-auto px-6 ">
        <div className="lg:-mx-12 lg:flex">
          <KeorganisasianExtractsHeader
            setListKeorganisasian={setListKeorganisasian}
            listKeorganisasian={listKeorganisasian}
            keorganisasians={keorganisasianExtracts}
          />
          <KeorganisasianExtractCard listKeorganisasian={listKeorganisasian} />
        </div>
      </div>
    </section>
  )
}
