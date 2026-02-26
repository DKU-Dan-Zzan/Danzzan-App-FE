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
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-1 flex">
      {days.map((d, idx) => {
        const active = idx === activeIndex
        return (
          <button
            key={d.key}
            onClick={() => onChange(idx)}
            className={[
              "flex-1 h-11 rounded-xl text-sm font-semibold transition",
              active
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-800",
            ].join(" ")}
          >
            {d.key}
          </button>
        )
      })}
    </div>
  )
}