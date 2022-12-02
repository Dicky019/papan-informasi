import SuratMasukToolsCell from 'src/components/SuratMasukTools/SuratMasukToolsCell'

type SuratMasukToolsPageProps = {
  id: number
}

const SuratMasukToolsPage = ({ id }: SuratMasukToolsPageProps) => {
  return <SuratMasukToolsCell id={id} />
}

export default SuratMasukToolsPage
