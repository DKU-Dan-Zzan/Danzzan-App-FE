import PosterCarousel, { type Poster } from "./components/PosterCarousel"
import EmergencyNotice, { type EmergencyNoticeData } from "./components/EmergencyNotice"

const dummyPosters: Poster[] = [
  { id: "p1", imageUrl: "/posters/dummy1.jpg", alt: "2026 단국축제 포스터 1" },
  { id: "p2", imageUrl: "/posters/dummy2.jpg", alt: "2026 단국축제 포스터 2" },
  { id: "p3", imageUrl: "/posters/dummy3.jpg", alt: "2026 단국축제 포스터 3" },
  { id: "p4", imageUrl: "/posters/dummy4.jpg", alt: "2026 단국축제 포스터 4" },
]

const mockEmergencyNotice: EmergencyNoticeData = {
  id: 1,
  title: "긴급 공지",
  content:
    "비가 오고 있으니 안전에 유의하시고, 단국존 입장 시 우산 반입이 어려우니 우비를 지참하세요.",
  isActive: true,
}

function Home() {
  return (
    <div className="pb-[100px]">
      <PosterCarousel
        posters={dummyPosters}
      />

      <EmergencyNotice notice={mockEmergencyNotice} />

      {/* 아래 홈 섹션들... */}
    </div>
  )
}

export default Home;