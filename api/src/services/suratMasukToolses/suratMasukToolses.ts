import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const suratMasukToolses: QueryResolvers['suratMasukToolses'] = () => {
  return db.suratMasukTools.findMany()
}

export const suratMasukTools: QueryResolvers['suratMasukTools'] = ({ id }) => {
  return db.suratMasukTools.findUnique({
    where: { id },
  })
}

export const createSuratMasukTools: MutationResolvers['createSuratMasukTools'] =
  ({ input }) => {
    return db.suratMasukTools.create({
      data: input,
    })
  }

export const updateSuratMasukTools: MutationResolvers['updateSuratMasukTools'] =
  ({ id, input }) => {
    return db.suratMasukTools.update({
      data: input,
      where: { id },
    })
  }

export const deleteSuratMasukTools: MutationResolvers['deleteSuratMasukTools'] =
  ({ id }) => {
    return db.suratMasukTools.delete({
      where: { id },
    })
  }
