import type {
  DeleteSuratMasukToolsMutationVariables,
  FindSuratMasukToolsById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SURAT_MASUK_TOOLS_MUTATION = gql`
  mutation DeleteSuratMasukToolsMutation($id: Int!) {
    deleteSuratMasukTools(id: $id) {
      id
    }
  }
`

interface Props {
  suratMasukTools: NonNullable<FindSuratMasukToolsById['suratMasukTools']>
}

const SuratMasukTools = ({ suratMasukTools }: Props) => {
  const [deleteSuratMasukTools] = useMutation(
    DELETE_SURAT_MASUK_TOOLS_MUTATION,
    {
      onCompleted: () => {
        toast.success('SuratMasukTools deleted')
        navigate(routes.suratMasukToolses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeleteSuratMasukToolsMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete suratMasukTools ' + id + '?')
    ) {
      deleteSuratMasukTools({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SuratMasukTools {suratMasukTools.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{suratMasukTools.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{suratMasukTools.name}</td>
            </tr>
            <tr>
              <th>Tanggal masuk</th>
              <td>{suratMasukTools.tanggalMasuk}</td>
            </tr>
            <tr>
              <th>Descripsi</th>
              <td>{suratMasukTools.descripsi}</td>
            </tr>
            <tr>
              {/* <th>Image url</th>
              <td>{suratMasukTools.image_url}</td> */}
              <th>Image url</th>
              <td>
                <a
                  href={suratMasukTools.image_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-96 rounded-md object-cover"
                    src={suratMasukTools.image_url}
                    alt="avatar"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSuratMasukTools({ id: suratMasukTools.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(suratMasukTools.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SuratMasukTools
