import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 
    max-w-[430px] mx-auto 
    h-[70px] 
    flex justify-around items-center 
    border-t bg-white 
    pb-[env(safe-area-inset-bottom)]">
      <NavLink to="/notice">공지</NavLink>
      <NavLink to="/timetable">공연</NavLink>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/map">부스맵</NavLink>
      <NavLink to="/lost-item">분실물</NavLink>
    </nav>
  )
}

export default BottomNav
