// import { Link, routes } from '@redwoodjs/router'
// import '../../index.css'
import { MetaTags } from '@redwoodjs/web'

import AdminExtracts from 'src/components/AdminExtractsCell'
import Infentarises from 'src/components/InfentarisesCell'
import JadwalAgenda from 'src/components/JadwalAgenda/JadwalAgenda'
import JadwalMembersihkanSekret from 'src/components/JadwalMembersihkanSekret'
import JadwalNginap from 'src/components/JadwalNginap/JadwalNginap'
import Kalender from 'src/components/Kalender'
import KeorganisasianExtract from 'src/components/KeorganisasianExtractsCell'
import PemateriExtracts from 'src/components/PemateriExtractsCell'
import ProgramKerjaExtracts from 'src/components/programKerjaExtractsCell'
import SuratMasukToolses from 'src/components/SuratMasukToolsesCell'

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
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <ProgramKerjaExtracts />
        </div>
        <div className="flex-1">
          <Infentarises />
        </div>
      </div>
      <SuratMasukToolses />
      <JadwalMembersihkanSekret />
      <JadwalAgenda />
      <JadwalNginap />

      <Kalender />
      <div className="h-16"></div>
    </>
  )
}

export default HomePage
