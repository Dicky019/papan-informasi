import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const infentarises: QueryResolvers['infentarises'] = () => {
  return db.infentaris.findMany()
}

export const infentaris: QueryResolvers['infentaris'] = ({ id }) => {
  return db.infentaris.findUnique({
    where: { id },
  })
}

export const createInfentaris: MutationResolvers['createInfentaris'] = ({
  input,
}) => {
  return db.infentaris.create({
    data: input,
  })
}

export const updateInfentaris: MutationResolvers['updateInfentaris'] = ({
  id,
  input,
}) => {
  return db.infentaris.update({
    data: input,
    where: { id },
  })
}

export const deleteInfentaris: MutationResolvers['deleteInfentaris'] = ({
  id,
}) => {
  return db.infentaris.delete({
    where: { id },
  })
}
