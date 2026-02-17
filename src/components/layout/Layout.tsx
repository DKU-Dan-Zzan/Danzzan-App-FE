import { Outlet } from 'react-router-dom'
import Header from './Header'
import BottomNav from './BottomNav'
import '../../App.css'

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  )
}

export default Layout