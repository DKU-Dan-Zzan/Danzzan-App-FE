import { Outlet } from 'react-router-dom'
import Header from './Header'
import BottomNav from './BottomNav'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-white">
      <Header />

      <main className="flex-1 overflow-y-auto pb-[70px]">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  )
}

export default Layout