import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const programKerjaExtracts: QueryResolvers['programKerjaExtracts'] =
  () => {
    return db.programKerjaExtract.findMany()
  }

export const programKerjaExtract: QueryResolvers['programKerjaExtract'] = ({
  id,
}) => {
  return db.programKerjaExtract.findUnique({
    where: { id },
  })
}

export const createProgramKerjaExtract: MutationResolvers['createProgramKerjaExtract'] =
  ({ input }) => {
    return db.programKerjaExtract.create({
      data: input,
    })
  }

export const updateProgramKerjaExtract: MutationResolvers['updateProgramKerjaExtract'] =
  ({ id, input }) => {
    return db.programKerjaExtract.update({
      data: input,
      where: { id },
    })
  }

export const deleteProgramKerjaExtract: MutationResolvers['deleteProgramKerjaExtract'] =
  ({ id }) => {
    return db.programKerjaExtract.delete({
      where: { id },
    })
  }
