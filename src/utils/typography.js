import Typography from "typography";

let typography = new Typography({
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
  scaleRatio: 2,
  headerColor: `#efefef`,
  bodyColor: `#efefef`,
});

//tighten paragraph spacing a bit
typography.blockMarginBottom = typography.baseLineHeight * 0.75;

export default typography