import InfentarisCell from 'src/components/Infentaris/InfentarisCell'

type InfentarisPageProps = {
  id: number
}

const InfentarisPage = ({ id }: InfentarisPageProps) => {
  return <InfentarisCell id={id} />
}

export default InfentarisPage
