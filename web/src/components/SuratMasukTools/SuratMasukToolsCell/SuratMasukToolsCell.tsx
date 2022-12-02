import type { FindSuratMasukToolsById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SuratMasukTools from 'src/components/SuratMasukTools/SuratMasukTools'

export const QUERY = gql`
  query FindSuratMasukToolsById($id: Int!) {
    suratMasukTools: suratMasukTools(id: $id) {
      id
      name
      tanggalMasuk
      descripsi
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SuratMasukTools not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ suratMasukTools }: CellSuccessProps<FindSuratMasukToolsById>) => {
  return <SuratMasukTools suratMasukTools={suratMasukTools} />
}
