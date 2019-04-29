import colors from "./colors";
import fonts from "./fonts";

const R = require("ramda");

const theme = {
  breakpoints: ["768px", "1024px", "1280px"],
  fonts,
  fontSizes: [0, 16, 18, 20, 22, 24, 28, 34, 36, 38, 48],
  fontWeights: [400, 700, 900],
  colors,
  space: R.range(0, 31).map(num => num * 10)
};

export default theme;
