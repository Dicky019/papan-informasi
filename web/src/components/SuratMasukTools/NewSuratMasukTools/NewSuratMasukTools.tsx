import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SuratMasukToolsForm from 'src/components/SuratMasukTools/SuratMasukToolsForm'

import type { CreateSuratMasukToolsInput } from 'types/graphql'

const CREATE_SURAT_MASUK_TOOLS_MUTATION = gql`
  mutation CreateSuratMasukToolsMutation($input: CreateSuratMasukToolsInput!) {
    createSuratMasukTools(input: $input) {
      id
    }
  }
`

const NewSuratMasukTools = () => {
  const [createSuratMasukTools, { loading, error }] = useMutation(
    CREATE_SURAT_MASUK_TOOLS_MUTATION,
    {
      onCompleted: () => {
        toast.success('SuratMasukTools created')
        navigate(routes.suratMasukToolses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateSuratMasukToolsInput) => {
    createSuratMasukTools({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SuratMasukTools</h2>
      </header>
      <div className="rw-segment-main">
        <SuratMasukToolsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSuratMasukTools
