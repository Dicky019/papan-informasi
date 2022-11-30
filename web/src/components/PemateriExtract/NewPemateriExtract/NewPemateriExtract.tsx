import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PemateriExtractForm from 'src/components/PemateriExtract/PemateriExtractForm'

import type { CreatePemateriExtractInput } from 'types/graphql'

const CREATE_PEMATERI_EXTRACT_MUTATION = gql`
  mutation CreatePemateriExtractMutation($input: CreatePemateriExtractInput!) {
    createPemateriExtract(input: $input) {
      id
    }
  }
`

const NewPemateriExtract = () => {
  const [createPemateriExtract, { loading, error }] = useMutation(
    CREATE_PEMATERI_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PemateriExtract created')
        navigate(routes.pemateriExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePemateriExtractInput) => {
    createPemateriExtract({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PemateriExtract</h2>
      </header>
      <div className="rw-segment-main">
        <PemateriExtractForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPemateriExtract
