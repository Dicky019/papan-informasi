import type { FindKeorganisasianExtractById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import KeorganisasianExtract from 'src/components/KeorganisasianExtract/KeorganisasianExtract'

export const QUERY = gql`
  query FindKeorganisasianExtractById($id: Int!) {
    keorganisasianExtract: keorganisasianExtract(id: $id) {
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

export const Empty = () => <div>KeorganisasianExtract not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  keorganisasianExtract,
}: CellSuccessProps<FindKeorganisasianExtractById>) => {
  return <KeorganisasianExtract keorganisasianExtract={keorganisasianExtract} />
}
