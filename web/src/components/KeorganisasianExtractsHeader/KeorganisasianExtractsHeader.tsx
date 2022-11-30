import { useEffect } from 'react'

import type { Hari, JenisKegiatan } from 'types/graphql'
interface KeorganisasianHeaderInterface {
  listKeorganisasian: Array<{
    __typename?: 'KeorganisasianExtract'
    id: number
    name: string
    nra: string
    image_url: string
    hari: Hari
    jenisKegiatan: JenisKegiatan
  }>
  setListKeorganisasian: React.Dispatch<
    React.SetStateAction<
      {
        __typename?: 'KeorganisasianExtract'
        id: number
        name: string
        nra: string
        image_url: string
        hari: Hari
        jenisKegiatan: JenisKegiatan
      }[]
    >
  >
  keorganisasians: Array<{
    __typename?: 'KeorganisasianExtract'
    id: number
    name: string
    nra: string
    image_url: string
    hari: Hari
    jenisKegiatan: JenisKegiatan
  }>
}

const KeorganisasianExtractsHeader = (props: KeorganisasianHeaderInterface) => {
  const nginap = props.keorganisasians.filter(
    (value) => value.jenisKegiatan == 'Nginap'
  )
  const pembelajaran = props.keorganisasians.filter(
    (value) => value.jenisKegiatan == 'Pembelajaran'
  )

  useEffect(() => {
    const timeChangeKeorganisasian = setTimeout(() => {
      if (JSON.stringify(props.listKeorganisasian) === JSON.stringify(nginap)) {
        props.setListKeorganisasian(pembelajaran)
        return
      } else {
        props.setListKeorganisasian(nginap)
        return
      }
    }, 9000)
    return () => {
      clearTimeout(timeChangeKeorganisasian)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.listKeorganisasian])

  return (
    <div className=" lg:mx-12">
      <div className="mt-4 space-y-4 lg:mt-8 ">
        <button
          onClick={() => props.setListKeorganisasian(nginap)}
          className={`block ${
            JSON.stringify(props.listKeorganisasian) === JSON.stringify(nginap)
              ? 'text-blue-500'
              : 'text-gray-500'
          }  hover:underline ${
            JSON.stringify(props.listKeorganisasian) === JSON.stringify(nginap)
              ? 'text-blue-400'
              : 'text-gray-400'
          }`}
        >
          Nginap
        </button>

        <button
          onClick={() => props.setListKeorganisasian(pembelajaran)}
          className={`block ${
            JSON.stringify(props.listKeorganisasian) ===
            JSON.stringify(pembelajaran)
              ? 'text-blue-500'
              : 'text-gray-500'
          }  hover:underline ${
            JSON.stringify(props.listKeorganisasian) ===
            JSON.stringify(pembelajaran)
              ? 'text-blue-400'
              : 'text-gray-400'
          }`}
        >
          Pembelajaran
        </button>
      </div>
    </div>
  )
}
export default KeorganisasianExtractsHeader
