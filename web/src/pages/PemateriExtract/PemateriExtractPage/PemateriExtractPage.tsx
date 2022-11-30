import PemateriExtractCell from 'src/components/PemateriExtract/PemateriExtractCell'

type PemateriExtractPageProps = {
  id: number
}

const PemateriExtractPage = ({ id }: PemateriExtractPageProps) => {
  return <PemateriExtractCell id={id} />
}

export default PemateriExtractPage
