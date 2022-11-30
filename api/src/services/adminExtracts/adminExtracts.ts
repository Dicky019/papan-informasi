import * as Filestack from 'filestack-js'
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

export const deleteAdminExtract: MutationResolvers['deleteAdminExtract'] =
  async ({ id }) => {
    const client = Filestack.init('AhzFHaU2SoWPqGGX5OT4gz')

    const adminExtract = await db.adminExtract.findUnique({ where: { id } })

    // The `security.handle` is the unique part of the Filestack file's url.
    const handle = adminExtract.image_url.split('/').pop()

    const security = Filestack.getSecurity(
      {
        // We set `expiry` at `now() + 5 minutes`.
        expiry: new Date().getTime(),
        handle,
        call: ['remove'],
      },
      'VH6YPVL2UVAHLFUYZY5PD6ED54'
    )

    await client.remove(handle, security)

    return db.adminExtract.delete({
      where: { id },
    })
  }
