import GlobalStyle from "../../../Styles/GlobalStyle";
import styled from "styled-components";
import Logo from "../../CommonAssets/Logo";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import URL2 from "../../CommonAssets/URL2";
import AuthContext from "../../Contexts/AuthContext";
import UserContext from "../../Contexts/UserContext";
import { useContext } from "react";
import Loading from "../../CommonAssets/Loading";
import Fail from "../../CommonAssets/Fail";
import Price from "../../CommonAssets/PriceSVG";
import BenefitSVG from "../../CommonAssets/BenefitSVG";
import { useNavigate } from "react-router-dom";


export default function(){
    const {token} = useContext(AuthContext)
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [plan, setPlan] = useState()
    const [perks, setPerks] = useState()
    const {setUser} = useContext(UserContext)

    function onSubmit(data){
        data.membershipId = id
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log(data)
        const submitData = axios.post(`${URL2}`, data, config)
        submitData.then((res) =>{
                setUser(res.data)
                navigate('/home')
                })
        
        submitData.catch((err) => {
            alert(err.response.data.message)
        })
        }

    useEffect( ()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const promise = axios.get(`${URL2}memberships/${id}`, config)
        promise.then((res) => {setPlan(res.data); setPerks(res.data.perks)})
        promise.catch(console.log)
        
    } ,[]
    )
   
    

    if(token){if(plan){return(
        <Container>
        <GlobalStyle color='#0e0e13'/>
        <Title>
        <Logo src={plan.image}/>
        <span><h1>Driven Plus</h1></span>
        </Title>
        <Description>
        <h3><BenefitSVG/> Beneficios:</h3> {perks.map((n, index) => <h3 id={index}>{index+1}. {n.title}</h3>)}
        <div><h3><Price/> Preco:</h3> <h3>&emsp;&nbsp;R$ {plan.price}</h3></div>
        </Description>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} {...register("membershipId")}>
        
        <div><input placeholder="Nome impresso no cartao" id='name' name="name" type="name" {...register("cardName", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <div><input placeholder="Digitos do cartao" id='number' name="number" type="number" {...register("cardNumber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <LowerContainer>
        <div><input placeholder="codigo de seguranca" id='number' name="number" type="number" {...register("securityNumber", {required:true , valueAsNumber:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="validade" type="month" {...register("expirationDate", { required: true })} /></div>
        {errors.password && <div>Digite sua senha correta!</div>}
        </LowerContainer>
    <SubmitBtn> <input value="Cadastrar" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
    </form>
        </div>
        {/* <CheckoutConfirm></CheckoutConfirm> */}

        </Container>
    )}
    else{
        return(
        <>
        <GlobalStyle color="#0e0e13"></GlobalStyle>
        <Loading/>
        </>
        )
    }}
    else{
        return(<Fail/>)
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
    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 5px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 14px;
        color: #414141;
        ::placeholder{
        color:#dbdbdb;    
        }
        }
        form{
            margin-top: 70px;
        }
    
`

const SubmitBtn = styled.div`
    input{
        border: none;
    }
`

const CheckoutConfirm = styled.div`
    width: 248px;
    height: 210px;
    z-index: 1;
    background-color: white;
    position: fixed;
    top: 40%;
`

const Title = styled.div `
    width: 190px;
    position: relative;
    top:80px;
    
    span{
        position: relative;
    }
`
const LowerContainer = styled.div`
display: flex;
width: 303px;
justify-content: space-between;
input{
    width: 148px;
}
`

const Description = styled.div`
    width: 303px;
    position: relative;
    top: 60px;
    right: 13px;
    div{
        margin-top: 20px;
    }
`