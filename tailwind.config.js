// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#0FCFEC",
//           secondary: "#19D3AE",
//           accent: "#3A4256",
//           neutral: "#3d4451",
//           "base-100": "#ffffff",
//         },
//       },
//       "dark",
//       "cupcake",
//     ],
//     styled: true,
//     base: false,
//     utils: true,
//     logs: true,
//     rtl: false,
//     prefix: "",
//     darkTheme: "dark",
//   },
// }

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}