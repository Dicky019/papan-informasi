export const schema = gql`
  type AdminExtract {
    id: Int!
    name: String!
    nra: String!
    image_url: String!
  }

  type Query {
    adminExtracts: [AdminExtract!]! @requireAuth
    adminExtract(id: Int!): AdminExtract @requireAuth
  }

  input CreateAdminExtractInput {
    name: String!
    nra: String!
    image_url: String!
  }

  input UpdateAdminExtractInput {
    name: String
    nra: String
    image_url: String
  }

  type Mutation {
    createAdminExtract(input: CreateAdminExtractInput!): AdminExtract!
      @requireAuth
    updateAdminExtract(
      id: Int!
      input: UpdateAdminExtractInput!
    ): AdminExtract! @requireAuth
    deleteAdminExtract(id: Int!): AdminExtract! @requireAuth
  }
`
