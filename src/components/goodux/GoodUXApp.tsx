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
        <div className="mb-4">
          <h1 className="font-bold text-white mb-2" style={{ fontSize: '40px' }}>Good UX</h1>
          <p className="text-white" style={{ fontSize: '16px' }}>
            An appreciation board for all the little things I've come across in life and on the internet that I thought were good UX.
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
