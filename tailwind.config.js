/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "twitter-white-100": "#FFF",
        "blue-wash": "rgba(117, 190, 239, 0.20)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "success": "#00BE74",
        "error": "#8B141A",
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      borderRadius: {
        "border-radius-65": "65px",
        "border-radius-30": "30px",
        "border-radius-9999": "9999px",
        "border-radius-4": "4px"
      },
      boxShadow: {
        "signup-box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.25)"
      },
      backdropBlur: {
        "23": "blur(23.668209075927734px)"
      },
      width: {
        "334": "334px",
        "348": "348px",
        "442": "442px",
        "426": "426px",
        "482": "482px",
        "434": "434px",
      },
      height: {
        "39": "39px"
      },
      lineHeight: {
        "normal": "normal"
      },
      borderColor: {
        'border-stroke': 'var(--stroke, rgba(29, 155, 240, 0.24))',
      }
    },
  },
  plugins: [],
}