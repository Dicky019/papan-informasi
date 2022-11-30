import type {
  DeleteAdminExtractMutationVariables,
  FindAdminExtracts,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AdminExtract/AdminExtractsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_ADMIN_EXTRACT_MUTATION = gql`
  mutation DeleteAdminExtractMutation($id: Int!) {
    deleteAdminExtract(id: $id) {
      id
    }
  }
`

const AdminExtractsList = ({ adminExtracts }: FindAdminExtracts) => {
  const [deleteAdminExtract] = useMutation(DELETE_ADMIN_EXTRACT_MUTATION, {
    onCompleted: () => {
      toast.success('AdminExtract deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAdminExtractMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete adminExtract ' + id + '?')) {
      deleteAdminExtract({ variables: { id } })
    }
  }

  const thumbnail = (url) => {
    const parts = url.split('/')
    parts.splice(3, 0, 'resize=width:100')
    return parts.join('/')
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {adminExtracts.map((adminExtract) => (
            <tr key={adminExtract.id}>
              <td>{truncate(adminExtract.id)}</td>
              <td>{truncate(adminExtract.name)}</td>
              <td>
                {/* {truncate(adminExtract.image_url)} */}
                <a
                  href={adminExtract.image_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={thumbnail(adminExtract.image_url)}
                    alt="avatar"
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminExtract({ id: adminExtract.id })}
                    title={'Show adminExtract ' + adminExtract.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAdminExtract({ id: adminExtract.id })}
                    title={'Edit adminExtract ' + adminExtract.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete adminExtract ' + adminExtract.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(adminExtract.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminExtractsList
