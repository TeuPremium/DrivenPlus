import axios from "axios"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import GlobalStyle from "../../../Styles/GlobalStyle"
import Fail from "../../CommonAssets/Fail"
import Logo from "../../CommonAssets/Logo"
import AuthContext from "../../Contexts/AuthContext"
import UserContext from "../../Contexts/UserContext"
import URL2 from "../../CommonAssets/URL2"
import Loading from "../../CommonAssets/Loading"

export default function(){
    const {user} = useContext(UserContext)
    const {token} = useContext(AuthContext)
    const [plans, setPlans] = useState()
    useEffect( ()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const promise = axios.get(`${URL2}memberships`, config)
        promise.then((res) => {setPlans(res.data)})
        promise.catch(console.log)
        
    } ,[]
    )

    if(token){
        if(plans)
        {return(
        <Container>
        <GlobalStyle color='black'/>
        <span><h1>Escolha seu plano</h1></span>

        {plans.map((n) => <Link style={{textDecoration:'none'}} to={`/subscriptions/${n.id}`}>
        <PlanCard>
            <Logo src={n.image} ></Logo>
             <span><h2>R$ {n.price}</h2></span> 
        </PlanCard>
        </Link>)}

        </Container>
    )}
    else{
        return( 
            <>
            <GlobalStyle color="black"/>
                <Loading/>
            </>
        )
    }

    }
    else{
        return <Fail/>
    }
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
    box-sizing: border-box;
    padding-left: 15px;
    span{
        width: 110px;
        margin-left: 15px;
    }
    
`