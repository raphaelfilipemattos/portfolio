"use client"
import Formacao from "@/componentes/formacao/Formacao";
import Experiencias from "@/componentes/experiencias/Experiencas";
import Trabalhos from "@/componentes/trabalhos/Trabalhos";
import Header from "@/componentes/header/Header";


export default function Home() { 
  return (
    <main className="container-fluid">      
          <Header>            
            <Formacao />
            <Trabalhos/>
            <Experiencias/>
          </Header>
    </main>
  );
}
