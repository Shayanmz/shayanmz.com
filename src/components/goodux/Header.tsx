import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false)
    }, 300)
  }

  return (
    <>
      <header className="bg-[#272727]" style={{ height: '56px' }}>
        {/* Desktop Navigation — same treatment as the rest of the site:
            pointer cursor, and hover fades to 70% while scaling 1.1 over
            0.1s. (These links previously set cursor-default, which is why
            hovering them felt dead.) */}
        <nav className="hidden md:flex text-base justify-end items-center h-full" style={{ paddingRight: '44px', gap: '24px' }}>
          <a href="/" className="goodux-navlink" style={{ color: '#BEBEBE' }}>
            Home
          </a>
          <a href="/resume" className="goodux-navlink" style={{ color: '#BEBEBE' }}>
            Resume
          </a>
          <a href="/blog" className="goodux-navlink" style={{ color: '#BEBEBE' }}>
            Blog
          </a>
          <span className="goodux-navlink" style={{ color: '#ffffff', fontWeight: 600 }}>
            Good UX
          </span>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex justify-end items-center h-full" style={{ paddingRight: '20px' }}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-[#272727] z-50 md:hidden ${isClosing ? 'animate-slide-up' : 'animate-slide-down'}`}
        >
          <button
            onClick={handleClose}
            className="absolute text-white p-2"
            style={{ top: '8px', right: '16px' }}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <nav className="flex flex-col" style={{ fontFamily: 'Inter, sans-serif', paddingLeft: '35.5px', paddingTop: '56px', gap: '19.5px' }}>
            <a
              href="/"
              className="text-white"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
              onClick={handleClose}
            >
              Home
            </a>
            <a
              href="/resume"
              className="text-white"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
              onClick={handleClose}
            >
              Resume
            </a>
            <a
              href="/blog"
              className="text-white"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
              onClick={handleClose}
            >
              Blog
            </a>
            <span className="text-white" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}>
              Good UX
            </span>
          </nav>
        </div>
      )}
    </>
  )
}
