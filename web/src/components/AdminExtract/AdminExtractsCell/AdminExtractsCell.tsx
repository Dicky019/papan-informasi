import type { FindAdminExtracts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AdminExtracts from 'src/components/AdminExtract/AdminExtracts'

export const QUERY = gql`
  query FindAdminExtracts {
    adminExtracts {
      id
      name
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No adminExtracts yet. '}
      <Link
        to={routes.newAdminExtract()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ adminExtracts }: CellSuccessProps<FindAdminExtracts>) => {
  return <AdminExtracts adminExtracts={adminExtracts} />
}
