/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  	extend: {
  		colors: {
  			obsidian: '#050505',
  			charcoal: '#0F1210',
  			lime: '#88FF66',
  			amber: '#F2994A',
  			// Luminous Transparency System - Self-illuminated text hierarchy
  			'luminous': {
  				DEFAULT: 'rgba(255, 255, 255, 0.65)', // Primary secondary text
  				tertiary: 'rgba(255, 255, 255, 0.45)', // Metadata/labels
  				muted: 'rgba(255, 255, 255, 0.25)', // Disabled/deemphasized
  				data: 'rgba(136, 255, 102, 0.5)', // Technical data with lime tint
  			},
  			slate: 'rgba(255, 255, 255, 0.65)', // Updated to luminous default for compatibility
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Orbitron',
  				'sans-serif'
  			],
  			body: [
  				'Rajdhani',
  				'sans-serif'
  			]
  		},
  		backdropBlur: {
  			glass: '16px',
  			'glass-lg': '24px'
  		},
  		boxShadow: {
  			'glow-lime': '0px 0px 15px rgba(136, 255, 102, 0.4)',
  			'glow-lime-intense': '0px 0px 25px rgba(136, 255, 102, 0.6)'
  		},
  		animation: {
  			'breathing-pulse': 'breathing 3s ease-in-out infinite'
  		},
  		keyframes: {
  			breathing: {
  				'0%, 100%': {
  					opacity: '0.7'
  				},
  				'50%': {
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
}
