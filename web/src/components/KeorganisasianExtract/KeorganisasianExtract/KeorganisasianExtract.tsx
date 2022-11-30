import type {
  DeleteKeorganisasianExtractMutationVariables,
  FindKeorganisasianExtractById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum } from 'src/lib/formatters'

const DELETE_KEORGANISASIAN_EXTRACT_MUTATION = gql`
  mutation DeleteKeorganisasianExtractMutation($id: Int!) {
    deleteKeorganisasianExtract(id: $id) {
      id
    }
  }
`

interface Props {
  keorganisasianExtract: NonNullable<
    FindKeorganisasianExtractById['keorganisasianExtract']
  >
}

const KeorganisasianExtract = ({ keorganisasianExtract }: Props) => {
  const [deleteKeorganisasianExtract] = useMutation(
    DELETE_KEORGANISASIAN_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('KeorganisasianExtract deleted')
        navigate(routes.keorganisasianExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteKeorganisasianExtractMutationVariables['id']
  ) => {
    if (
      confirm(
        'Are you sure you want to delete keorganisasianExtract ' + id + '?'
      )
    ) {
      deleteKeorganisasianExtract({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Keorganisasian Extract {keorganisasianExtract.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{keorganisasianExtract.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{keorganisasianExtract.name}</td>
            </tr>
            <tr>
              <th>Nra</th>
              <td>{keorganisasianExtract.nra}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{keorganisasianExtract.image_url}</td>
            </tr>
            <tr>
              <th>Hari</th>
              <td>{formatEnum(keorganisasianExtract.hari)}</td>
            </tr>
            <tr>
              <th>Jenis kegiatan</th>
              <td>{formatEnum(keorganisasianExtract.jenisKegiatan)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editKeorganisasianExtract({
            id: keorganisasianExtract.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(keorganisasianExtract.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default KeorganisasianExtract
