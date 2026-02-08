import { Mail } from 'lucide-react'

import { GlowButton } from './GlowButton'

interface EmailCTAProps {
  email?: string
  label?: string
  showIcon?: boolean
}

export function EmailCTA({
  email = 'sales@hyfy.ltd',
  label = 'Or reach out directly:',
  showIcon = true,
}: EmailCTAProps) {
  return (
    <p className="text-slate">
      {label}{' '}
      <GlowButton
        variant="email"
        href={`mailto:${email}`}
        icon={showIcon ? Mail : undefined}
        iconPosition="left"
      >
        {email}
      </GlowButton>
    </p>
  )
}
