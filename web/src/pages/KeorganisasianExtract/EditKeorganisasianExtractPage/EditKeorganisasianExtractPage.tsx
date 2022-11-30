import EditKeorganisasianExtractCell from 'src/components/KeorganisasianExtract/EditKeorganisasianExtractCell'

type KeorganisasianExtractPageProps = {
  id: number
}

const EditKeorganisasianExtractPage = ({ id }: KeorganisasianExtractPageProps) => {
  return <EditKeorganisasianExtractCell id={id} />
}

export default EditKeorganisasianExtractPage
