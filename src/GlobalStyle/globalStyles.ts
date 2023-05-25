import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
    outline: none;
}

:root{
    --font-family-title: 'Lexend', sans-serif;
    --font-family-text: 'Inter', sans-serif;

    --brand-1:rgba(0, 103, 129, 1);
    --brand-2: rgba(52, 59, 65, 0.4);
    --brand-3: rgb(103, 58, 183, 0.6);
    --brand-3-hover: rgb(103, 58, 183);

    --grey-0: rgba(52, 59, 65, 0.5);
    
    --white-1:#f8f9fa;




    --font-size-small: 14px;
    --font-size-medium: 16px;
    --font-size-large: 18px;

    --font-size-h1:20px;

}



`;
