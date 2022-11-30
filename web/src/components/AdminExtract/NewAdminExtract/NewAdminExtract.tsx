import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AdminExtractForm from 'src/components/AdminExtract/AdminExtractForm'

import type { CreateAdminExtractInput } from 'types/graphql'

const CREATE_ADMIN_EXTRACT_MUTATION = gql`
  mutation CreateAdminExtractMutation($input: CreateAdminExtractInput!) {
    createAdminExtract(input: $input) {
      id
    }
  }
`

const NewAdminExtract = () => {
  const [createAdminExtract, { loading, error }] = useMutation(
    CREATE_ADMIN_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('AdminExtract created')
        navigate(routes.adminExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAdminExtractInput) => {
    createAdminExtract({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AdminExtract</h2>
      </header>
      <div className="rw-segment-main">
        <AdminExtractForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAdminExtract
