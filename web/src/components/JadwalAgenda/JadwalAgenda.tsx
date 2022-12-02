import JadwalCard from '../JadwalCard/JadwalCard'

const JadwalAgenda = () => {
  const dataJadwalBody = [
    // [senin, selasa, rabu, kamis, jumat, sabtu, miggu]
    [' Minggu-1', 'Program', '-', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
    [
      'Minggu-2',
      'senin',
      'selasa',
      'rabu',
      'kamis',
      'jumat',
      'sabtu',
      'minggu',
    ],
    [
      'Minggu-3',
      'senin',
      'selasa',
      'rabu',
      'kamis',
      'jumat',
      'sabtu',
      'minggu',
    ],
    [
      'Minggu-4',
      'senin',
      'selasa',
      'rabu',
      'kamis',
      'jumat',
      'sabtu',
      'minggu',
    ],
  ]

  const dataJadwalHeader = [
    // [senin, selasa, "rabu", kamis, jumat, sabtu, miggu]
    '',
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
      title="Jadwal Agenda Tahap 1"
      dataJadwalBody={dataJadwalBody}
      dataJadwalHeader={dataJadwalHeader}
    />
  )
}

export default JadwalAgenda
