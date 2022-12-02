import EditSuratMasukToolsCell from 'src/components/SuratMasukTools/EditSuratMasukToolsCell'

type SuratMasukToolsPageProps = {
  id: number
}

const EditSuratMasukToolsPage = ({ id }: SuratMasukToolsPageProps) => {
  return <EditSuratMasukToolsCell id={id} />
}

export default EditSuratMasukToolsPage
