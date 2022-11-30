// import { Link, routes } from '@redwoodjs/router'
// import '../../index.css'
import { MetaTags } from '@redwoodjs/web'

import AdminExtracts from 'src/components/AdminExtractsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="my-4 text-center font-light text-3xl">
        KeDai Computerworks | Papan Informasi
      </h1>
      <AdminExtracts />
    </>
  )
}

export default HomePage
