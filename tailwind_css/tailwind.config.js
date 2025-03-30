module.exports = {
  // content: ["./output/**/*.{html,js}"],
  mode: 'jit',
  content: ['./AgeCalcFile/**/*.{html,js,jsx,ts,tsx}' , "./output/**/*.{html,js,jsx,ts,tsx}","./ageCalculator.html"],
  purge: [ './AgeCalcFile/**/*.{html,js,jsx,ts,tsx}', './AgeCalcFile/index.html'],
  darkMode: media, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
 
  input: './src/input.css',
  output: './output/output.css',
}
