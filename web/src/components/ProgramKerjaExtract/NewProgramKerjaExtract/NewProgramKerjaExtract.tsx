import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProgramKerjaExtractForm from 'src/components/ProgramKerjaExtract/ProgramKerjaExtractForm'

import type { CreateProgramKerjaExtractInput } from 'types/graphql'

const CREATE_PROGRAM_KERJA_EXTRACT_MUTATION = gql`
  mutation CreateProgramKerjaExtractMutation($input: CreateProgramKerjaExtractInput!) {
    createProgramKerjaExtract(input: $input) {
      id
    }
  }
`

const NewProgramKerjaExtract = () => {
  const [createProgramKerjaExtract, { loading, error }] = useMutation(
    CREATE_PROGRAM_KERJA_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgramKerjaExtract created')
        navigate(routes.programKerjaExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateProgramKerjaExtractInput) => {
    createProgramKerjaExtract({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProgramKerjaExtract</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramKerjaExtractForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProgramKerjaExtract
