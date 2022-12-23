import GlobalStyle from "../../../Styles/GlobalStyle";
import styled from "styled-components";
import Logo from "../../CommonAssets/Logo";
import { useForm } from "react-hook-form";
import { useState } from "react";


export default function(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [benefits, setBenefits] = useState()
    const [price, setPrice] = useState()
    const onSubmit = data => console.log(data);


    console.log(watch("example")); 

    return(
        <Container>
        <GlobalStyle color='black'/>
        <Logo/>
        <Title><h1>Driven Plus</h1>
        <h3>Beneficios: {benefits}</h3>
        <h3>Preco: {price}</h3>
        </Title>


        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div><input placeholder="Nome impresso no cartao" id='name' name="name" type="name" {...register("cardName", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}

        <div><input placeholder="Digitos do cartao" id='email' name="email" type="number" {...register("cardNuber", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <LowerContainer>
        <div><input placeholder="codigo de seguranca" id='email' name="email" type="email" {...register("securityNumber", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="validade" type="" {...register("expirationDate", { required: true })} /></div>
        {errors.password && <div>Digite sua senha correta!</div>}
        </LowerContainer>

    <SubmitBtn> <input value="Cadastrar" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
    </form>
        {/* <CheckoutConfirm></CheckoutConfirm> */}

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
`
const LowerContainer = styled.div`
display: flex;
width: 303px;
justify-content: space-between;
input{
    width: 148px;
}
`