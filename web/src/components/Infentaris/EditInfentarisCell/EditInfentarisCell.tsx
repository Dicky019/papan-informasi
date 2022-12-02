import type { EditInfentarisById, UpdateInfentarisInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InfentarisForm from 'src/components/Infentaris/InfentarisForm'

export const QUERY = gql`
  query EditInfentarisById($id: Int!) {
    infentaris: infentaris(id: $id) {
      id
      name
      image_url
      value
    }
  }
`
const UPDATE_INFENTARIS_MUTATION = gql`
  mutation UpdateInfentarisMutation($id: Int!, $input: UpdateInfentarisInput!) {
    updateInfentaris(id: $id, input: $input) {
      id
      name
      image_url
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ infentaris }: CellSuccessProps<EditInfentarisById>) => {
  const [updateInfentaris, { loading, error }] = useMutation(
    UPDATE_INFENTARIS_MUTATION,
    {
      onCompleted: () => {
        toast.success('Infentaris updated')
        navigate(routes.infentarises())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInfentarisInput,
    id: EditInfentarisById['infentaris']['id']
  ) => {
    updateInfentaris({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Infentaris {infentaris?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <InfentarisForm infentaris={infentaris} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
