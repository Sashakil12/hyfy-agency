import { Github, Twitter, Linkedin as LinkedinIcon } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Custom ERPs', href: '/services/erp' },
    { name: 'AI-Native Apps', href: '/services/ai-tools' },
    { name: 'N8n Workflows', href: '/services/n8n' },
    { name: 'Ecommerce', href: '/services/ecommerce' },
    { name: 'SaaS / RaaS', href: '/services/saas' },
    { name: 'CMS Prototypes', href: '/services/cms' },
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
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-lime mb-3">
              Hyfy Agency
            </h3>
            <p className="text-slate max-w-md">
              From idea to MVP in 65% less time. Full-stack development with AI-native workflows.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate hover:text-lime transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate hover:text-lime transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate text-sm">
            © {currentYear} Hyfy Agency. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate hover:text-lime transition-colors"
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
