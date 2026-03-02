function formatKoreanDate(dateStr: string) {
  const d = new Date(dateStr)
  const y = d.getFullYear()
  const m = d.getMonth() + 1
  const day = d.getDate()
  const weekday = ["일", "월", "화", "수", "목", "금", "토"][d.getDay()]
  return `${y}년 ${m}월 ${day}일 (${weekday})`
}

export default function DateChip({ date }: { date: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      {formatKoreanDate(date)}
    </div>
  )
}