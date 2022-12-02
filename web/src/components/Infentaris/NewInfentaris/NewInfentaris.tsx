import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InfentarisForm from 'src/components/Infentaris/InfentarisForm'

import type { CreateInfentarisInput } from 'types/graphql'

const CREATE_INFENTARIS_MUTATION = gql`
  mutation CreateInfentarisMutation($input: CreateInfentarisInput!) {
    createInfentaris(input: $input) {
      id
    }
  }
`

const NewInfentaris = () => {
  const [createInfentaris, { loading, error }] = useMutation(
    CREATE_INFENTARIS_MUTATION,
    {
      onCompleted: () => {
        toast.success('Infentaris created')
        navigate(routes.infentarises())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInfentarisInput) => {
    createInfentaris({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Infentaris</h2>
      </header>
      <div className="rw-segment-main">
        <InfentarisForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInfentaris
