import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Eczar',
      styles: [
        '600',
      ],
    },
    {
      name: 'IBM Plex Mono',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: ["Eczar"],
  bodyFontFamily: ["IBM Plex Mono"],
  headerWeight: "normal",
  scaleRatio: 2.5,
  headerColor: `#efefef`,
  bodyColor: `#efefef`,
})

export default typography