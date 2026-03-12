import { Routes, Route } from "react-router-dom"
import HomePage from "@/pages/HomePage.tsx"
import Layout from "@/layouts/Layout.tsx"
import PrivacyPage from "@/pages/PrivacyPage"
import TermPage from "@/pages/TermPage"

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
      <Route
        path="/privacy"
        element={
          <Layout>
            <PrivacyPage />
          </Layout>
        }
      />
      <Route
        path="/term-of-use"
        element={
          <Layout>
            <TermPage />
          </Layout>
        }
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}

export default AppRoutes
