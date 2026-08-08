import { useEffect } from 'react'
import type { UXExample } from '../../data/ux-examples'

interface ModalProps {
  example: UXExample
  onClose: () => void
}

export default function Modal({ example, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl w-full mx-4 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl max-h-[95vh] flex flex-col relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full flex-shrink-0 max-h-[50vh] sm:max-h-[60vh]">
            {example.mediaType === 'video' || example.mediaType === 'gif' ? (
              <video
                src={example.media}
                loop
                muted
                playsInline
                autoPlay
                className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
              />
            ) : (
              <div className="relative w-full min-h-[240px] sm:min-h-[400px]">
                <img
                  src={example.media}
                  alt={example.name}
                  className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 lg:p-10 border-t border-gray-800 flex-1 overflow-y-auto">
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-1 sm:mb-2">
                {example.name}
              </h2>
              {example.company && (
                <p className="text-gray-400 font-medium text-sm sm:text-base">
                  {example.company}
                </p>
              )}
              {example.date && (
                <span className="text-gray-500 text-xs sm:text-sm mt-1 block">
                  {example.date}
                </span>
              )}
            </div>

            <div className="prose prose-invert max-w-none">
              <p
                className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: example.description }}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-gray-500 text-sm">
          Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd> or click outside to close
        </div>
      </div>
    </div>
  )
}
