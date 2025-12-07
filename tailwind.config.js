/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        bg:"#0f1111", panel:"#171a1b", line:"#242829",
        text:"#e9eae9", mute:"#a8adab",
        primary:"#2a7a55", primary2:"#3a8c6b",
      },
      borderRadius:{ xl:"0.9rem", '2xl':"1.25rem" },
      boxShadow:{
        subtle:"0 1px 0 rgba(255,255,255,.03), 0 8px 24px rgba(0,0,0,.35)",
        glow:"0 0 0 1px rgba(58,140,107,.25), 0 10px 30px rgba(58,140,107,.15)"
      },
      spacing:{ section:"6rem" },
      container:{ center:true, padding:"24px", screens:{ lg:"1024px", xl:"1200px", "2xl":"1200px" } },
    },
  },
  plugins: [],
}
