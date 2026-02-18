import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="min-h-dvh">
      <Outlet />
    </div>
  )
}

export default AdminLayout
