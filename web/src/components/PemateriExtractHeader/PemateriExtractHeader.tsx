import { useEffect } from 'react'

interface PemateriExtractHeaderInterface {
  listKonsentrasi: Array<{
    __typename?: 'PemateriExtract'
    id: number
    name: string
    nra: string
    image_url: string
    hari: string
    konsentrasi: string
  }>
  setListKonsentrasi: React.Dispatch<
    React.SetStateAction<
      {
        __typename?: 'PemateriExtract'
        id: number
        name: string
        nra: string
        image_url: string
        hari: string
        konsentrasi: string
      }[]
    >
  >
  pemateriExtracts: Array<{
    __typename?: 'PemateriExtract'
    id: number
    name: string
    nra: string
    image_url: string
    hari: string
    konsentrasi: string
  }>
}

const PemateriExtractHeader = (props: PemateriExtractHeaderInterface) => {
  const program = props.pemateriExtracts.filter(
    (value) => value.konsentrasi == 'Program'
  )
  const jaringan = props.pemateriExtracts.filter(
    (value) => value.konsentrasi == 'Jaringan'
  )
  const multimedia = props.pemateriExtracts.filter(
    (value) => value.konsentrasi == 'MultiMedia'
  )
  const hardware = props.pemateriExtracts.filter(
    (value) => value.konsentrasi == 'Hardware'
  )

  useEffect(() => {
    const timeChangeKonsentrasi = setTimeout(() => {
      if (JSON.stringify(props.listKonsentrasi) === JSON.stringify(program)) {
        props.setListKonsentrasi(jaringan)
        return
      } else if (
        JSON.stringify(props.listKonsentrasi) === JSON.stringify(jaringan)
      ) {
        props.setListKonsentrasi(multimedia)
        return
      } else if (
        JSON.stringify(props.listKonsentrasi) === JSON.stringify(multimedia)
      ) {
        props.setListKonsentrasi(hardware)
        return
      } else {
        props.setListKonsentrasi(program)
        return
      }
    }, 9000)
    return () => {
      clearTimeout(timeChangeKonsentrasi)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.listKonsentrasi])

  return (
    <div className=" lg:mx-12">
      <div className="mt-4 space-y-4 lg:mt-8 ">
        <button
          onClick={() => props.setListKonsentrasi(program)}
          className={`block ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(program)
              ? 'text-blue-500'
              : 'text-gray-500'
          }  hover:underline ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(program)
              ? 'text-blue-400'
              : 'text-gray-400'
          }`}
        >
          Program
        </button>
        <button
          onClick={() => props.setListKonsentrasi(jaringan)}
          className={`block ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(jaringan)
              ? 'text-blue-500'
              : 'text-gray-500'
          }  hover:underline ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(jaringan)
              ? 'text-blue-400'
              : 'text-gray-400'
          }`}
        >
          Jaringan
        </button>
        <button
          onClick={() => props.setListKonsentrasi(multimedia)}
          className={`block ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(multimedia)
              ? 'text-blue-500'
              : 'text-gray-500'
          }  hover:underline ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(multimedia)
              ? 'text-blue-400'
              : 'text-gray-400'
          }`}
        >
          Multimedia
        </button>
        <button
          onClick={() => props.setListKonsentrasi(hardware)}
          className={`block ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(hardware)
              ? 'text-blue-500'
              : 'text-gray-500'
          }  hover:underline ${
            JSON.stringify(props.listKonsentrasi) === JSON.stringify(hardware)
              ? 'text-blue-400'
              : 'text-gray-400'
          }`}
        >
          Hardware
        </button>
      </div>
    </div>
  )
}

export default PemateriExtractHeader
