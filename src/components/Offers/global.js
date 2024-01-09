import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--page-label1: 'Be Vietnam Pro';

/* font sizes */
--page-label1-size: 14px;
--page-body1-size: 24px;

/* Colors */
--color-white: #fff;
--main: #177ba5;
--color-gray: rgba(0, 0, 0, 0.5);
--siah: #292d32;
--pink: #fcddec;
--color-hotpink: #f178b6;
--green: #d6edeb;
--color-darkcyan: #2d8985;

/* Gaps */
--gap-5xl: 24px;
--gap-5xs: 8px;
--gap-base: 16px;

/* Paddings */
--padding-13xl: 32px;
--padding-5xs: 8px;
--padding-base: 16px;
--padding-mini: 15px;

/* Border radiuses */
--br-101xl: 120px;
--br-61xl: 80px;
--br-21xl: 40px;

/* Effects */
--drop-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25), 10px -20px 0px #2cc1d6;
}
`;
