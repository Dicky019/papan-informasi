import EditPemateriExtractCell from 'src/components/PemateriExtract/EditPemateriExtractCell'

type PemateriExtractPageProps = {
  id: number
}

const EditPemateriExtractPage = ({ id }: PemateriExtractPageProps) => {
  return <EditPemateriExtractCell id={id} />
}

export default EditPemateriExtractPage
