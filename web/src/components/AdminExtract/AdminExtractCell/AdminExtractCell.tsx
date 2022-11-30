import type { FindAdminExtractById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AdminExtract from 'src/components/AdminExtract/AdminExtract'

export const QUERY = gql`
  query FindAdminExtractById($id: Int!) {
    adminExtract: adminExtract(id: $id) {
      id
      name
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AdminExtract not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ adminExtract }: CellSuccessProps<FindAdminExtractById>) => {
  return <AdminExtract adminExtract={adminExtract} />
}
