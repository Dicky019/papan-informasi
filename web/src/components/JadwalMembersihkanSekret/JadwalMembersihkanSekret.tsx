import JadwalCard from '../JadwalCard/JadwalCard'

const JadwalMembersihkanSekret = () => {
  const senin = '-'
  const selasa = '-'
  const rabu = '-'
  const kamis = '-'
  const jumat = '-'
  const sabtu = 'Badan Pengurus Harian'
  const minggu = '-'

  const dataJadwalBody = [
    // [senin, selasa, rabu, kamis, jumat, sabtu, miggu]
    [senin, selasa, rabu, kamis, jumat, sabtu, minggu],
    [senin, selasa, rabu, kamis, jumat, sabtu, minggu],
    [senin, selasa, rabu, kamis, jumat, sabtu, minggu],
    [senin, selasa, rabu, kamis, jumat, sabtu, minggu],
  ]

  const dataJadwalHeader = [
    // [senin, selasa, rabu, kamis, jumat, sabtu, miggu]
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu',
  ]

  return (
    <JadwalCard
      title="Jadwal Membersihkan Sekret"
      dataJadwalBody={dataJadwalBody}
      dataJadwalHeader={dataJadwalHeader}
    />
  )
}

export default JadwalMembersihkanSekret
