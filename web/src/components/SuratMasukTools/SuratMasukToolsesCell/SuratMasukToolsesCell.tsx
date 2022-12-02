import type { FindSuratMasukToolses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SuratMasukToolses from 'src/components/SuratMasukTools/SuratMasukToolses'

export const QUERY = gql`
  query FindSuratMasukToolses {
    suratMasukToolses {
      id
      name
      tanggalMasuk
      descripsi
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No suratMasukToolses yet. '}
      <Link to={routes.newSuratMasukTools()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  suratMasukToolses,
}: CellSuccessProps<FindSuratMasukToolses>) => {
  return <SuratMasukToolses suratMasukToolses={suratMasukToolses} />
}
