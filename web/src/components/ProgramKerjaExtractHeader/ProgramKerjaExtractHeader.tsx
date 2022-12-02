import { useState } from 'react'

import { ProgramKerja } from 'types/graphql'

interface ProgramKerjaExtractHeaderInterface {
  programKerjaExtracts: Array<{
    __typename?: 'ProgramKerjaExtract'
    id: number
    nameProker: string
    persenProker: number
    programKerja: ProgramKerja
  }>
  setProgramKerja: React.Dispatch<
    React.SetStateAction<
      {
        __typename?: 'ProgramKerjaExtract'
        id: number
        nameProker: string
        persenProker: number
        programKerja: ProgramKerja
      }[]
    >
  >
}

const ProgramKerjaExtractHeader = (
  props: ProgramKerjaExtractHeaderInterface
) => {
  const [active, setActive] = useState('All')

  const listHeader: string[] = [
    'Keorganisasian',
    'Publicandrelation',
    'Toolsandproperties',
    'Keilmuan',
  ]

  function onChangeList(params: string) {
    setActive(params)
    props.setProgramKerja(
      props.programKerjaExtracts.filter((value) => value.programKerja == params)
    )
  }

  const cssActive = ' border-b-2 border-blue-400'
  return (
    <div className="flex px-2 pt-2 sm:flex-col md:flex-row">
      <button
        onClick={() => {
          setActive('All')
          props.setProgramKerja(props.programKerjaExtracts)
        }}
        className={`fade-in-down mx-1 w-full py-1 text-center font-semibold text-gray-800 opacity-50 hover:rounded-md hover:bg-slate-400 ${
          active == 'All' ? cssActive : ''
        }`}
      >
        All
      </button>
      {listHeader.map((e, index) => (
        <button
          onClick={() => onChangeList(e)}
          key={index}
          className={`mx-1 w-full py-1 text-center font-semibold text-gray-800 opacity-50 hover:rounded-md hover:bg-slate-400 ${
            active == e ? cssActive : ''
          }`}
        >
          {e == 'Toolsandproperties'
            ? 'Tools & Properties'
            : e == 'Publicandrelation'
            ? 'Public & Relation'
            : e}
        </button>
      ))}
    </div>
  )
}

export default ProgramKerjaExtractHeader
