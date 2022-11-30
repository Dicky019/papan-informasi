import type { EditKeorganisasianExtractById, UpdateKeorganisasianExtractInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import KeorganisasianExtractForm from 'src/components/KeorganisasianExtract/KeorganisasianExtractForm'

export const QUERY = gql`
  query EditKeorganisasianExtractById($id: Int!) {
    keorganisasianExtract: keorganisasianExtract(id: $id) {
      id
      name
      nra
      image_url
      hari
      jenisKegiatan
    }
  }
`
const UPDATE_KEORGANISASIAN_EXTRACT_MUTATION = gql`
  mutation UpdateKeorganisasianExtractMutation($id: Int!, $input: UpdateKeorganisasianExtractInput!) {
    updateKeorganisasianExtract(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ keorganisasianExtract }: CellSuccessProps<EditKeorganisasianExtractById>) => {
  const [updateKeorganisasianExtract, { loading, error }] = useMutation(
    UPDATE_KEORGANISASIAN_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('KeorganisasianExtract updated')
        navigate(routes.keorganisasianExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateKeorganisasianExtractInput,
    id: EditKeorganisasianExtractById['keorganisasianExtract']['id']
  ) => {
    updateKeorganisasianExtract({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit KeorganisasianExtract {keorganisasianExtract?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <KeorganisasianExtractForm keorganisasianExtract={keorganisasianExtract} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
