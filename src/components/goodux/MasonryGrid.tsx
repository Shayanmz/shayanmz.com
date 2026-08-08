import { useState, useRef, useEffect } from 'react'
import type { UXExample } from '../../data/ux-examples'

interface MasonryGridProps {
  examples: UXExample[]
  onExampleClick: (example: UXExample) => void
}

function LazyMedia({ example, onLoad }: { example: UXExample; onLoad?: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
      }
    )

    if (mediaRef.current) {
      observer.observe(mediaRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  return (
    <div ref={mediaRef} className="relative aspect-[4/3] w-full overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}

      {isInView && (
        <>
          {example.mediaType === 'video' || example.mediaType === 'gif' ? (
            <video
              src={example.media}
              loop
              muted
              playsInline
              autoPlay
              preload="metadata"
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={handleLoad}
            />
          ) : (
            <img
              src={example.media}
              alt={example.name}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleLoad}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          )}
        </>
      )}
    </div>
  )
}

export default function MasonryGrid({ examples, onExampleClick }: MasonryGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [loadedCount, setLoadedCount] = useState(0)

  return (
    <>
      <div className="grid gap-4 auto-rows-fr" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(360px, 100%), 1fr))' }}>
        {examples.map((example) => (
          <div
            key={example.id}
            className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-[1.02]"
            onClick={() => onExampleClick(example)}
            onMouseEnter={() => setHoveredId(example.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              contentVisibility: 'auto',
            }}
          >
            <LazyMedia
              example={example}
              onLoad={() => setLoadedCount((prev) => prev + 1)}
            />

            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredId === example.id ? 'opacity-40' : 'opacity-0'
              }`}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
              <h3 className="text-white font-medium text-sm mb-1">{example.name}</h3>
              {example.company && (
                <p className="text-gray-400 text-xs">{example.company}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
