import type { FindPemateriExtractById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PemateriExtract from 'src/components/PemateriExtract/PemateriExtract'

export const QUERY = gql`
  query FindPemateriExtractById($id: Int!) {
    pemateriExtract: pemateriExtract(id: $id) {
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

export const Empty = () => <div>PemateriExtract not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pemateriExtract }: CellSuccessProps<FindPemateriExtractById>) => {
  return <PemateriExtract pemateriExtract={pemateriExtract} />
}
