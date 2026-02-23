import { Megaphone  } from "lucide-react"

export interface EmergencyNoticeData {
  id: number
  title: string
  content: string
  createdAt?: string
}

interface Props {
  notice: EmergencyNoticeData | null
}

const EmergencyNotice = ({ notice }: Props) => {
  if (!notice) return null

  return (
    <section className="px-4 mt-4">
      <div
        className="
          relative
          flex items-start gap-3
          rounded-[20px]
          px-4 py-4
          bg-blue-50
          border border-blue-100
        "
      >
        {/* 왼쪽 포인트 바 */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-[20px]" />

        {/* 오른쪽 상단 시간 */}
        {notice.createdAt && (
          <div className="absolute top-3 right-4 text-[11px] text-gray-500">
            {notice.createdAt}
          </div>
        )}

        <div className="flex items-start gap-3 ml-2">
          {/* 아이콘 */}
          <div className="mt-0.5 text-primary">
            <Megaphone size={20} strokeWidth={2.2} />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-col pr-16">
            <span className="font-semibold text-[14px] text-primary">
              {notice.title}
            </span>

            <span className="mt-1 text-[13px] leading-relaxed text-gray-700">
              {notice.content}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyNotice
