export const schema = gql`
  type PemateriExtract {
    id: Int!
    name: String!
    nra: String!
    image_url: String!
    hari: Hari!
    konsentrasi: Konsentrasi!
  }

  enum Hari {
    Senin
    Selasa
    Rabu
    Kamis
    Jumat
    Sabtu
  }

  enum Konsentrasi {
    Program
    Jaringan
    Hardware
    MultiMedia
  }

  type Query {
    pemateriExtracts: [PemateriExtract!]! @requireAuth
    pemateriExtract(id: Int!): PemateriExtract @requireAuth
  }

  input CreatePemateriExtractInput {
    name: String!
    nra: String!
    image_url: String!
    hari: Hari!
    konsentrasi: Konsentrasi!
  }

  input UpdatePemateriExtractInput {
    name: String
    nra: String
    image_url: String
    hari: Hari
    konsentrasi: Konsentrasi
  }

  type Mutation {
    createPemateriExtract(input: CreatePemateriExtractInput!): PemateriExtract!
      @requireAuth
    updatePemateriExtract(
      id: Int!
      input: UpdatePemateriExtractInput!
    ): PemateriExtract! @requireAuth
    deletePemateriExtract(id: Int!): PemateriExtract! @requireAuth
  }
`
