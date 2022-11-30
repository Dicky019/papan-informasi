import AdminExtractCell from 'src/components/AdminExtract/AdminExtractCell'

type AdminExtractPageProps = {
  id: number
}

const AdminExtractPage = ({ id }: AdminExtractPageProps) => {
  return <AdminExtractCell id={id} />
}

export default AdminExtractPage
