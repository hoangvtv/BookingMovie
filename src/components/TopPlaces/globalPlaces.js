import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--page-body: 'Be Vietnam Pro';

/* font sizes */
--page-body-size: 24px;
--page-header2-size: 48px;
--page-label1-size: 14px;
--page-body1-size: 18px;
--page-header1-size: 56px;

/* Colors */
--color-darkslategray-100: #2d3134;
--color-darkslategray-200: #292d32;
--color-black: #000;
--xanh: #177ba5;
--color-white: #fff;

/* Gaps */
--gap-5xl: 24px;

/* Paddings */
--padding-3xs: 10px;
--padding-xl: 20px;

/* Border radiuses */
--br-31xl: 50px;
--br-base: 16px;
--br-xl: 20px;

}
`;
