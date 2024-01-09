import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--page-label1: 'Be Vietnam Pro';
--font-karla: Karla;
--font-montserrat-alternates: 'Montserrat Alternates';
--montserrat-medium-14: Montserrat;

/* font sizes */
--page-label1-size: 14px;
--page-header3-size: 40px;
--page-body-size: 24px;
--page-body1-size: 18px;

/* Colors */
--xanh: #177ba5;
--neutrals: #fff;
--blackish-green: #112211;
--color-gray-100: #051721;
--color-gray-200: rgba(5, 23, 33, 0.5);
--ch-en: #292d32;
--mint-green: #8dd3bb;

/* Gaps */
--gap-31xl: 50px;
--gap-sm: 14px;
--gap-10xs: 3px;
--gap-18xl: 37px;
--gap-smi: 13px;
--gap-11xs: 2px;
--gap-base: 16px;
--gap-5xs: 8px;

/* Paddings */
--padding-5xs: 8px;
--padding-base: 16px;
--padding-3xs: 10px;

/* Border radiuses */
--br-mini: 15px;
--br-xl: 20px;
--br-5xs: 8px;
--br-base: 16px;
--br-21xl: 40px;

}
`;
