import type { FindPemateriExtracts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PemateriExtracts from 'src/components/PemateriExtract/PemateriExtracts'

export const QUERY = gql`
  query FindPemateriExtracts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No pemateriExtracts yet. '}
      <Link
        to={routes.newPemateriExtract()}
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

export const Success = ({ pemateriExtracts }: CellSuccessProps<FindPemateriExtracts>) => {
  return <PemateriExtracts pemateriExtracts={pemateriExtracts} />
}
