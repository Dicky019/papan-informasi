import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const keorganisasianExtracts: QueryResolvers['keorganisasianExtracts'] =
  () => {
    return db.keorganisasianExtract.findMany()
  }

export const keorganisasianExtract: QueryResolvers['keorganisasianExtract'] = ({
  id,
}) => {
  return db.keorganisasianExtract.findUnique({
    where: { id },
  })
}

export const createKeorganisasianExtract: MutationResolvers['createKeorganisasianExtract'] =
  ({ input }) => {
    return db.keorganisasianExtract.create({
      data: input,
    })
  }

export const updateKeorganisasianExtract: MutationResolvers['updateKeorganisasianExtract'] =
  ({ id, input }) => {
    return db.keorganisasianExtract.update({
      data: input,
      where: { id },
    })
  }

export const deleteKeorganisasianExtract: MutationResolvers['deleteKeorganisasianExtract'] =
  ({ id }) => {
    return db.keorganisasianExtract.delete({
      where: { id },
    })
  }
