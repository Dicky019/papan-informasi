import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
// import ReactCSSTransitionGroup from 'react-transition-group'
interface PemateriExtractCardInterface {
  listKonsentrasi: Array<{
    __typename?: 'PemateriExtract'
    id: number
    name: string
    nra: string
    image_url: string
    hari: string
    konsentrasi: string
  }>
}

const PemateriExtractCard = (props: PemateriExtractCardInterface) => {
  // const cardPemateri = useRef()
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.055 })
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 })
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.card-pemateri', {
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
    <div className=" flex-1 lg:mx-12 lg:mt-0">
      <div className="container mx-auto">
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {props.listKonsentrasi.map((value) => {
            return (
              <div
                // ref={cardPemateri}
                onMouseLeave={onLeave}
                onMouseEnter={onEnter}
                className="card-pemateri lg:flex"
                key={value.id}
              >
                <img
                  className="h-56 w-full rounded-lg object-cover lg:w-64"
                  src={value.image_url}
                  alt="pemateri"
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <div>
                    <p className="text-titel-pemateri">{value.name}</p>
                    <p className="text-subtitel-pemateri">{value.nra}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {value.hari}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PemateriExtractCard
