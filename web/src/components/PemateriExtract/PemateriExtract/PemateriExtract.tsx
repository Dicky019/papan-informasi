
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum,  } from 'src/lib/formatters'

import type { DeletePemateriExtractMutationVariables, FindPemateriExtractById } from 'types/graphql'

const DELETE_PEMATERI_EXTRACT_MUTATION = gql`
  mutation DeletePemateriExtractMutation($id: Int!) {
    deletePemateriExtract(id: $id) {
      id
    }
  }
`

interface Props {
  pemateriExtract: NonNullable<FindPemateriExtractById['pemateriExtract']>
}

const PemateriExtract = ({ pemateriExtract }: Props) => {
  const [deletePemateriExtract] = useMutation(DELETE_PEMATERI_EXTRACT_MUTATION, {
    onCompleted: () => {
      toast.success('PemateriExtract deleted')
      navigate(routes.pemateriExtracts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePemateriExtractMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pemateriExtract ' + id + '?')) {
      deletePemateriExtract({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PemateriExtract {pemateriExtract.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pemateriExtract.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{pemateriExtract.name}</td>
            </tr><tr>
              <th>Nra</th>
              <td>{pemateriExtract.nra}</td>
            </tr><tr>
              <th>Image url</th>
              <td>{pemateriExtract.image_url}</td>
            </tr><tr>
              <th>Hari</th>
              <td>{formatEnum(pemateriExtract.hari)}</td>
            </tr><tr>
              <th>Konsentrasi</th>
              <td>{formatEnum(pemateriExtract.konsentrasi)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPemateriExtract({ id: pemateriExtract.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pemateriExtract.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PemateriExtract
