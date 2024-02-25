"use client"
import Experiencias from "@/componentes/experiencias/Experiencas";
import IdiomaService from "../services/IdiomaServcice";
function render(){
    return (<Experiencias/>);
}

export default function ExperienciasPage() {
   
    return (
     <IdiomaService.Consumer>
        {idioma => render(idioma)}
         
     </IdiomaService.Consumer>
    
    )
    
}