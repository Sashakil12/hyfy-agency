'use client'
import { motion, useInView } from 'framer-motion'
import { Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'
import { useState, useRef, FormEvent } from 'react'

import { GlassCard } from '@/components/GlassCard'
import { GlowButton } from '@/components/GlowButton'
import { cn } from '@/lib/utils'

const formFields = [
  {
    name: 'name',
    label: 'Your Name',
    type: 'text',
    placeholder: 'John Doe',
    icon: User,
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john@company.com',
    icon: Mail,
    required: true,
  },
  {
    name: 'message',
    label: 'Tell Us About Your Project',
    type: 'textarea',
    placeholder: 'Describe your project, goals, and timeline...',
    icon: MessageSquare,
    required: true,
    rows: 5,
  },
]

export function ContactFormSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return null
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email'
        return null
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 20) return 'Message must be at least 20 characters'
        return null
      default:
        return null
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({
        ...prev,
        [name]: error || '',
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')

    const newErrors: Record<string, string> = {}
    let hasError = false

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) {
        newErrors[key] = error
        hasError = true
      }
    })

    if (hasError) {
      setErrors(newErrors)
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 100%, rgba(136, 255, 102, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 50%, rgba(136, 255, 102, 0.05) 0%, transparent 40%), #050505',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight leading-tight">
            Get in
            <br />
            <span className="text-lime">Touch</span>
          </h2>

          <p className="text-slate text-lg max-w-3xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 48 hours with a
            personalized project proposal.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <GlassCard glow className="p-6 md:p-8 lg:p-12">
            <motion.form
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {formFields.map((field, index) => {
                const Icon = field.icon
                const hasError = !!errors[field.name]

                return (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-slate mb-2 terminal-text uppercase tracking-wider"
                    >
                      {field.label}
                      {field.required && <span className="text-lime ml-1">*</span>}
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/50 pointer-events-none">
                        <Icon className="w-5 h-5" />
                      </div>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={field.rows}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className={cn(
                            'w-full pl-12 pr-4 py-4 rounded-lg border transition-all duration-300 light-sweep',
                            'bg-white/[0.03] backdrop-blur-glass-lg',
                            'focus:outline-none focus:ring-2 focus:ring-lime/50 focus:ring-offset-2 focus:ring-offset-obsidian focus:border-lime focus:shadow-glow-lime',
                            'placeholder:text-slate/40 text-white resize-none',
                            'autofill:bg-white/[0.03] autofill:text-white [&:-webkit-autofill]:bg-white/[0.03] [&:-webkit-autofill]:text-white',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            hasError
                              ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/50 focus:border-red-500 focus:shadow-none'
                              : 'border-white/10 hover:border-lime/30 hover:bg-white/[0.05]'
                          )}
                        />
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className={cn(
                            'w-full pl-12 pr-4 py-4 rounded-lg border transition-all duration-300 light-sweep',
                            'bg-white/[0.03] backdrop-blur-glass-lg',
                            'focus:outline-none focus:ring-2 focus:ring-lime/50 focus:ring-offset-2 focus:ring-offset-obsidian focus:border-lime focus:shadow-glow-lime',
                            'placeholder:text-slate/40 text-white',
                            'autofill:bg-white/[0.03] autofill:text-white [&:-webkit-autofill]:bg-white/[0.03] [&:-webkit-autofill]:text-white',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            hasError
                              ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/50 focus:border-red-500 focus:shadow-none'
                              : 'border-white/10 hover:border-lime/30 hover:bg-white/[0.05]'
                          )}
                        />
                      )}
                    </div>
                    {hasError && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-red-400 text-sm flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors[field.name]}
                      </motion.p>
                    )}
                  </motion.div>
                )
              })}

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-lime/10 border border-lime/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-lime" />
                  <p className="text-lime text-sm">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-4"
              >
                <div className="relative inline-block w-full">
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-lime/20"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <GlowButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full px-8 py-6 text-lg font-bold uppercase tracking-wider relative z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </GlowButton>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center pt-6"
              >
                <p className="text-slate/60 text-sm terminal-text">
                  {'>'} DATA_ENCRYPTED • SSL_SECURED • PRIVACY_PROTECTED
                </p>
              </motion.div>
            </motion.form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
