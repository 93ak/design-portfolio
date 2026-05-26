import { useParams } from 'react-router-dom'
import { posters } from '../assets/portfolioData'

export default function PosterDetails() {
  const { id } = useParams()

  const poster = posters.find((p) => p.id === id)

  if (!poster) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000819] text-white">
        Poster not found.
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-[#000819] px-8 py-20">
      <div className="max-w-2xl mx-auto">
        <img
          src={poster.image}
          alt={poster.title}
          className="w-full rounded-2xl"
        />

        <div className="mt-8">
          <h1 className="font-brand text-4xl text-white">
            {poster.title}
          </h1>

          <p className="text-white/60 mt-4 leading-relaxed">
            {poster.description}
          </p>
        </div>
      </div>
    </section>
  )
}