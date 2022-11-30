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
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="AdminExtracts" titleTo="adminExtracts" buttonLabel="New AdminExtract" buttonTo="newAdminExtract">
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
