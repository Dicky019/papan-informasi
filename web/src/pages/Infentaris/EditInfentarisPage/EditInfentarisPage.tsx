import EditInfentarisCell from 'src/components/Infentaris/EditInfentarisCell'

type InfentarisPageProps = {
  id: number
}

const EditInfentarisPage = ({ id }: InfentarisPageProps) => {
  return <EditInfentarisCell id={id} />
}

export default EditInfentarisPage
