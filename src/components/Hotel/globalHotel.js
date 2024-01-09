import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--page-label1: 'Be Vietnam Pro';
--font-karla: Karla;
--montserrat-medium-12: Montserrat;

/* font sizes */
--page-label1-size: 14px;
--page-body-size: 18px;
--page-body1-size: 24px;
--font-size-smi: 13px;
--montserrat-medium-12-size: 12px;

/* Colors */
--xanh: #177ba5;
--color-gray-100: #fafbfc;
--blackish-green: #112211;
--color-gray-200: #051721;
--color-gray-300: rgba(250, 251, 252, 0.8);
--color-gray-400: rgba(5, 23, 33, 0.5);
--color-white: #fff;
--color-salmon: #ff6f6b;
--color-teal: #276968;
--color-lavender: #d7e2ee;
--color-darkslategray-100: #37454d;
--ch-en: #292d32;
--mint-green: #8dd3bb;

/* Gaps */
--gap-14xl: 33px;
--gap-5xl: 24px;
--gap-base: 16px;
--gap-smi: 13px;
--gap-9xs: 4px;
--gap-13xl: 32px;
--gap-11xs: 2px;
--gap-5xs: 8px;

/* Paddings */
--padding-3xs: 10px;
--padding-14xl: 33px;
--padding-5xl: 24px;
--padding-5xs: 8px;
--padding-base: 16px;
--padding-9xs: 4px;

/* Border radiuses */
--br-xs: 12px;
--br-21xl: 40px;
--br-9xs: 4px;
--br-7xs: 6px;

}
`;
