import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import type { SuratMasukToolsesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
export const QUERY = gql`
  query SuratMasukToolsesQuery {
    suratMasukToolses {
      id
      name
      image_url
      descripsi
      tanggalMasuk
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  suratMasukToolses,
}: CellSuccessProps<SuratMasukToolsesQuery>) => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.055 })
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 })
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.card-infentaris', {
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

  return (
    <div className="my-16 sm:mx-4 lg:mx-16">
      <h1 className="text-header my-4 text-gray-900">
        Surat Masuk | Tools & Properties {process.env.REDWOOD_ENV_TAHUN_KE}
      </h1>
      <div className="card-infentaris grid grid-cols-2 lg:grid-cols-4 ">
        {suratMasukToolses.map((item) => {
          return (
            <div
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              key={item.id}
              className="overflow-hidden rounded shadow-lg"
            >
              <img
                src={item.image_url}
                alt="infentaris"
                className="object-cover"
              />
              <div className="p-5">
                <div className="mt-2 flex justify-between">
                  <span className="text-xl font-bold uppercase ">
                    {item.name}
                  </span>
                  <span className=" font-bold uppercase text-blue-500 ">
                    {item.tanggalMasuk}
                  </span>
                </div>

                <p className="mt-2 text-base text-gray-700">{item.descripsi}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
