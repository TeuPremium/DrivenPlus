import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../CommonAssets/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import UserContext from "../Contexts/UserContext";
import GlobalStyle from "../../Styles/GlobalStyle";
import URL from "../CommonAssets/URL";
import NameContext from "../Contexts/NameContext";


export default function () {

const { register, handleSubmit, watch, formState: { errors } } = useForm();
const navigate = useNavigate()
const {setToken} = useContext(AuthContext)
const {setUser} = useContext(UserContext)
const {setName} = useContext(NameContext)

function onSubmit(data){ 
    const submitData = axios.post(`${URL}/login`, data)
    submitData.then((res) =>{
            console.log(res.data)
            res.data.membership ? navigate('/home') : navigate('/subscriptions')
            setToken(res.data.token)
            setUser(res.data)
            setName(res.data.name)
            })
    
    submitData.catch((err) => {
        alert(err.response.data.message)
    })
    
    }


return (

    <Container>
        <GlobalStyle color="#0e0e13"></GlobalStyle>
        <img src="./Driven.svg"/>

        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div><input placeholder="email" id='email' name="email" type="email" {...register("email", {required:true})} /></div>
        {errors.email && <div><h3>Insira seu Email</h3></div>}
        
        <div><input id='pwd' name="pwd" placeholder="senha" type="password" {...register("password", { required: true })} /></div>
        {errors.password && <div><h3>Digite sua senha correta!</h3></div>}

        
    <SubmitBtn> <input value="Entrar" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
        
    </form>
         <Link to='/sign-up'>
         <LoginHook> Nao possui uma conta? Cadastre-se.</LoginHook>
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
    img{
    margin-top: 80px;
    margin-bottom: 80px ;
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