import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react"
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  
  plugins: [heroui({
    "themes": {
      "dark": {
        "colors": {
          "default": {
            "50": "#131315",
            "100": "#1e1e21",
            "200": "#29292e",
            "300": "#34343a",
            "400": "#3f3f46",
            "500": "#616166",
            "600": "#828287",
            "700": "#a4a4a7",
            "800": "#c5c5c8",
            "900": "#e7e7e8",
            "foreground": "#fff",
            "DEFAULT": "#3f3f46"
          },
          "primary": {
            "50": "#002147",
            "100": "#003571",
            "200": "#00489b",
            "300": "#005cc4",
            "400": "#006fee",
            "500": "#2d88f1",
            "600": "#59a1f4",
            "700": "#86bbf7",
            "800": "#b3d4fa",
            "900": "#dfedfd",
            "foreground": "#fff",
            "DEFAULT": "#006fee"
          },
          "secondary": {
            "50": "#240c3c",
            "100": "#39135f",
            "200": "#4e1a82",
            "300": "#6321a5",
            "400": "#7828c8",
            "500": "#904ed2",
            "600": "#a773db",
            "700": "#bf99e5",
            "800": "#d7bfef",
            "900": "#eee4f8",
            "foreground": "#fff",
            "DEFAULT": "#7828c8"
          },
          "success": {
            "50": "#073c1e",
            "100": "#0b5f30",
            "200": "#0f8341",
            "300": "#13a653",
            "400": "#17c964",
            "500": "#40d27f",
            "600": "#68dc9a",
            "700": "#91e5b5",
            "800": "#b9efd1",
            "900": "#e2f8ec",
            "foreground": "#000",
            "DEFAULT": "#17c964"
          },
          "warning": {
            "50": "#4a320b",
            "100": "#744e11",
            "200": "#9f6b17",
            "300": "#ca881e",
            "400": "#f5a524",
            "500": "#f7b54a",
            "600": "#f9c571",
            "700": "#fad497",
            "800": "#fce4bd",
            "900": "#fef4e4",
            "foreground": "#000",
            "DEFAULT": "#f5a524"
          },
          "danger": {
            "50": "#49051d",
            "100": "#73092e",
            "200": "#9e0c3e",
            "300": "#c80f4f",
            "400": "#f31260",
            "500": "#f53b7c",
            "600": "#f76598",
            "700": "#f98eb3",
            "800": "#fbb8cf",
            "900": "#fee1eb",
            "foreground": "#000",
            "DEFAULT": "#f31260"
          },
          "background": "#000000",
          "foreground": {
            "50": "#4d4d4d",
            "100": "#797979",
            "200": "#a6a6a6",
            "300": "#d2d2d2",
            "400": "#ffffff",
            "500": "#ffffff",
            "600": "#ffffff",
            "700": "#ffffff",
            "800": "#ffffff",
            "900": "#ffffff",
            "foreground": "#000",
            "DEFAULT": "#ffffff"
          },
          "content1": {
            "DEFAULT": "#18181b",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#27272a",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#3f3f46",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#52525b",
            "foreground": "#fff"
          },
          "focus": "#006FEE",
          "overlay": "#ffffff",
          "divider": "#ffffff"
        }
      }
    },
    "layout": {
      "fontSize": {
        "tiny": "0.75rem",
        "small": "0.875rem",
        "medium": "1rem",
        "large": "1.125rem"
      },
      "lineHeight": {
        "tiny": "1rem",
        "small": "1.25rem",
        "medium": "1.5rem",
        "large": "1.75rem"
      },
      "radius": {
        "small": "0.5rem",
        "medium": "0.75rem",
        "large": "0.875rem"
      },
      "borderWidth": {
        "small": "1px",
        "medium": "2px",
        "large": "3px"
      },
      "disabledOpacity": "0.5",
      "dividerWeight": "1",
      "hoverOpacity": "0.9"
    }
  }),
      require("tailwindcss-animate")
],
} satisfies Config;
