import type { FindInfentarisById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Infentaris from 'src/components/Infentaris/Infentaris'

export const QUERY = gql`
  query FindInfentarisById($id: Int!) {
    infentaris: infentaris(id: $id) {
      id
      name
      image_url
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Infentaris not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ infentaris }: CellSuccessProps<FindInfentarisById>) => {
  return <Infentaris infentaris={infentaris} />
}
