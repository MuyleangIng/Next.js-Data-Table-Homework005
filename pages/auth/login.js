import React  from "react";
import NavbarComponent from "@/components/NavbarComponent";
import FootComponent from "@/components/FootComponent";

export default function login(){
    return(
        <div className='container'>
            <h1>login</h1>
        </div>
    )
}
login.getLayout = function getLayout(page){
    return (
        <>
    <main>{page}</main>
        </>
    )
}