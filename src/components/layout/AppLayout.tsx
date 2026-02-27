import { Outlet } from "react-router-dom"
import Header from "./Header"
import BottomNav from "./BottomNav"

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[430px] mx-auto flex flex-col min-h-full">
        <Header />

        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>

        <BottomNav />
      </div>
    </div>
  )
}

export default Layout