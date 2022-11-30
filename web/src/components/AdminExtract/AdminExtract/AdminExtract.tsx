import type {
  DeleteAdminExtractMutationVariables,
  FindAdminExtractById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_ADMIN_EXTRACT_MUTATION = gql`
  mutation DeleteAdminExtractMutation($id: Int!) {
    deleteAdminExtract(id: $id) {
      id
    }
  }
`

interface Props {
  adminExtract: NonNullable<FindAdminExtractById['adminExtract']>
}

const AdminExtract = ({ adminExtract }: Props) => {
  const [deleteAdminExtract] = useMutation(DELETE_ADMIN_EXTRACT_MUTATION, {
    onCompleted: () => {
      toast.success('AdminExtract deleted')
      navigate(routes.adminExtracts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAdminExtractMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete adminExtract ' + id + '?')) {
      deleteAdminExtract({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AdminExtract {adminExtract.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{adminExtract.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{adminExtract.name}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{adminExtract.image_url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAdminExtract({ id: adminExtract.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(adminExtract.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default AdminExtract
