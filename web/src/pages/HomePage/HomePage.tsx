// import { Link, routes } from '@redwoodjs/router'
// import '../../index.css'
import { MetaTags } from '@redwoodjs/web'

import AdminExtracts from 'src/components/AdminExtractsCell'
import KeorganisasianExtract from 'src/components/KeorganisasianExtractsCell'
import PemateriExtracts from 'src/components/PemateriExtractsCell'
import ProgramKerjaExtracts from 'src/components/programKerjaExtractsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex items-center justify-center">
        <img src="/favicon.png" alt="icon" className="h-32 " />
        <h1 className="my-4 text-center text-3xl font-light">
          <span className="text-kedai font-black">KeDai</span> Computerworks |
          Papan Informasi
        </h1>
      </div>
      <AdminExtracts />
      <PemateriExtracts />
      {/* <PemateriExtracts /> */}
      <hr className="rounded-md bg-transparent py-[1.5px]" />
      <KeorganisasianExtract />
      <ProgramKerjaExtracts />
    </>
  )
}

export default HomePage
