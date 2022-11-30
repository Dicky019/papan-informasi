// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="ProgramKerja Extracts" titleTo="programKerjaExtracts" buttonLabel="New Program KerjaExtract" buttonTo="newProgramKerjaExtract">
        <Route path="/program-kerja-extracts/new" page={ProgramKerjaExtractNewProgramKerjaExtractPage} name="newProgramKerjaExtract" />
        <Route path="/program-kerja-extracts/{id:Int}/edit" page={ProgramKerjaExtractEditProgramKerjaExtractPage} name="editProgramKerjaExtract" />
        <Route path="/program-kerja-extracts/{id:Int}" page={ProgramKerjaExtractProgramKerjaExtractPage} name="programKerjaExtract" />
        <Route path="/program-kerja-extracts" page={ProgramKerjaExtractProgramKerjaExtractsPage} name="programKerjaExtracts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Keorganisasian Extracts" titleTo="keorganisasianExtracts" buttonLabel="New Keorganisasian Extract" buttonTo="newKeorganisasianExtract">
        <Route path="/keorganisasian-extracts/new" page={KeorganisasianExtractNewKeorganisasianExtractPage} name="newKeorganisasianExtract" />
        <Route path="/keorganisasian-extracts/{id:Int}/edit" page={KeorganisasianExtractEditKeorganisasianExtractPage} name="editKeorganisasianExtract" />
        <Route path="/keorganisasian-extracts/{id:Int}" page={KeorganisasianExtractKeorganisasianExtractPage} name="keorganisasianExtract" />
        <Route path="/keorganisasian-extracts" page={KeorganisasianExtractKeorganisasianExtractsPage} name="keorganisasianExtracts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Pemateri Extract" titleTo="pemateriExtracts" buttonLabel="Pemateri Extract" buttonTo="newPemateriExtract">
        <Route path="/pemateri-extracts/new" page={PemateriExtractNewPemateriExtractPage} name="newPemateriExtract" />
        <Route path="/pemateri-extracts/{id:Int}/edit" page={PemateriExtractEditPemateriExtractPage} name="editPemateriExtract" />
        <Route path="/pemateri-extracts/{id:Int}" page={PemateriExtractPemateriExtractPage} name="pemateriExtract" />
        <Route path="/pemateri-extracts" page={PemateriExtractPemateriExtractsPage} name="pemateriExtracts" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Admin Extract" titleTo="adminExtracts" buttonLabel="Admin Extract" buttonTo="newAdminExtract">
        <Route path="/admin-extracts/new" page={AdminExtractNewAdminExtractPage} name="newAdminExtract" />
        <Route path="/admin-extracts/{id:Int}/edit" page={AdminExtractEditAdminExtractPage} name="editAdminExtract" />
        <Route path="/admin-extracts/{id:Int}" page={AdminExtractAdminExtractPage} name="adminExtract" />
        <Route path="/admin-extracts" page={AdminExtractAdminExtractsPage} name="adminExtracts" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
