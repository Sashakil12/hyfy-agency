import { useEffect, useRef } from 'react'
import { expertiseItems } from '../data/expertise'
import { ArrowRight } from 'lucide-react'
import { GlowButton } from './GlowButton'

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  currentPath?: string
}

export default function MegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  currentPath = ''
}: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        const target = e.target as HTMLElement
        // Don't close if clicking the expertise button
        if (!target.closest('button')) {
          onClose()
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const getExpertisePath = (id: string) => {
    const pathMap: Record<string, string> = {
      'erp': '/erp',
      'ai-tools': '/ai-native-apps',
      'n8n': '/n8n',
      'ecommerce': '/ecommerce',
      'saas': '/saas',
      'cms': '/cms-prototypes',
    }
    return pathMap[id] || `/${id}`
  }

  const isActiveExpertise = (id: string) => {
    return currentPath === getExpertisePath(id)
  }

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="fixed top-20 left-0 right-0 z-40 animate-fade-in"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        animation: 'slideDown 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Glass Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div
          className="relative overflow-hidden rounded-2xl border border-[#88FF66]/20"
          style={{
            background: 'rgba(5, 5, 5, 0.85)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            boxShadow: '0 0 40px rgba(136, 255, 102, 0.15)',
          }}
        >
          {/* Gradient Border Effect */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(136, 255, 102, 0.15) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(136, 255, 102, 0.08) 100%)',
            }}
          />

          {/* Content */}
          <div
            className="relative p-8 max-h-[80vh] overflow-y-auto custom-scrollbar"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(136, 255, 102, 0.5) rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#88FF66]/40 to-transparent" />
                <h3 className="text-xs font-semibold text-[#88FF66] uppercase tracking-wider">
                  Our Expertise
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#88FF66]/40 to-transparent" />
              </div>
              <p className="text-center text-sm text-white/70">
                Choose your path to digital transformation
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertiseItems.map((item, index) => {
                const Icon = item.icon
                const isActive = isActiveExpertise(item.id)

                return (
                  <a
                    key={item.id}
                    href={getExpertisePath(item.id)}
                    className={`group relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-[#88FF66]/30 bg-[#88FF66]/5'
                        : 'border-white/5 hover:border-[#88FF66]/20 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'fadeInUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) backwards',
                    }}
                  >
                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(136, 255, 102, 0.08), transparent 40%)',
                      }}
                    />

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute top-3 right-3">
                        <div className="w-2 h-2 rounded-full bg-[#88FF66] animate-pulse" />
                      </div>
                    )}

                    <div className="relative p-6">
                      {/* Icon Container */}
                      <div className="mb-4 relative">
                        <div
                          className={`absolute inset-0 blur-xl transition-opacity duration-300 ${
                            isActive
                              ? 'opacity-40'
                              : 'opacity-0 group-hover:opacity-30'
                          }`}
                          style={{
                            background: 'rgba(136, 255, 102, 0.4)',
                          }}
                        />
                        <div
                          className={`relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? 'bg-[#88FF66]/15 border border-[#88FF66]/40'
                              : 'bg-[#88FF66]/5 border border-[#88FF66]/20 group-hover:bg-[#88FF66]/10 group-hover:border-[#88FF66]/30'
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 transition-colors duration-300 ${
                              isActive
                                ? 'text-[#88FF66]'
                                : 'text-[#88FF66]/70 group-hover:text-[#88FF66]'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4
                            className={`font-semibold text-base leading-tight transition-colors duration-300 ${
                              isActive
                                ? 'text-[#88FF66]'
                                : 'text-[#88FF66]/80 group-hover:text-[#88FF66]'
                            }`}
                            style={isActive ? {
                              textShadow: '0 0 20px rgba(136, 255, 102, 0.4)'
                            } : undefined}
                          >
                            {item.shortTitle}
                          </h4>
                          <ArrowRight
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                              isActive
                                ? 'text-[#88FF66] translate-x-0 opacity-100'
                                : 'text-[#88FF66]/60 translate-x-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-1'
                            }`}
                          />
                        </div>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Details Preview */}
                      <div className="mt-4 pt-4 border-t border-[#88FF66]/10">
                        <ul className="space-y-1.5">
                          {item.details.slice(0, 2).map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300"
                            >
                              <div
                                className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 transition-colors duration-300 ${
                                  isActive
                                    ? 'bg-[#88FF66]'
                                    : 'bg-[#88FF66]/50 group-hover:bg-[#88FF66]/70'
                                }`}
                              />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                        isActive ? 'w-full' : ''
                      }`}
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, #88FF66, transparent)',
                      }}
                    />
                  </a>
                )
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-8 pt-8 border-t border-[#88FF66]/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-white font-medium">
                    Not sure which service fits your needs?
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    Schedule a free consultation to discuss your project
                  </p>
                </div>
                <GlowButton size="sm" variant="primary" href="/contact" icon={ArrowRight} iconPosition="right">
                  Talk to an Expert
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
