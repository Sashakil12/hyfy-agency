import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import MegaMenu from './MegaMenu'

interface GlobalHeaderProps {
  currentPath?: string
}

export default function GlobalHeader({ currentPath = '' }: GlobalHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMegaMenuOpen = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsMegaMenuOpen(true)
  }

  const handleMegaMenuClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 200)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true
    if (href !== '/' && currentPath.startsWith(href)) return true
    return false
  }

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive(item.href)
                      ? 'text-[#88FF66] bg-white/5'
                      : 'text-[#828282] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Expertise Dropdown Trigger */}
              <button
                onMouseEnter={handleMegaMenuOpen}
                onMouseLeave={handleMegaMenuClose}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                  currentPath.startsWith('/erp') ||
                  currentPath.startsWith('/ai-native-apps') ||
                  currentPath.startsWith('/n8n') ||
                  currentPath.startsWith('/ecommerce') ||
                  currentPath.startsWith('/saas') ||
                  currentPath.startsWith('/cms-prototypes')
                    ? 'text-[#88FF66] bg-white/5'
                    : 'text-[#828282] hover:text-white hover:bg-white/5'
                }`}
              >
                Expertise
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMegaMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <a
                href="/blog"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  currentPath.startsWith('/blog')
                    ? 'text-[#88FF66] bg-white/5'
                    : 'text-[#828282] hover:text-white hover:bg-white/5'
                }`}
              >
                Blog
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="/contact"
                className="relative group cursor-pointer inline-flex items-center"
              >
                <div className="absolute inset-0 bg-[#88FF66] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative px-6 py-2.5 rounded-lg bg-[#88FF66] text-[#050505] font-semibold text-sm hover:bg-[#99FF77] transition-colors duration-200">
                  Get Started
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden mobile-menu-button p-2 rounded-lg text-[#828282] hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mega Menu */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        onMouseEnter={handleMegaMenuOpen}
        onMouseLeave={handleMegaMenuClose}
        currentPath={currentPath}
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 mobile-menu">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative h-full flex flex-col pt-24 px-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 cursor-pointer ${
                    isActive(item.href)
                      ? 'text-[#88FF66] bg-white/5'
                      : 'text-[#828282] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/blog"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 cursor-pointer ${
                  currentPath.startsWith('/blog')
                    ? 'text-[#88FF66] bg-white/5'
                    : 'text-[#828282] hover:text-white hover:bg-white/5'
                }`}
              >
                Blog
              </a>

              {/* Expertise Section */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="px-4 py-2 text-xs font-semibold text-[#828282] uppercase tracking-wider">
                  Expertise
                </div>
                <div className="space-y-2 mt-2">
                  <a
                    href="/erp"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[#828282] hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  >
                    Custom ERPs
                  </a>
                  <a
                    href="/ai-native-apps"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[#828282] hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  >
                    AI-Native Apps
                  </a>
                  <a
                    href="/n8n"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[#828282] hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  >
                    N8n Workflows
                  </a>
                  <a
                    href="/ecommerce"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[#828282] hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  >
                    Custom Ecommerce
                  </a>
                  <a
                    href="/saas"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[#828282] hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  >
                    SaaS / RaaS
                  </a>
                  <a
                    href="/cms-prototypes"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[#828282] hover:text-white hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  >
                    CMS Prototypes
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-8">
              <a
                href="/contact"
                className="relative group cursor-pointer inline-flex items-center w-full justify-center"
              >
                <div className="absolute inset-0 bg-[#88FF66] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative w-full px-6 py-3 rounded-lg bg-[#88FF66] text-[#050505] font-semibold text-base text-center hover:bg-[#99FF77] transition-colors duration-200">
                  Get Started
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
