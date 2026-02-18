import { AlertCircle } from "lucide-react"

export interface EmergencyNoticeData {
  id: number
  title: string
  content: string
  isActive: boolean
}

interface Props {
  notice: EmergencyNoticeData | null
}

const EmergencyNotice = ({ notice }: Props) => {
  if (!notice || !notice.isActive) return null

  return (
    <section className="px-4 mt-4">
      <div
        className="
          flex items-start gap-3
          bg-red-50
          text-red-700
          rounded-2xl
          px-4 py-4
          shadow-sm
        "
      >
        <div className="mt-0.5">
          <AlertCircle size={20} strokeWidth={2.2} />
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-sm">
            {notice.title}
          </span>
          <span className="text-sm leading-relaxed mt-1">
            {notice.content}
          </span>
        </div>
      </div>
    </section>
  )
}

export default EmergencyNotice
