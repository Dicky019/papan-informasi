import type { EditPemateriExtractById, UpdatePemateriExtractInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PemateriExtractForm from 'src/components/PemateriExtract/PemateriExtractForm'

export const QUERY = gql`
  query EditPemateriExtractById($id: Int!) {
    pemateriExtract: pemateriExtract(id: $id) {
      id
      name
      nra
      image_url
      hari
      konsentrasi
    }
  }
`
const UPDATE_PEMATERI_EXTRACT_MUTATION = gql`
  mutation UpdatePemateriExtractMutation($id: Int!, $input: UpdatePemateriExtractInput!) {
    updatePemateriExtract(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pemateriExtract }: CellSuccessProps<EditPemateriExtractById>) => {
  const [updatePemateriExtract, { loading, error }] = useMutation(
    UPDATE_PEMATERI_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PemateriExtract updated')
        navigate(routes.pemateriExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePemateriExtractInput,
    id: EditPemateriExtractById['pemateriExtract']['id']
  ) => {
    updatePemateriExtract({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit PemateriExtract {pemateriExtract?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PemateriExtractForm pemateriExtract={pemateriExtract} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
