import EditAdminExtractCell from 'src/components/AdminExtract/EditAdminExtractCell'

type AdminExtractPageProps = {
  id: number
}

const EditAdminExtractPage = ({ id }: AdminExtractPageProps) => {
  return <EditAdminExtractCell id={id} />
}

export default EditAdminExtractPage
