import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import { ProgramKerja } from 'types/graphql'

interface ProgramKerjaExtractCardInterface {
  programKerjaExtracts: Array<{
    __typename?: 'ProgramKerjaExtract'
    id: number
    nameProker: string
    persenProker: number
    programKerja: ProgramKerja
  }>
}

interface listColor {
  title: string
  subTitle: string
  bg: string
  subBg: string
}

const ProgramKerjaExtractCard = (props: ProgramKerjaExtractCardInterface) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.card-proker', {
        // y: 10,
        // repeat: -1,
        // opacity: 1,
        // repeatDelay: 1,
        // delay: 1,
        y: 18,
        duration: 2,
        ease: 'easeIn',
        // yoyo: true,
      })
    })
    return () => ctx.revert()
  })

  const listColors: listColor[] = [
    {
      title: 'text-orange-500',
      subTitle: 'text-orange-500',
      bg: 'bg-orange-500',
      subBg: 'bg-orange-200',
    },
    {
      title: 'text-yellow-500',
      subTitle: 'text-yellow-500',
      bg: 'bg-yellow-500',
      subBg: 'bg-yellow-200',
    },
    {
      title: 'text-cyan-500',
      subTitle: 'text-cyan-500',
      bg: 'bg-cyan-500',
      subBg: 'bg-cyan-200',
    },
    {
      title: 'text-emerald-500',
      subTitle: 'text-emerald-500',
      bg: 'bg-emerald-500',
      subBg: 'bg-emerald-200',
    },
    {
      title: 'text-indigo-500',
      subTitle: 'text-indigo-500',
      bg: 'bg-indigo-500',
      subBg: 'bg-indigo-200',
    },
  ]

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
  }

  return (
    <div className=" w-full ">
      {props.programKerjaExtracts.map((e) => {
        const colors = listColors[getRandomInt(5)]
        return (
          <div key={e.id} className="card-proker m-4">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span
                  className={`inline-block rounded-full ${colors.subBg} py-1 px-2 text-xs font-semibold uppercase ${colors.title}`}
                >
                  {e.programKerja} {' - '}
                  <span className="font-normal">{e.nameProker}</span>
                </span>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block text-xs font-semibold ${colors.title}`}
                >
                  {e.persenProker}%
                </span>
              </div>
            </div>
            <div
              className={`mb-4 flex h-2 overflow-hidden rounded ${colors.subBg} text-xs`}
            >
              <div
                style={{ width: `${e.persenProker}%` }}
                className={`flex flex-col justify-center whitespace-nowrap ${colors.bg} text-center text-white shadow-none`}
              ></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProgramKerjaExtractCard
