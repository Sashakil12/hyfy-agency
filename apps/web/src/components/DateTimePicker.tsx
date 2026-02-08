'use client'
import { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Calendar, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DateTimePickerProps {
  type: 'date' | 'time'
  value: string
  onChange: (value: string) => void
  error?: boolean
  required?: boolean
  icon?: React.ComponentType<{ className?: string }>
  selectedDate?: string // For time picker to check booked slots
}

export function DateTimePicker({ type, value, onChange, error, required, icon: Icon, selectedDate }: DateTimePickerProps) {
  const DisplayIcon = Icon || (type === 'date' ? Calendar : Clock)
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)
  const [portalPosition, setPortalPosition] = useState({ top: 0, left: 0, width: 0 })

  // Calculate position when picker opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect()
      setPortalPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX + rect.width / 2,
        width: rect.width,
      })
    }
  }, [isOpen])

  // Fetch booked slots when date changes (for time picker)
  useEffect(() => {
    if (type === 'time' && selectedDate) {
      fetchBookedSlots(selectedDate)
    }
  }, [type, selectedDate])

  const fetchBookedSlots = async (date: string) => {
    setIsLoading(true)
    try {
      const strapiUrl = import.meta.env.PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
      const response = await fetch(`${strapiUrl}/api/contact-submissions/booked-slots?date=${date}`)
      if (response.ok) {
        const data = await response.json()
        // Convert booked slots to user's timezone
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const slots = data.bookedSlots
          .filter((slot: { timezone: string }) => slot.timezone === userTimezone)
          .map((slot: { time: string }) => slot.time)
        setBookedSlots(slots)
      }
    } catch (error) {
      console.error('Error fetching booked slots:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getAvailableTimes = () => {
    const times = []
    for (let hour = 10; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 18 && minute > 0) break // Stop at 6:00 PM
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        if (!bookedSlots.includes(timeString)) {
          times.push(timeString)
        }
      }
    }
    return times
  }

  if (type === 'date') {
    const selectedDate = value ? new Date(value) : null

    return (
      <div className="relative" ref={inputRef}>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/50 pointer-events-none z-10">
          <DisplayIcon className="w-5 h-5" />
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            if (date) {
              const formattedDate = date.toISOString().split('T')[0]
              onChange(formattedDate)
              setIsOpen(false)
            }
          }}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          placeholderText="Select a date"
          required={required}
          popperPlacement="bottom"
          popperClassName="nexus-date-popper"
          popperProps={{
            strategy: 'fixed',
          }}
          className={cn(
            'w-full pl-12 pr-4 py-4 rounded-lg border transition-all duration-300 light-sweep input-force-white',
            'bg-white/[0.03] backdrop-blur-glass-lg',
            'focus:outline-none focus:ring-2 focus:ring-lime/50 focus:ring-offset-2 focus:ring-offset-obsidian focus:border-lime focus:shadow-glow-lime',
            'placeholder:text-slate/40',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error
              ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/50 focus:border-red-500 focus:shadow-none'
              : 'border-white/10 hover:border-lime/30 hover:bg-white/[0.05]'
          )}
          calendarClassName="nexus-calendar"
          wrapperClassName="w-full"
        />
      </div>
    )
  }

  // Time picker with react-datepicker
  const availableTimes = getAvailableTimes()
  
  // Convert time string to Date object for DatePicker
  const selectedTime = value ? (() => {
    const [hours, minutes] = value.split(':').map(Number)
    const date = new Date()
    date.setHours(hours, minutes, 0, 0)
    return date
  })() : null

  return (
    <div className="relative" ref={inputRef}>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/50 pointer-events-none z-10">
        <DisplayIcon className="w-5 h-5" />
      </div>
      <DatePicker
        selected={selectedTime}
        onChange={(time) => {
          if (time) {
            const hours = time.getHours().toString().padStart(2, '0')
            const minutes = time.getMinutes().toString().padStart(2, '0')
            onChange(`${hours}:${minutes}`)
            setIsOpen(false)
          }
        }}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
        minTime={(() => {
          const date = new Date()
          date.setHours(10, 0, 0, 0)
          return date
        })()}
        maxTime={(() => {
          const date = new Date()
          date.setHours(18, 0, 0, 0)
          return date
        })()}
        filterTime={(time) => {
          const hours = time.getHours().toString().padStart(2, '0')
          const minutes = time.getMinutes().toString().padStart(2, '0')
          const timeString = `${hours}:${minutes}`
          return availableTimes.includes(timeString)
        }}
        placeholderText={isLoading ? 'Loading slots...' : 'Select a time'}
        required={required}
        disabled={isLoading || !selectedDate}
        popperPlacement="bottom"
        popperClassName="nexus-time-popper"
        popperProps={{
          strategy: 'fixed',
        }}
        className={cn(
          'w-full pl-12 pr-4 py-4 rounded-lg border transition-all duration-300 light-sweep input-force-white',
          'bg-white/[0.03] backdrop-blur-glass-lg',
          'focus:outline-none focus:ring-2 focus:ring-lime/50 focus:ring-offset-2 focus:ring-offset-obsidian focus:border-lime focus:shadow-glow-lime',
          'placeholder:text-slate/40',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error
            ? 'border-red-500/50 bg-red-500/5 focus:ring-red-500/50 focus:border-red-500 focus:shadow-none'
            : 'border-white/10 hover:border-lime/30 hover:bg-white/[0.05]'
        )}
        calendarClassName="nexus-time-picker"
        wrapperClassName="w-full"
      />
    </div>
  )
}
