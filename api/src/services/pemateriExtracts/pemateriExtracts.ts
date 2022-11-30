import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const pemateriExtracts: QueryResolvers['pemateriExtracts'] = () => {
  return db.pemateriExtract.findMany()
}

export const pemateriExtract: QueryResolvers['pemateriExtract'] = ({ id }) => {
  return db.pemateriExtract.findUnique({
    where: { id },
  })
}

export const createPemateriExtract: MutationResolvers['createPemateriExtract'] =
  ({ input }) => {
    return db.pemateriExtract.create({
      data: input,
    })
  }

export const updatePemateriExtract: MutationResolvers['updatePemateriExtract'] =
  ({ id, input }) => {
    return db.pemateriExtract.update({
      data: input,
      where: { id },
    })
  }

export const deletePemateriExtract: MutationResolvers['deletePemateriExtract'] =
  ({ id }) => {
    return db.pemateriExtract.delete({
      where: { id },
    })
  }
