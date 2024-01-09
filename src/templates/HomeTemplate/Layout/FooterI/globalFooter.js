import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--page-label1: 'Be Vietnam Pro';
--font-montserrat: Montserrat;

/* font sizes */
--page-label1-size: 14px;
--page-body1-size: 24px;

/* Colors */
--main: #177ba5;
--color-white: #fff;
--siah: #292d32;

/* Gaps */
--gap-3xs: 10px;

/* Paddings */
--padding-base: 16px;

/* Border radiuses */
--br-21xl: 40px;
--br-31xl: 50px;

}
`;
