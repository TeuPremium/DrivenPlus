import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    font-family: Lexend Deca;
    background-color: ${prop =>prop.color};
}
h1{
        font-weight: 400;
        font-size: 20px;
        margin-left: 5%;
        color: #666666;
    }
h2{
    font-weight: 400;
    font-size:13px;
    margin-left:5% ;
    color: #666666;
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