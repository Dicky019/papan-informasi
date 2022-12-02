import type { FindInfentarises } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Infentarises from 'src/components/Infentaris/Infentarises'

export const QUERY = gql`
  query FindInfentarises {
    infentarises {
      id
      name
      image_url
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No infentarises yet. '}
      <Link to={routes.newInfentaris()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  infentarises,
}: CellSuccessProps<FindInfentarises>) => {
  return <Infentarises infentarises={infentarises} />
}
