import ProgramKerjaExtractCell from 'src/components/ProgramKerjaExtract/ProgramKerjaExtractCell'

type ProgramKerjaExtractPageProps = {
  id: number
}

const ProgramKerjaExtractPage = ({ id }: ProgramKerjaExtractPageProps) => {
  return <ProgramKerjaExtractCell id={id} />
}

export default ProgramKerjaExtractPage
