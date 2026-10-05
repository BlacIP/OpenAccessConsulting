/** @type {import('tailwindcss').Config} */

// Brand scale built around the logo blue (#0765FF = 600)
const brand = {
  50: '#EEF4FF',
  100: '#DCE8FF',
  200: '#B9D1FF',
  300: '#8AB3FF',
  400: '#4D8BFF',
  500: '#2475FF',
  600: '#0765FF',
  700: '#0552D6',
  800: '#0842A8',
  900: '#0B3784',
  950: '#0A2558',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand,
        // Legacy pages still use `blue-*`; alias it to the brand scale until they are rebuilt (Phase 3)
        blue: brand,
        ink: {
          DEFAULT: '#0B1F3A',
          900: '#0B1F3A',
          800: '#13294B',
          700: '#1E3A5F',
        },
        surface: '#F6F9FC',
        line: '#E3E8EF',
        success: '#12B76A',
      },
      fontSize: {
        display: ['clamp(2.5rem, 1.6rem + 3.2vw, 4rem)', { lineHeight: '1.04', letterSpacing: '-0.03em', fontWeight: '600' }],
        h1: ['clamp(2.25rem, 1.6rem + 2.2vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        h2: ['clamp(1.875rem, 1.5rem + 1.3vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '600' }],
        h3: ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        lead: ['clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)', { lineHeight: '1.6' }],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        elevated: '0 30px 60px -12px rgb(11 31 58 / 0.18), 0 18px 36px -18px rgb(0 0 0 / 0.2)',
        card: '0 1px 2px rgb(11 31 58 / 0.06), 0 4px 12px -4px rgb(11 31 58 / 0.08)',
      },
      backgroundImage: {
        'brand-mesh':
          'radial-gradient(at 18% 22%, #4FE3C1 0, transparent 46%), radial-gradient(at 82% 8%, #00B8FF 0, transparent 50%), radial-gradient(at 62% 86%, #0765FF 0, transparent 55%), linear-gradient(135deg, #0765FF 0%, #0842A8 100%)',
        // Darker variant that keeps white text above AA contrast
        'brand-band':
          'radial-gradient(at 100% 100%, rgb(79 227 193 / 0.5) 0, transparent 42%), radial-gradient(at 88% 0%, rgb(0 184 255 / 0.45) 0, transparent 48%), linear-gradient(135deg, #0A2558 0%, #0842A8 50%, #0765FF 100%)',
      },
    },
  },
  plugins: [],
};
