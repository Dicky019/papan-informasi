import type { CreateKeorganisasianExtractInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KeorganisasianExtractForm from 'src/components/KeorganisasianExtract/KeorganisasianExtractForm'

const CREATE_KEORGANISASIAN_EXTRACT_MUTATION = gql`
  mutation CreateKeorganisasianExtractMutation(
    $input: CreateKeorganisasianExtractInput!
  ) {
    createKeorganisasianExtract(input: $input) {
      id
    }
  }
`

const NewKeorganisasianExtract = () => {
  const [createKeorganisasianExtract, { loading, error }] = useMutation(
    CREATE_KEORGANISASIAN_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('KeorganisasianExtract created')
        navigate(routes.keorganisasianExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateKeorganisasianExtractInput) => {
    createKeorganisasianExtract({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New Keorganisasian Extract
        </h2>
      </header>
      <div className="rw-segment-main">
        <KeorganisasianExtractForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewKeorganisasianExtract
