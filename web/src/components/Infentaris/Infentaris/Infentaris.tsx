import type {
  DeleteInfentarisMutationVariables,
  FindInfentarisById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_INFENTARIS_MUTATION = gql`
  mutation DeleteInfentarisMutation($id: Int!) {
    deleteInfentaris(id: $id) {
      id
    }
  }
`

interface Props {
  infentaris: NonNullable<FindInfentarisById['infentaris']>
}

const Infentaris = ({ infentaris }: Props) => {
  const [deleteInfentaris] = useMutation(DELETE_INFENTARIS_MUTATION, {
    onCompleted: () => {
      toast.success('Infentaris deleted')
      navigate(routes.infentarises())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInfentarisMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete infentaris ' + id + '?')) {
      deleteInfentaris({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Infentaris {infentaris.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{infentaris.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{infentaris.name}</td>
            </tr>
            <tr>
              {/* <th>Image url</th>
              <td>{infentaris.image_url}</td> */}
              <th>Image url</th>
              <td>
                <a href={infentaris.image_url} target="_blank" rel="noreferrer">
                  <img
                    className="w-96 rounded-md object-cover"
                    src={infentaris.image_url}
                    alt="avatar"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{infentaris.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInfentaris({ id: infentaris.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(infentaris.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Infentaris
