import styled from "styled-components"
import GlobalStyle from "../../Styles/GlobalStyle"
import { Link } from "react-router-dom"

export default function(){
    return(
        <Container>
        <GlobalStyle color='#0e0e13'/>
        <h1>Faca login para acessar esta pagina.</h1>
        <Link to='/'>
        <StyledButton>Ir para pagina inicial</StyledButton>
        </Link>
        </Container>
    )
}

const StyledButton = styled.button`
        margin-top: 25px;
        width:303px ;
        height: 45px;
        
        border:none;
        border-radius: 5px;
        
        margin-bottom: 5px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
        
        ::placeholder{
        color:#dbdbdb;    
        }
        background-color: #ff4791;
`
const Container = styled.div`
    width: 303px;
    text-align: center;
    margin: auto;
    margin-top: 225px;
    
`