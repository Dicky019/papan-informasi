import type { EditSuratMasukToolsById, UpdateSuratMasukToolsInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SuratMasukToolsForm from 'src/components/SuratMasukTools/SuratMasukToolsForm'

export const QUERY = gql`
  query EditSuratMasukToolsById($id: Int!) {
    suratMasukTools: suratMasukTools(id: $id) {
      id
      name
      tanggalMasuk
      descripsi
      image_url
    }
  }
`
const UPDATE_SURAT_MASUK_TOOLS_MUTATION = gql`
  mutation UpdateSuratMasukToolsMutation($id: Int!, $input: UpdateSuratMasukToolsInput!) {
    updateSuratMasukTools(id: $id, input: $input) {
      id
      name
      tanggalMasuk
      descripsi
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ suratMasukTools }: CellSuccessProps<EditSuratMasukToolsById>) => {
  const [updateSuratMasukTools, { loading, error }] = useMutation(
    UPDATE_SURAT_MASUK_TOOLS_MUTATION,
    {
      onCompleted: () => {
        toast.success('SuratMasukTools updated')
        navigate(routes.suratMasukToolses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateSuratMasukToolsInput,
    id: EditSuratMasukToolsById['suratMasukTools']['id']
  ) => {
    updateSuratMasukTools({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit SuratMasukTools {suratMasukTools?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SuratMasukToolsForm suratMasukTools={suratMasukTools} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
