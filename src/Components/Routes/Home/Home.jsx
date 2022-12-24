import styled from "styled-components";
import GlobalStyle from "../../../Styles/GlobalStyle";
import Logo from "../../CommonAssets/Logo";
import UserSVG from "../../CommonAssets/UserSVG";
import { useContext } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import URL2 from "../../CommonAssets/URL2";
import UserContext from "../../Contexts/UserContext";

export default function(){
    const {token} = useContext(AuthContext)
    const [plan, setPlan] = useState()
    const {user} = useContext(UserContext)
    console.log(user)
    const {name} = user
    const perks = user.membership.perks
    console.log(name, user.image)
   


    return(
        <Container>
        <GlobalStyle color='#0e0e13'/>
        <Header>
        <LogoPosition><Logo src={user.membership.image}/></LogoPosition>
        <UserPosition><UserSVG/></UserPosition>
        </Header>
        <span><h1>Ola, {name}</h1></span>
        <>
        {perks.map((n) => <a href={n.link} target="_blank"><StyledBtn style={{background:'#ff4791', color:'white'}}>{n.title}</StyledBtn></a>)}
        </>
        
        <ChangePlan>
            <StyledBtn style={{background:'#ff4791', color:'white'}}>Mudar plano</StyledBtn>
            <StyledBtn style={{background:'#FF4747', color:'white'}}>Cancelar plano</StyledBtn>
        </ChangePlan>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column ;
    align-items: center;
    h1{
        font-size: 24px;
    }
    span{
        width: 303px;
    }
`

const UserPosition = styled.div`
    position: relative;
    top: 30px;
    right: 20px;
`

const LogoPosition = styled.div`
    position: relative;
    top:30px;
    left: 20px;
    margin-bottom: 100px;
    
`

const StyledBtn = styled.button`
        border: none;
        width:303px ;
        height: 45px;
        border-radius: 5px;
        margin-bottom: 5px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
        color: #414141;
        ::placeholder{
        color:#dbdbdb;    
        }
        
`

const ChangePlan = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column ;
    position: fixed;
    bottom: 15px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`