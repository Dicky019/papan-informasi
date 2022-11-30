import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const adminExtracts: QueryResolvers['adminExtracts'] = () => {
  return db.adminExtract.findMany()
}

export const adminExtract: QueryResolvers['adminExtract'] = ({ id }) => {
  return db.adminExtract.findUnique({
    where: { id },
  })
}

export const createAdminExtract: MutationResolvers['createAdminExtract'] = ({
  input,
}) => {
  return db.adminExtract.create({
    data: input,
  })
}

export const updateAdminExtract: MutationResolvers['updateAdminExtract'] = ({
  id,
  input,
}) => {
  return db.adminExtract.update({
    data: input,
    where: { id },
  })
}

export const deleteAdminExtract: MutationResolvers['deleteAdminExtract'] = ({
  id,
}) => {
  return db.adminExtract.delete({
    where: { id },
  })
}
