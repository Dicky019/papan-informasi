import type { AdminExtractsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AdminExtractCard from '../AdminExtractCard/AdminExtractCard'

export const QUERY = gql`
  query AdminExtractsQuery {
    adminExtracts {
      id
      name
      nra
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
    <div className="container mx-auto  mb-8 md:px-12">
      <h1 className="text-header my-4 text-gray-800">
        Admin EXTRACT {process.env.REDWOOD_ENV_EXTRACT_KE}
      </h1>
      <div className="-mx-1 flex flex-wrap lg:-mx-4">
        {adminExtracts.map((item) => {
          return <AdminExtractCard key={item.id} adminExtract={item} />
        })}
      </div>
    </div>
  )
}
