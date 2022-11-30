import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'

const AdminExtractCard = (props) => {
  // const card = useRef()
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.055 })
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 })
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.box', {
        y: 25,
        // repeat: -1,
        // repeatDelay: 1,
        yoyo: true,
      })
    })
    return () => ctx.revert()
  })

  return (
    <div
      // ref={card}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="box my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4"
    >
      {/* <!-- Article --> */}
      <article className="overflow-hidden  ">
        <img
          alt="Placeholder"
          className="block h-80 w-full rounded-lg object-cover"
          src={props.adminExtract.image_url}
        />
        <header className="m d flex flex-col items-start justify-between p-2 leading-tight md:p-4">
          <h1 className="text-titel-admin ">
            {props.adminExtract?.name ?? 'Kosong'}
          </h1>
          <h1 className="text-subtitel-admin ">
            {props.adminExtract?.nra ?? 'Kosong'}
          </h1>
        </header>
      </article>
      {/* <!-- END Article --> */}
    </div>
  )
}

export default AdminExtractCard
