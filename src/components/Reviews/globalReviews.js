import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--page-label1: 'Be Vietnam Pro';
--font-poppins: Poppins;

/* font sizes */
--page-label1-size: 14px;
--page-body-size: 18px;
--page-header2-size: 48px;

/* Colors */
--color-aliceblue: #e3f7ff;
--color-black: #000;

/* Gaps */
--gap-12xl: 31px;

/* Paddings */
--padding-45xl: 64px;
--padding-13xl: 32px;

/* Border radiuses */
--br-31xl: 50px;

}
`;
