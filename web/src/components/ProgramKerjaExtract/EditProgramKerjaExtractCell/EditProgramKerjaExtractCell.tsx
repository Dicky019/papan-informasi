import type { EditProgramKerjaExtractById, UpdateProgramKerjaExtractInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProgramKerjaExtractForm from 'src/components/ProgramKerjaExtract/ProgramKerjaExtractForm'

export const QUERY = gql`
  query EditProgramKerjaExtractById($id: Int!) {
    programKerjaExtract: programKerjaExtract(id: $id) {
      id
      nameProker
      persenProker
      programKerja
    }
  }
`
const UPDATE_PROGRAM_KERJA_EXTRACT_MUTATION = gql`
  mutation UpdateProgramKerjaExtractMutation($id: Int!, $input: UpdateProgramKerjaExtractInput!) {
    updateProgramKerjaExtract(id: $id, input: $input) {
      id
      nameProker
      persenProker
      programKerja
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programKerjaExtract }: CellSuccessProps<EditProgramKerjaExtractById>) => {
  const [updateProgramKerjaExtract, { loading, error }] = useMutation(
    UPDATE_PROGRAM_KERJA_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgramKerjaExtract updated')
        navigate(routes.programKerjaExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateProgramKerjaExtractInput,
    id: EditProgramKerjaExtractById['programKerjaExtract']['id']
  ) => {
    updateProgramKerjaExtract({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit ProgramKerjaExtract {programKerjaExtract?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramKerjaExtractForm programKerjaExtract={programKerjaExtract} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
