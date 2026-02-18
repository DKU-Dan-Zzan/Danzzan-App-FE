import { NavLink } from "react-router-dom"
import { Home, Megaphone, Clock, Map, Package } from "lucide-react"

const navItems = [
  { to: "/notice", icon: Megaphone, label: "공지" },
  { to: "/timetable", icon: Clock, label: "타임테이블" },
  { to: "/", icon: Home, label: "홈", isCenter: true },
  { to: "/map", icon: Map, label: "부스맵" },
  { to: "/lost-item", icon: Package, label: "분실물" },
]

const BottomNav = () => {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0
        max-w-[430px] mx-auto
        h-[84px]
        pb-[env(safe-area-inset-bottom)]
        z-50
      "
    >
      {/* 바탕 + notch (SVG로 정확한 곡선) */}
      <div
        className="
          absolute inset-0
          bg-white/95 backdrop-blur-xl
          border-t border-gray-200
          shadow-[0_-8px_24px_rgba(0,0,0,0.06)]
          rounded-t-2xl
        "
      >
        {/* notch 컷아웃 */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 -top-[1px]"
          width="160"
          height="56"
          viewBox="0 0 160 56"
          fill="none"
          aria-hidden="true"
        >
          {/* 바 색상과 동일하게 채우고, 아래로 파인 곡선을 만든다 */}
          <path
            d="
              M0 0
              H160
              V56
              H110
              C103 56 98 52 96 46
              C92 33 87 22 80 22
              C73 22 68 33 64 46
              C62 52 57 56 50 56
              H0
              Z
            "
            fill="white"
          />
        </svg>
      </div>

      {/* 실제 아이템 배치 */}
      <div className="relative h-full flex justify-around items-center">
        {navItems.map(({ to, icon: Icon, label, isCenter }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `
              relative flex flex-col items-center justify-center
              text-xs transition-all duration-200
              ${isActive ? "text-blue-600" : "text-gray-400"}
              `
            }
          >
            {({ isActive }) => (
              <>
                {isCenter ? (
                  <div
                    className={`
                      absolute -top-9
                      w-[72px] h-[72px]
                      rounded-full
                      flex items-center justify-center
                      transition-all duration-200
                      shadow-[0_14px_28px_rgba(0,0,0,0.16)]
                      ${isActive
                        ? "bg-blue-600 text-white scale-[1.03]"
                        : "bg-white text-gray-700 border border-gray-100"}
                    `}
                    style={{ zIndex: 60 }}
                  >
                    <Icon size={30} strokeWidth={2.25} />
                  </div>
                ) : (
                  <>
                    <Icon size={22} strokeWidth={2} />
                    {isActive && (
                      <div className="absolute -bottom-3 w-5 h-1 rounded-full bg-blue-600" />
                    )}
                    <span className="mt-2">{label}</span>
                  </>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default BottomNav
