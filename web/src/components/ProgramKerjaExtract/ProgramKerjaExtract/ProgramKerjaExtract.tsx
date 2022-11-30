import type {
  DeleteProgramKerjaExtractMutationVariables,
  FindProgramKerjaExtractById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum } from 'src/lib/formatters'

const DELETE_PROGRAM_KERJA_EXTRACT_MUTATION = gql`
  mutation DeleteProgramKerjaExtractMutation($id: Int!) {
    deleteProgramKerjaExtract(id: $id) {
      id
    }
  }
`

interface Props {
  programKerjaExtract: NonNullable<
    FindProgramKerjaExtractById['programKerjaExtract']
  >
}

const ProgramKerjaExtract = ({ programKerjaExtract }: Props) => {
  const [deleteProgramKerjaExtract] = useMutation(
    DELETE_PROGRAM_KERJA_EXTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgramKerjaExtract deleted')
        navigate(routes.programKerjaExtracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteProgramKerjaExtractMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete programKerjaExtract ' + id + '?')
    ) {
      deleteProgramKerjaExtract({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProgramKerjaExtract {programKerjaExtract.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{programKerjaExtract.id}</td>
            </tr>
            <tr>
              <th>Name proker</th>
              <td>{programKerjaExtract.nameProker}</td>
            </tr>
            <tr>
              <th>Persen proker</th>
              <td>{programKerjaExtract.persenProker}</td>
            </tr>
            <tr>
              <th>Program kerja</th>
              <td>{formatEnum(programKerjaExtract.programKerja)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgramKerjaExtract({ id: programKerjaExtract.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(programKerjaExtract.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProgramKerjaExtract
