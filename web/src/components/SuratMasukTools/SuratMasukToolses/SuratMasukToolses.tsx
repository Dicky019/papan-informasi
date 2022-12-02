import type {
  DeleteSuratMasukToolsMutationVariables,
  FindSuratMasukToolses,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/SuratMasukTools/SuratMasukToolsesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_SURAT_MASUK_TOOLS_MUTATION = gql`
  mutation DeleteSuratMasukToolsMutation($id: Int!) {
    deleteSuratMasukTools(id: $id) {
      id
    }
  }
`

const SuratMasukToolsesList = ({
  suratMasukToolses,
}: FindSuratMasukToolses) => {
  const [deleteSuratMasukTools] = useMutation(
    DELETE_SURAT_MASUK_TOOLS_MUTATION,
    {
      onCompleted: () => {
        toast.success('SuratMasukTools deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (id: DeleteSuratMasukToolsMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete suratMasukTools ' + id + '?')
    ) {
      deleteSuratMasukTools({ variables: { id } })
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
            <th>Tanggal masuk</th>
            <th>Descripsi</th>
            <th>Image url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {suratMasukToolses.map((suratMasukTools) => (
            <tr key={suratMasukTools.id}>
              <td>{truncate(suratMasukTools.id)}</td>
              <td>{truncate(suratMasukTools.name)}</td>
              <td>{truncate(suratMasukTools.tanggalMasuk)}</td>
              <td>{truncate(suratMasukTools.descripsi)}</td>
              {/* <td>{truncate(suratMasukTools.image_url)}</td> */}
              <td>
                <a
                  href={suratMasukTools.image_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={thumbnail(suratMasukTools.image_url)}
                    alt="avatar"
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.suratMasukTools({ id: suratMasukTools.id })}
                    title={
                      'Show suratMasukTools ' + suratMasukTools.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSuratMasukTools({ id: suratMasukTools.id })}
                    title={'Edit suratMasukTools ' + suratMasukTools.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete suratMasukTools ' + suratMasukTools.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(suratMasukTools.id)}
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

export default SuratMasukToolsesList
