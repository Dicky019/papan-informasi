import type { FindProgramKerjaExtracts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgramKerjaExtracts from 'src/components/ProgramKerjaExtract/ProgramKerjaExtracts'

export const QUERY = gql`
  query FindProgramKerjaExtracts {
    programKerjaExtracts {
      id
      nameProker
      persenProker
      programKerja
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No programKerjaExtracts yet. '}
      <Link
        to={routes.newProgramKerjaExtract()}
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

export const Success = ({ programKerjaExtracts }: CellSuccessProps<FindProgramKerjaExtracts>) => {
  return <ProgramKerjaExtracts programKerjaExtracts={programKerjaExtracts} />
}
