import type { AdminExtractsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AdminExtractCard from '../AdminExtractCard/AdminExtractCard'

export const QUERY = gql`
  query AdminExtractsQuery {
    adminExtracts {
      id
      name
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  adminExtracts,
}: CellSuccessProps<AdminExtractsQuery>) => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      {/* <h1 className="text-center text-lg font-light">
        Admin EXTRACT {process.env.REDWOOD_ENV_EXTRACT_KE}
      </h1>
      <div className="-mx-1 flex flex-wrap lg:-mx-4">
        {adminExtracts.map((item) => {
          return <AdminExtractCard key={item.id} adminExtract={item} />
        })}
      </div> */}
      <div
        id="carouselExampleIndicators"
        className="slide carousel relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          {adminExtracts.map((item) => {
            return <AdminExtractCard key={item.id} adminExtract={item} />
          })}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
