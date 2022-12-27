import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../CommonAssets/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../Styles/GlobalStyle";
import URL from "../CommonAssets/URL";


export default function () {

const { register, handleSubmit, watch, formState: { errors } } = useForm();
const navigate = useNavigate()


function onSubmit(data){ 
    const submitData = axios.post(`${URL}sign-up`, data)
    submitData.then((res) =>{
            navigate('/')
            })
    
    submitData.catch((err) => {
        alert(err.response.data.message)
    })
    }




return (

    <Container>
        <GlobalStyle color="#0e0e13"></GlobalStyle>

        <Logo></Logo>

        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div><input placeholder="Nome Completo" id='email' name="email" type="text" {...register("name", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu nome completo</h3></div>}

        <div><input placeholder="CPF" id='email' name="email" type="number" {...register("cpf", {required:true})} /></div>
        {errors.email && <div><h3>Digite Seu CPF</h3></div>}

        <div><input placeholder="email" id='email' name="email" type="email" {...register("email", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="senha" type="password" {...register("password", { required: true })} /></div>
        {errors.password && <div><h3>Digite sua senha</h3></div>}
        
    <SubmitBtn> <input value="Cadastrar" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>

    </form>
         <Link to='/'>
         <LoginHook> Ja possui uma conta? Faca login.</LoginHook>
         </Link>
    </Container>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 65px;
    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 15px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
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
const LoginHook = styled.div`
    margin-top: 25px;
    color:white;
    font-size: 14px;
    text-decoration: underline;
`