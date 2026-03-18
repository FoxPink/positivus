export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '821px', // 820px and below will show mobile UI
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#B9FF66",
        dark: "#191A23",
        grey: "#F3F3F3",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
