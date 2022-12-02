import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import type { InfentarisesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query InfentarisesQuery {
    infentarises {
      id
      name
      image_url
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  infentarises,
}: CellSuccessProps<InfentarisesQuery>) => {
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
    <div className="my-16 mb-4 sm:mx-4 lg:mx-16">
      <h1 className="text-header my-4 text-gray-900">
        Inventaris | Tools & Properties {process.env.REDWOOD_ENV_TAHUN_KE}
      </h1>
      <div className="card-infentaris grid grid-cols-2 lg:grid-cols-3 ">
        {infentarises.map((item) => {
          return (
            <div
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              key={item.id}
              className="m-4"
            >
              <img
                src={item.image_url}
                alt="infentaris"
                className="rounded-md object-cover"
              />
              <div className="mt-2">
                <span className="rounded-full bg-cyan-100 py-1 px-2 font-bold uppercase text-cyan-500 lg:px-3 ">
                  {item.name} <span className="font-normal ">{item.value}</span>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
