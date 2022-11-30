import EditProgramKerjaExtractCell from 'src/components/ProgramKerjaExtract/EditProgramKerjaExtractCell'

type ProgramKerjaExtractPageProps = {
  id: number
}

const EditProgramKerjaExtractPage = ({ id }: ProgramKerjaExtractPageProps) => {
  return <EditProgramKerjaExtractCell id={id} />
}

export default EditProgramKerjaExtractPage
