import type {
  DeleteInfentarisMutationVariables,
  FindInfentarises,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Infentaris/InfentarisesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_INFENTARIS_MUTATION = gql`
  mutation DeleteInfentarisMutation($id: Int!) {
    deleteInfentaris(id: $id) {
      id
    }
  }
`

const InfentarisesList = ({ infentarises }: FindInfentarises) => {
  const [deleteInfentaris] = useMutation(DELETE_INFENTARIS_MUTATION, {
    onCompleted: () => {
      toast.success('Infentaris deleted')
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

  const onDeleteClick = (id: DeleteInfentarisMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete infentaris ' + id + '?')) {
      deleteInfentaris({ variables: { id } })
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
            <th>Value</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {infentarises.map((infentaris) => (
            <tr key={infentaris.id}>
              <td>{truncate(infentaris.id)}</td>
              <td>{truncate(infentaris.name)}</td>
              {/* <td>{truncate(infentaris.image_url)}</td> */}
              <td>
                <a href={infentaris.image_url} target="_blank" rel="noreferrer">
                  <img
                    src={thumbnail(infentaris.image_url)}
                    alt="avatar"
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
              <td>{truncate(infentaris.value)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.infentaris({ id: infentaris.id })}
                    title={'Show infentaris ' + infentaris.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInfentaris({ id: infentaris.id })}
                    title={'Edit infentaris ' + infentaris.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete infentaris ' + infentaris.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(infentaris.id)}
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

export default InfentarisesList
