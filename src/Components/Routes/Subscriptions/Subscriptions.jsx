import styled from "styled-components"
import GlobalStyle from "../../../Styles/GlobalStyle"
import Logo from "../../CommonAssets/Logo"
export default function(){
    return(
        <Container>
        <GlobalStyle color='black'/>
        <span><h1>Escolha seu plano</h1></span>
        <PlanCard>
            <Logo color='white'></Logo>
            <span><h2>R$ 39,99</h2></span>
        </PlanCard>

        <PlanCard>
            <Logo color='#fff16f'></Logo>
            <span><h2>R$ 69,99</h2></span>
        </PlanCard>

        <PlanCard>
            <Logo color='#56d59f'></Logo>
            <span><h2>R$ 99,99</h2></span>
        </PlanCard>

        </Container>
    )
}

const Container = styled.div`
    color: white;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    span{
        width: 290px;
        
    }
`

const PlanCard = styled.div`
    margin-top: 10px;
    border:3px solid #7e7e7e;
    border-radius: 12px;
    width: 290px;
    height: 180px;
    display: flex;
    align-items: center;
    align-content: center;
   span{
        width: 110px;
    }
`