import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import colors from "./colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    background: ${colors.primary1};
    font-family: ${fonts.lato};
    font-size: 16px;
    line-height: 1.3;
    white-space: pre-wrap;
  }
`;
