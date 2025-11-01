/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(55 65 81)',
            '[class~="lead"]': {
              color: 'rgb(107 114 128)',
            },
            a: {
              color: 'rgb(59 130 246)',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(37 99 235)',
              },
            },
            strong: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: 'rgb(107 114 128)',
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::marker': {
              color: 'rgb(209 213 219)',
            },
            hr: {
              borderColor: 'rgb(229 231 235)',
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'rgb(17 24 39)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'rgb(229 231 235)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            h1: {
              color: 'rgb(17 24 39)',
              fontWeight: '800',
              fontSize: '2.25em',
            },
            'h1 strong': {
              fontWeight: '900',
              color: 'inherit',
            },
            h2: {
              color: 'rgb(17 24 39)',
              fontWeight: '700',
              fontSize: '1.875em',
            },
            'h2 strong': {
              fontWeight: '800',
              color: 'inherit',
            },
            h3: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              fontSize: '1.5em',
            },
            'h3 strong': {
              fontWeight: '700',
              color: 'inherit',
            },
            h4: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              fontSize: '1.25em',
            },
            'h4 strong': {
              fontWeight: '700',
              color: 'inherit',
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            picture: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            'picture > img': {
              marginTop: '0',
              marginBottom: '0',
            },
            video: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            kbd: {
              fontWeight: '500',
              fontFamily: 'inherit',
              color: 'rgb(17 24 39)',
              boxShadow:
                '0 0 0 1px rgb(55 65 81 / 10%), 0 3px 0 rgb(55 65 81 / 10%)',
            },
            code: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            'a code': {
              color: 'inherit',
            },
            'h1 code': {
              color: 'inherit',
            },
            'h2 code': {
              color: 'inherit',
            },
            'h3 code': {
              color: 'inherit',
            },
            'h4 code': {
              color: 'inherit',
            },
            'blockquote code': {
              color: 'inherit',
            },
            'thead th code': {
              color: 'inherit',
            },
            pre: {
              color: 'rgb(229 231 235)',
              backgroundColor: 'rgb(55 65 81)',
              overflowX: 'auto',
              fontSize: '0.875em',
              lineHeight: 1.7142857,
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
              borderRadius: '0.375rem',
              paddingTop: '0.8571429em',
              paddingRight: '1.1428571em',
              paddingBottom: '0.8571429em',
              paddingLeft: '1.1428571em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: 'inherit',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              fontSize: '0.875em',
              lineHeight: 1.7142857,
            },
            thead: {
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(209 213 219)',
            },
            'thead th': {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              verticalAlign: 'bottom',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(229 231 235)',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'baseline',
            },
            tfoot: {
              borderTopWidth: '1px',
              borderTopColor: 'rgb(209 213 219)',
            },
            'tfoot td': {
              verticalAlign: 'top',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'rgb(209 213 219)',
            '--tw-prose-headings': 'rgb(255 255 255)',
            '--tw-prose-lead': 'rgb(156 163 175)',
            '--tw-prose-links': 'rgb(96 165 250)',
            '--tw-prose-bold': 'rgb(255 255 255)',
            '--tw-prose-counters': 'rgb(156 163 175)',
            '--tw-prose-bullets': 'rgb(75 85 99)',
            '--tw-prose-hr': 'rgb(55 65 81)',
            '--tw-prose-quotes': 'rgb(243 244 246)',
            '--tw-prose-quote-borders': 'rgb(55 65 81)',
            '--tw-prose-captions': 'rgb(156 163 175)',
            '--tw-prose-kbd': 'rgb(255 255 255)',
            '--tw-prose-kbd-shadows': 'rgb(255 255 255 / 50%)',
            '--tw-prose-code': 'rgb(255 255 255)',
            '--tw-prose-pre-code': 'rgb(209 213 219)',
            '--tw-prose-pre-bg': 'rgb(55 65 81)',
            '--tw-prose-th-borders': 'rgb(75 85 99)',
            '--tw-prose-td-borders': 'rgb(55 65 81)',
          },
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          '"SF Mono"',
          'Consolas',
          '"Liberation Mono"',
          'Menlo',
          'monospace',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}