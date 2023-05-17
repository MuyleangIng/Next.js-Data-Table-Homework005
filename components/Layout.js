import React from "react";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";

export default function Layout({children}){
    return(
        <>
            <NavBarComponent/>
            <main>
                {children}
            </main>
            <FooterComponent/>
        </>
    )
}