import PosterCarousel, { type Poster } from "./components/PosterCarousel"

const dummyPosters: Poster[] = [
  { id: "p1", imageUrl: "/posters/dummy1.jpg", alt: "2026 단국축제 포스터 1" },
  { id: "p2", imageUrl: "/posters/dummy2.jpg", alt: "2026 단국축제 포스터 2" },
  { id: "p3", imageUrl: "/posters/dummy3.jpg", alt: "2026 단국축제 포스터 3" },
  { id: "p4", imageUrl: "/posters/dummy4.jpg", alt: "2026 단국축제 포스터 4" },
]

function Home() {
  return (
    <div className="pb-[100px]">
      <PosterCarousel
        posters={dummyPosters}
      />

      {/* 아래 홈 섹션들... */}
    </div>
  )
}

export default Home;