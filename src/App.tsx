import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import AdminLayout from './components/layout/AdminLayout'

import Home from './routes/home/Home'
import Notice from './routes/notice/Notice'
import Timetable from './routes/timetable/Timetable'
import BoothMap from "./routes/boothmap/BoothMap";
import LostItem from "./routes/lostitem/LostItem";

import Admin from "./routes/admin/Admin";

function App() {
  return (
    <Routes>
      {/* 일반 사용자: 헤더/바텀네비 적용 */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/map" element={<BoothMap />} />
        <Route path="/lost-item" element={<LostItem />} />
        <Route path="/admin" element={<Admin />} />
      </Route>

      {/* admin/* : 헤더/바텀네비 미적용 */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        {/* 필요하면 더 추가 */}
      </Route>
    </Routes>
  )
}

export default App
