interface JadwalCard {
  title: string
  dataJadwalBody: string[][]
  dataJadwalHeader: string[]
}

const JadwalCard = (props: JadwalCard) => {
  return (
    <div className="my-8 mx-8 flex flex-col rounded-lg px-4 pb-8 shadow-lg">
      <h1 className="text-header my-4 text-gray-900">
        {props.title} {process.env.REDWOOD_ENV_TAHUN_KE}
      </h1>
      <table className="min-w-full table-fixed text-center">
        <thead className="border-b bg-gray-800">
          <tr>
            {props.dataJadwalHeader.map((e, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-4 text-sm font-bold text-white"
              >
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.dataJadwalBody.map((e, i) => (
            <tr key={i} className="border-b bg-white">
              {e.map((item, index) => (
                <td
                  key={index}
                  className="whitespace-nowrap px-6 py-4 text-sm font-bold text-gray-900"
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JadwalCard
