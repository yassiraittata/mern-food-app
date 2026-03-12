import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import Layout from "./layouts/Layout.tsx"

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/user-profile" element={<div>User Profile</div>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}

export default AppRoutes
