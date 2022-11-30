export const schema = gql`
  type ProgramKerjaExtract {
    id: Int!
    nameProker: String!
    persenProker: Float!
    programKerja: ProgramKerja!
  }

  enum ProgramKerja {
    Keorganisasian
    PublicAndRelation
    ToolsAndProperties
    Keilmuan
  }

  type Query {
    programKerjaExtracts: [ProgramKerjaExtract!]! @requireAuth
    programKerjaExtract(id: Int!): ProgramKerjaExtract @requireAuth
  }

  input CreateProgramKerjaExtractInput {
    nameProker: String!
    persenProker: Float!
    programKerja: ProgramKerja!
  }

  input UpdateProgramKerjaExtractInput {
    nameProker: String
    persenProker: Float
    programKerja: ProgramKerja
  }

  type Mutation {
    createProgramKerjaExtract(
      input: CreateProgramKerjaExtractInput!
    ): ProgramKerjaExtract! @requireAuth
    updateProgramKerjaExtract(
      id: Int!
      input: UpdateProgramKerjaExtractInput!
    ): ProgramKerjaExtract! @requireAuth
    deleteProgramKerjaExtract(id: Int!): ProgramKerjaExtract! @requireAuth
  }
`
