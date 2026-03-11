import Header from "@/components/Header"

type props = {
  children: React.ReactNode
}

function Layout({ children }: props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  )
}

export default Layout
