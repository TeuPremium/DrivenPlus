import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    font-family: roboto;
    background-color: ${prop =>prop.color};
}
h1{
        font-weight: 400;
        font-size: 32px;
        margin-left: 5%;
        color: #ffffff;
    }
h2{
    font-weight: 700;
    font-size:24px;
    margin-left:5% ;
    color: white;
}
h3{
    font-weight: 400;
    font-size:11px;
    margin-left:5% ;
    color: #666666;
    line-height: 0px;
}
`
export default GlobalStyle;