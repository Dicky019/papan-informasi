export const schema = gql`
  type SuratMasukTools {
    id: Int!
    name: String!
    tanggalMasuk: String!
    descripsi: String!
    image_url: String!
  }

  type Query {
    suratMasukToolses: [SuratMasukTools!]! @requireAuth
    suratMasukTools(id: Int!): SuratMasukTools @requireAuth
  }

  input CreateSuratMasukToolsInput {
    name: String!
    tanggalMasuk: String!
    descripsi: String!
    image_url: String!
  }

  input UpdateSuratMasukToolsInput {
    name: String
    tanggalMasuk: String
    descripsi: String
    image_url: String
  }

  type Mutation {
    createSuratMasukTools(input: CreateSuratMasukToolsInput!): SuratMasukTools!
      @requireAuth
    updateSuratMasukTools(
      id: Int!
      input: UpdateSuratMasukToolsInput!
    ): SuratMasukTools! @requireAuth
    deleteSuratMasukTools(id: Int!): SuratMasukTools! @requireAuth
  }
`
