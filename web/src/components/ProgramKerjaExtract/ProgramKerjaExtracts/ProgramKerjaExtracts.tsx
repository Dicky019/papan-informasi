import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProgramKerjaExtract/ProgramKerjaExtractsCell'
import { formatEnum, truncate } from 'src/lib/formatters'

import type { DeleteProgramKerjaExtractMutationVariables, FindProgramKerjaExtracts } from 'types/graphql'

const DELETE_PROGRAM_KERJA_EXTRACT_MUTATION = gql`
  mutation DeleteProgramKerjaExtractMutation($id: Int!) {
    deleteProgramKerjaExtract(id: $id) {
      id
    }
  }
`

const ProgramKerjaExtractsList = ({ programKerjaExtracts }: FindProgramKerjaExtracts) => {
  const [deleteProgramKerjaExtract] = useMutation(DELETE_PROGRAM_KERJA_EXTRACT_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramKerjaExtract deleted')
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

  const onDeleteClick = (id: DeleteProgramKerjaExtractMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete programKerjaExtract ' + id + '?')) {
      deleteProgramKerjaExtract({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name proker</th>
            <th>Persen proker</th>
            <th>Program kerja</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programKerjaExtracts.map((programKerjaExtract) => (
            <tr key={programKerjaExtract.id}>
              <td>{truncate(programKerjaExtract.id)}</td>
              <td>{truncate(programKerjaExtract.nameProker)}</td>
              <td>{truncate(programKerjaExtract.persenProker)}</td>
              <td>{formatEnum(programKerjaExtract.programKerja)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.programKerjaExtract({ id: programKerjaExtract.id })}
                    title={'Show programKerjaExtract ' + programKerjaExtract.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgramKerjaExtract({ id: programKerjaExtract.id })}
                    title={'Edit programKerjaExtract ' + programKerjaExtract.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete programKerjaExtract ' + programKerjaExtract.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(programKerjaExtract.id)}
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

export default ProgramKerjaExtractsList
