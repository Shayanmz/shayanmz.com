import { useState } from 'react'
import { uxExamples, type UXExample } from '../../data/ux-examples'
import Header from './Header'
import MasonryGrid from './MasonryGrid'
import Modal from './Modal'

export default function GoodUXApp() {
  const [selectedExample, setSelectedExample] = useState<UXExample | null>(null)

  return (
    <div className="min-h-screen bg-[#272727] text-white">
      <Header />

      {/* 40px top matches the gap every other page has below the nav */}
      <div className="mx-auto px-6 sm:px-12 lg:px-24" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        {/* Title + intro match the rest of the site: #e1e1e1, 40px/40px
            title, 16px/24px body — not Tailwind's white and 1.5em leading. */}
        <div className="mb-4">
          <h1
            className="font-bold mb-2"
            style={{ fontSize: '40px', lineHeight: '40px', color: '#e1e1e1' }}
          >
            Good UX
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '24px', color: '#e1e1e1' }}>
            An appreciation board for all the little things I've come across in life and on the internet that I thought were well done.
          </p>
        </div>

        <div className="border-t mb-4" style={{ borderColor: '#373737' }}></div>

        <MasonryGrid
          examples={uxExamples}
          onExampleClick={setSelectedExample}
        />
      </div>

      {selectedExample && (
        <Modal
          example={selectedExample}
          onClose={() => setSelectedExample(null)}
        />
      )}
    </div>
  )
}
