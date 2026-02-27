import type { FestivalDay } from "../timetable.types"

export default function DayTabs({
  days,
  activeIndex,
  onChange,
}: {
  days: FestivalDay[]
  activeIndex: number
  onChange: (idx: number) => void
}) {
  return (
    <div className="relative mt-3">
      {/* 탭들 */}
      <div className="grid grid-cols-3 items-center pb-3">
        {days.map((d, idx) => {
          const active = idx === activeIndex
          return (
            <button
              key={d.key}
              onClick={() => onChange(idx)}
              className={[
                "relative justify-self-center",
                "px-3 py-2", // ✅ 터치영역 확보
                "text-xl tracking-wide transition-colors",
                active ? "text-blue-700 font-extrabold" : "text-gray-400 hover:text-gray-600",
              ].join(" ")}
            >
              {/* 선택 배경 하이라이트(레이아웃 영향 없음) */}
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute -inset-x-2 -inset-y-1 rounded-xl bg-blue-50"
                  style={{ zIndex: -1 }}
                />
              )}

              {/* 커진 느낌은 scale로 (레이아웃 영향 없음) */}
              <span
                className={
                  active
                    ? "inline-block scale-[1.06] transition-transform"
                    : "inline-block transition-transform"
                }
              >
                {d.key}
              </span>
            </button>
          )
        })}
      </div>

      {/* 베이스 라인 */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200" />

      {/* 밑줄 */}
      <div
        className="absolute bottom-0 h-[3px] rounded-full bg-blue-700 transition-[left] duration-200"
        style={{
          left: `${(100 / days.length) * activeIndex}%`,
          width: `${100 / days.length}%`,
        }}
      />
    </div>
  )
}