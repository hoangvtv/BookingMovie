import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--page-label1: 'Be Vietnam Pro';
--body-3: Inter;
--montserrat-semibold-16: Montserrat;
--font-montserrat-alternates: 'Montserrat Alternates';
--font-karla: Karla;

/* font sizes */
--page-label1-size: 14px;
--page-body-size: 18px;
--montserrat-semibold-16-size: 16px;
--page-body1-size: 24px;
--font-size-smi: 13px;
--montserrat-medium-12-size: 12px;

/* Colors */
--xanh: #177ba5;
--color-gray-100: #fafbfc;
--blackish-green: #112211;
--color-gray-200: #051721;
--color-gray-300: rgba(5, 23, 33, 0.6);
--color-gray-400: rgba(5, 23, 33, 0.5);
--color-white: #fff;
--color-salmon: #ff6f6b;
--color-teal: #276968;
--color-lavender: #d7e2ee;
--color-darkslategray: #37454d;
--mint-green: #8dd3bb;

/* Gaps */
--gap-14xl: 33px;
--gap-lgi: 19px;
--gap-base: 16px;
--gap-21xl: 40px;
--gap-9xs: 4px;
--gap-xs: 12px;
--gap-5xs: 8px;
--gap-3xs: 10px;

/* Paddings */
--padding-3xs: 10px;
--padding-14xl: 33px;
--padding-base: 16px;
--padding-5xl: 24px;
--padding-5xs: 8px;

/* Border radiuses */
--br-xs: 12px;
--br-21xl: 40px;
--br-9xs: 4px;

}
`;
