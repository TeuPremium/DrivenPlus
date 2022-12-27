import { useContext, useState } from "react";
import NameContext from "./NameContext";
import AuthContext from "./AuthContext";
import UserContext from "./UserContext";

export default function(prop){

    console.log(prop)
    if(prop){
        localStorage.setItem('user', prop)
        console.log(localStorage.getItem('user'), prop)
}


    return(
        localStorage.getItem('user')
    )
}