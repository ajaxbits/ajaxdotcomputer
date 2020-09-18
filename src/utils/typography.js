import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Shrikhand',
      styles: [
        '400',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: ["Shrikhand"],
  bodyFontFamily: ["Open Sans"],
  headerWeight: "normal",
  scaleRatio: 2.5,
  headerColor: `#efefef`,
  bodyColor: `#efefef`,
})

export default typography