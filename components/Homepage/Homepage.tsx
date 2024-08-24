"use client"

import Header from "@/components/Header/Header"
import Button from "@/components/Button/Button"

function Redirect() {
    location.href="http://localhost:3001/test";
 }

export default function Homepage(){
    return(
        <div>
            <Header text = "Халуми"/>
            <Button text = "Поесть халмуми" header="Халуми это гуд" сlick = {()=> Redirect()}/>
        </div>
    )
}