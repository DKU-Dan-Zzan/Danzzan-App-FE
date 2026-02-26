import type { ReactNode } from "react"

export default function Pill({
  icon,
  text,
  tone = "blue",
}: {
  icon: ReactNode
  text: string
  tone?: "blue" | "gray"
}) {
  const cls =
    tone === "blue"
      ? "bg-blue-50 text-blue-700 border-blue-100"
      : "bg-gray-50 text-gray-700 border-gray-200"

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${cls}`}>
      <span aria-hidden="true">{icon}</span>
      <span className="truncate">{text}</span>
    </span>
  )
}