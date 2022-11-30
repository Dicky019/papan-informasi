import type { EditAdminExtractById, UpdateAdminExtractInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdminExtractForm from 'src/components/AdminExtract/AdminExtractForm'

export const QUERY = gql`
  query EditAdminExtractById($id: Int!) {
    adminExtract: adminExtract(id: $id) {
      id
      name
      nra
      image_url
    }
  }
`
const UPDATE_ADMIN_EXTRACT_MUTATION = gql`
  mutation UpdateAdminExtractMutation($id: Int!, $input: UpdateAdminExtractInput!) {
    updateAdminExtract(id: $id, input: $input) {
      id
      name
      nra
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ adminExtract }: CellSuccessProps<EditAdminExtractById>) => {
  const [updateAdminExtract, { loading, error }] = useMutation(
    UPDATE_ADMIN_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdminExtract updated')
        navigate(routes.adminExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAdminExtractInput,
    id: EditAdminExtractById['adminExtract']['id']
  ) => {
    updateAdminExtract({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit AdminExtract {adminExtract?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AdminExtractForm adminExtract={adminExtract} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
