import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/KeorganisasianExtract/KeorganisasianExtractsCell'
import { formatEnum, truncate } from 'src/lib/formatters'

import type { DeleteKeorganisasianExtractMutationVariables, FindKeorganisasianExtracts } from 'types/graphql'

const DELETE_KEORGANISASIAN_EXTRACT_MUTATION = gql`
  mutation DeleteKeorganisasianExtractMutation($id: Int!) {
    deleteKeorganisasianExtract(id: $id) {
      id
    }
  }
`

const KeorganisasianExtractsList = ({ keorganisasianExtracts }: FindKeorganisasianExtracts) => {
  const [deleteKeorganisasianExtract] = useMutation(DELETE_KEORGANISASIAN_EXTRACT_MUTATION, {
    onCompleted: () => {
      toast.success('KeorganisasianExtract deleted')
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

  const onDeleteClick = (id: DeleteKeorganisasianExtractMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete keorganisasianExtract ' + id + '?')) {
      deleteKeorganisasianExtract({ variables: { id } })
    }
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
            <th>Jenis kegiatan</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {keorganisasianExtracts.map((keorganisasianExtract) => (
            <tr key={keorganisasianExtract.id}>
              <td>{truncate(keorganisasianExtract.id)}</td>
              <td>{truncate(keorganisasianExtract.name)}</td>
              <td>{truncate(keorganisasianExtract.nra)}</td>
              <td>{truncate(keorganisasianExtract.image_url)}</td>
              <td>{formatEnum(keorganisasianExtract.hari)}</td>
              <td>{formatEnum(keorganisasianExtract.jenisKegiatan)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.keorganisasianExtract({ id: keorganisasianExtract.id })}
                    title={'Show keorganisasianExtract ' + keorganisasianExtract.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editKeorganisasianExtract({ id: keorganisasianExtract.id })}
                    title={'Edit keorganisasianExtract ' + keorganisasianExtract.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete keorganisasianExtract ' + keorganisasianExtract.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(keorganisasianExtract.id)}
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

export default KeorganisasianExtractsList
