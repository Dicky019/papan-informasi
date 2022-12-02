export const schema = gql`
  type Infentaris {
    id: Int!
    name: String!
    image_url: String!
    value: Int!
  }

  type Query {
    infentarises: [Infentaris!]! @requireAuth
    infentaris(id: Int!): Infentaris @requireAuth
  }

  input CreateInfentarisInput {
    name: String!
    image_url: String!
    value: Int!
  }

  input UpdateInfentarisInput {
    name: String
    image_url: String
    value: Int
  }

  type Mutation {
    createInfentaris(input: CreateInfentarisInput!): Infentaris! @requireAuth
    updateInfentaris(id: Int!, input: UpdateInfentarisInput!): Infentaris!
      @requireAuth
    deleteInfentaris(id: Int!): Infentaris! @requireAuth
  }
`
