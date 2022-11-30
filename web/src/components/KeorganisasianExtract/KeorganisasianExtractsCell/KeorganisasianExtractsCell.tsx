import type { FindKeorganisasianExtracts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import KeorganisasianExtracts from 'src/components/KeorganisasianExtract/KeorganisasianExtracts'

export const QUERY = gql`
  query FindKeorganisasianExtracts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No keorganisasian Extracts yet. '}
      <Link to={routes.newKeorganisasianExtract()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  keorganisasianExtracts,
}: CellSuccessProps<FindKeorganisasianExtracts>) => {
  return (
    <KeorganisasianExtracts keorganisasianExtracts={keorganisasianExtracts} />
  )
}
