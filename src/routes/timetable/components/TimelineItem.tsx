import { useState } from "react"
import type { Performance } from "../timetable.types"

export default function TimelineItem({
  item,
  isLast,
}: {
  item: Performance
  isLast: boolean
}) {
  const [open, setOpen] = useState(false)
  const timeRange = `${item.startTime} ~ ${item.endTime}`

  return (
    <li className="relative flex gap-4">
      {/* 좌측 시간 */}
      <div className="w-16 flex flex-col items-center">
        <div className="text-[16px] font-extrabold tabular-nums text-blue-600">
          {item.startTime}
        </div>
      </div>

      {/* 라인 */}
      <div className="relative w-6 flex justify-center">
        <div className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-600" />
        {!isLast && <div className="absolute top-4 bottom-0 w-px bg-gray-200" />}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 pb-6">
        {/* 이미지 (히어로 느낌) */}
        <div className="w-40 overflow-hidden rounded-3xl bg-gray-100">
          <img
            src={item.artistImage ?? "/placeholder-artist.png"}
            alt=""
            className="h-32 w-40 object-cover"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src =
                "/placeholder-artist.png"
            }}
          />
        </div>

        {/* 텍스트 영역 */}
        <div className="mt-3">
          <div className="text-lg font-extrabold text-gray-900">
            {item.artistName}
          </div>

          <div className="mt-1 text-sm text-gray-500 tabular-nums">
            {timeRange}
            {item.stage && (
              <span className="ml-2">· {item.stage}</span>
            )}
          </div>

          {item.artistDescription && (
            <div className="mt-2">
              <p
                className={[
                  "text-sm text-gray-600 leading-relaxed",
                  open ? "" : "max-h-10 overflow-hidden",
                ].join(" ")}
              >
                {item.artistDescription}
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}