import type {
  DeletePemateriExtractMutationVariables,
  FindPemateriExtracts,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/PemateriExtract/PemateriExtractsCell'
import { formatEnum, truncate } from 'src/lib/formatters'

const DELETE_PEMATERI_EXTRACT_MUTATION = gql`
  mutation DeletePemateriExtractMutation($id: Int!) {
    deletePemateriExtract(id: $id) {
      id
    }
  }
`

const PemateriExtractsList = ({ pemateriExtracts }: FindPemateriExtracts) => {
  const [deletePemateriExtract] = useMutation(
    DELETE_PEMATERI_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PemateriExtract deleted')
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

  const onDeleteClick = (id: DeletePemateriExtractMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete pemateriExtract ' + id + '?')
    ) {
      deletePemateriExtract({ variables: { id } })
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
            <th>Nra</th>
            <th>Image url</th>
            <th>Hari</th>
            <th>Konsentrasi</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pemateriExtracts.map((pemateriExtract) => (
            <tr key={pemateriExtract.id}>
              <td>{truncate(pemateriExtract.id)}</td>
              <td>{truncate(pemateriExtract.name)}</td>
              <td>{truncate(pemateriExtract.nra)}</td>
              {/* <td>{truncate(pemateriExtract.image_url)}</td> */}
              <td>
                {/* {truncate(adminExtract.image_url)} */}
                <a
                  href={pemateriExtract.image_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={thumbnail(pemateriExtract.image_url)}
                    alt="avatar"
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
              <td>{formatEnum(pemateriExtract.hari)}</td>
              <td>{formatEnum(pemateriExtract.konsentrasi)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.pemateriExtract({ id: pemateriExtract.id })}
                    title={
                      'Show pemateriExtract ' + pemateriExtract.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPemateriExtract({ id: pemateriExtract.id })}
                    title={'Edit pemateriExtract ' + pemateriExtract.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete pemateriExtract ' + pemateriExtract.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(pemateriExtract.id)}
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

export default PemateriExtractsList
