import type { FindProgramKerjaExtractById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgramKerjaExtract from 'src/components/ProgramKerjaExtract/ProgramKerjaExtract'

export const QUERY = gql`
  query FindProgramKerjaExtractById($id: Int!) {
    programKerjaExtract: programKerjaExtract(id: $id) {
      id
      nameProker
      persenProker
      programKerja
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProgramKerjaExtract not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programKerjaExtract }: CellSuccessProps<FindProgramKerjaExtractById>) => {
  return <ProgramKerjaExtract programKerjaExtract={programKerjaExtract} />
}
