/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors:{
            "dark":"#1F1F1F",
            "verydark":"#141414",
            "lightGray":"#2F2F2F"
          }
        },
    },
    plugins: [],
};
