/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-red": "#FF5656",
        "my-white": "#EDF2F6",
        "my-blue": "#6A7EFC",
        "my-gray": "#494953",
        "my-brown": "#FCDC94",
        "my-light-blue": "#78ABA8",
        "my-dull-blue": "#C8CFA0",
        "my-peach": "#EF9C66",
      },
    },
  },
  plugins: [],
};
