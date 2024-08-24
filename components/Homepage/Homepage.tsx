"use client"

import Header from "@/components/Header/Header"
import Button from "@/components/Button/Button"


export default function App(){
    return(
        <div>
            <Header text = "Халуми"/>
            <Button text = "Поесть халмуми" header="Халуми это гуд" сlicky = {()=> {alert("ХАЛУМИИИИ")}}/>
        </div>
    )
}