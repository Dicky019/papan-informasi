export const schema = gql`
  type KeorganisasianExtract {
    id: Int!
    name: String!
    nra: String!
    image_url: String!
    hari: Hari!
    jenisKegiatan: JenisKegiatan!
  }

  enum Hari {
    Senin
    Selasa
    Rabu
    Kamis
    Jumat
    Sabtu
  }

  enum JenisKegiatan {
    Pembelajaran
    Nginap
  }

  type Query {
    keorganisasianExtracts: [KeorganisasianExtract!]! @requireAuth
    keorganisasianExtract(id: Int!): KeorganisasianExtract @requireAuth
  }

  input CreateKeorganisasianExtractInput {
    name: String!
    nra: String!
    image_url: String!
    hari: Hari!
    jenisKegiatan: JenisKegiatan!
  }

  input UpdateKeorganisasianExtractInput {
    name: String
    nra: String
    image_url: String
    hari: Hari
    jenisKegiatan: JenisKegiatan
  }

  type Mutation {
    createKeorganisasianExtract(
      input: CreateKeorganisasianExtractInput!
    ): KeorganisasianExtract! @requireAuth
    updateKeorganisasianExtract(
      id: Int!
      input: UpdateKeorganisasianExtractInput!
    ): KeorganisasianExtract! @requireAuth
    deleteKeorganisasianExtract(id: Int!): KeorganisasianExtract! @requireAuth
  }
`
