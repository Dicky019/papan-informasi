import KeorganisasianExtractCell from 'src/components/KeorganisasianExtract/KeorganisasianExtractCell'

type KeorganisasianExtractPageProps = {
  id: number
}

const KeorganisasianExtractPage = ({ id }: KeorganisasianExtractPageProps) => {
  return <KeorganisasianExtractCell id={id} />
}

export default KeorganisasianExtractPage
