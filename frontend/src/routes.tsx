import { Routes, Route } from "react-router-dom"
import Layout from "@/layouts/layout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home</Layout>} />
      <Route path="/user-profile" element={<div>User Profile</div>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}

export default AppRoutes
