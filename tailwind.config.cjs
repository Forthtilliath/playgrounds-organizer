/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "-2px -2px 5px hsl(222 47% 16% / 1), 2px 2px 5px hsl(222 47% 21% / 1)",
        "card-xl": "-5px -5px 15px hsl(222 47% 16% / 1), 5px 5px 15px hsl(222 47% 21% / 1)",
      },
    },
  },
  plugins: [],
};
