import JadwalCard from '../JadwalCard/JadwalCard'

const JadwalNginap = () => {
  const dataJadwalBody = [
    // [senin, selasa, rabu, kamis, jumat, sabtu, miggu]
    ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
    // ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
    // ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
    // ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
  ]

  const dataJadwalHeader = [
    // [senin, selasa, "rabu", kamis, jumat, sabtu, miggu]
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
      title="Jadwal Nginap"
      dataJadwalBody={dataJadwalBody}
      dataJadwalHeader={dataJadwalHeader}
    />
  )
}

export default JadwalNginap
