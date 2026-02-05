'use client'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin as LinkedinIcon, Terminal } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Custom ERPs', href: '/erp' },
    { name: 'AI-Native Apps', href: '/ai-native-apps' },
    { name: 'N8n Workflows', href: '/n8n' },
    { name: 'Ecommerce', href: '/ecommerce' },
    { name: 'SaaS / RaaS', href: '/saas' },
    { name: 'CMS Prototypes', href: '/cms-prototypes' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  social: [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-charcoal border-t border-lime/10 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(136,255,102,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(136,255,102,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-10" />

      {/* Scan line */}
      <motion.div
        className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
        animate={{ y: ['0%', '100%'] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="relative inline-block mb-4">
              {/* Logo with HUD frame */}
              <div className="relative">
                <h3 className="text-2xl font-display font-bold text-lime">Hyfy Agency</h3>

                {/* Corner brackets */}
                <div className="absolute -inset-2 pointer-events-none">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime/40" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime/40" />
                </div>
              </div>
            </div>

            <p className="text-white/70 max-w-md mb-6 leading-relaxed">
              From idea to MVP in 65% less time. Full-stack development with AI-native workflows.
            </p>

            {/* System info */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded glass-panel border border-lime/20">
              <Terminal className="w-3 h-3 text-lime" />
              <span className="terminal-text text-lime/70 text-xs">BUILD_v2.0.1</span>
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-lime"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="terminal-text text-lime text-xs uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 footer-links">
              {navigation.services.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="group relative inline-flex items-center gap-2 text-white hover:text-lime transition-colors text-sm"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-lime/50 group-hover:bg-lime"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="relative">
                      {item.name}
                      {/* Underline visible by default, full on hover */}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-lime transition-all duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="terminal-text text-lime text-xs uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 footer-links">
              {navigation.company.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="group relative inline-flex items-center gap-2 text-white hover:text-lime transition-colors text-sm"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-lime/50 group-hover:bg-lime"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="relative">
                      {item.name}
                      {/* Underline visible by default, full on hover */}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-lime transition-all duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lime/10 relative">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-lime/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-lime/20" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright with terminal styling */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-slate/60 text-xs">
              <span className="terminal-text">© {currentYear} HYFY_AGENCY</span>
              <span className="hidden md:block">•</span>
              <span className="terminal-text">ALL_RIGHTS_RESERVED</span>
              <span className="hidden md:block">•</span>
              <span className="terminal-text text-lime/50">POWERED_BY_AI</span>
            </div>

            {/* Social Links with enhanced styling */}
            <div className="flex gap-3">
              {navigation.social.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Hexagonal frame */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <polygon
                        points="50,10 85,30 85,70 50,90 15,70 15,30"
                        fill="rgba(136,255,102,0.05)"
                        stroke="rgba(136,255,102,0.3)"
                        strokeWidth="1"
                        className="group-hover:fill-[rgba(136,255,102,0.1)] group-hover:stroke-lime transition-all"
                      />
                    </svg>

                    <item.icon className="w-4 h-4 text-white/70 group-hover:text-lime transition-colors relative z-10" />

                    {/* Glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-lime/0 group-hover:bg-lime/20 blur-lg -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lime" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-lime" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Build info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-center terminal-text text-slate/40 text-xs"
          >
            DEPLOYED_AT: {new Date().toISOString().split('T')[0]} • STATUS: OPERATIONAL
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
