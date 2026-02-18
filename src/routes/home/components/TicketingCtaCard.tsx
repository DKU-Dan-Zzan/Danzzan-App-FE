import { ExternalLink, Ticket } from "lucide-react"

export type TicketingCtaData = {
  title: string
  subtitle: string
  href?: string
  badgeText?: string
  isOpen?: boolean
}

type Props = {
  data: TicketingCtaData
}

export default function TicketingCtaCard({ data }: Props) {
  const {
    title,
    subtitle,
    href,
    badgeText = "축제 티켓팅",
    isOpen = true,
  } = data

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href || !isOpen) {
      e.preventDefault()
      return
    }
  }

  return (
    <section className="px-4 mt-4">
      <a
        href={href ?? "#"}
        onClick={handleClick}
        className={`
          group block rounded-[22px] p-[1px]
          transition active:scale-[0.99]
          shadow-[0_14px_36px_rgba(0,0,0,0.10)]
          ${!isOpen ? "opacity-70 cursor-not-allowed" : ""}
        `}
      >
        <div className="rounded-[22px] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 p-[1px]">
          <div
            className="
              relative rounded-[21px]
              px-5 py-4
              flex items-center justify-between gap-4
              text-white
              bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600
              overflow-hidden
            "
          >
            {/* 은은한 글로우 */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-black/10 blur-2xl pointer-events-none" />

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-white/90">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1">
                  <Ticket size={14} />
                  {badgeText}
                </span>
              </div>

              <div className="mt-2 text-[18px] font-extrabold tracking-tight">
                {title}
              </div>

              <div className="mt-1 text-[13px] text-white/85">
                {subtitle}
              </div>
            </div>

            <div
              className="
                shrink-0 h-11 w-11 rounded-2xl
                bg-white/15 border border-white/20
                flex items-center justify-center
                group-hover:bg-white/20 transition
              "
            >
              <ExternalLink size={20} />
            </div>
          </div>
        </div>
      </a>
    </section>
  )
}
