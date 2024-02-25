"use client"
import { useContext, useEffect, useState } from "react"
import style from "./hero.module.css"
import IdiomaService from "@/app/services/IdiomaServcice"
import Skills from "../skills/Skills"
import Image from "next/image"
import Link from "next/link"

function servicosPT(){
    return [
            "Desenvolvimento de sistemas",
            "Criação de sites",
            "Banco de dados",
            "Migração de dados"
           ]
}

function servicosEN(){
    return [
            "System development",
            "Websites developer",
            "Database Analysts",
            "Data migration"
           ]
}

export default function Hero(){   
    const {idioma} = useContext(IdiomaService);
    
    const servicos = {
        'PT' : servicosPT(),
        "EN" : servicosEN()
    }

    const facaContatoLinkedin={
        "PT": "Encontre-me no Linkedin",
        "EN": "Find me in Linkedin"
    }

    const facaContatoTelefone={
        "PT": "Telefone (Whatsapp)",
        "EN": "Phone (Whatsapp)"
    }

    const facaContatoEmail={
        "PT": "Me envie um E-mail",
        "EN": "Send me a e-mail"
    }
    
    return (
        <div className={style.hero}>     
            <h1>Raphael Filipe Mattos</h1>  
            <div className={style.contato}>
                <div>
                    <Link
                        href="https://www.linkedin.com/in/raphael-mattos-70124823a/"
                        target="_blank"
                        >
                            <Image
                            src={"/assets/img/linkedin.png"}
                            alt="Linkedin"
                            title={facaContatoLinkedin[idioma]}
                            width={25}
                            height={25}
                            />
                    </Link>                 
                </div>
                <div>
                    <Link
                        href="https://github.com/raphaelfilipemattos"
                        target="_blank"
                        >
                            <Image
                            src={"/assets/img/git.png"}
                            alt="Github"
                            title="Github"
                            width={25}
                            height={25}
                            />
                    </Link>                 
                </div>
               <div>
                    <Link
                       href={"HTTPS://wa.me/5521985892803"}
                       target="_blank"
                    >
                        <Image
                            src={"/assets/img/zap.png"}
                            alt={facaContatoTelefone[idioma]}
                            title={facaContatoTelefone[idioma]}
                            width={25}
                            height={25}
                            />    
                    </Link>       
                      <span>+ 55 21 98589-2803</span>  
                </div>                       
                       
                <div>                    
                    <Link
                    href="mailto:desenvolvimentohrm@gmail.com"                    
                    >
                        <Image
                        src={"/assets/img/mail.png"}
                        alt="E-mail"
                        title={facaContatoEmail[idioma]}
                        width={25}
                        height={25}
                        />
                        <span className={style.email}>desenvolvimentohrm@gmail.com</span>
                    </Link>                 
                </div>  
            </div>               
            <ul className={style.lista_hero}>
                {servicos[idioma].map((servico,index) => {
                    return (<li key={index}>{servico}</li>);
                })}
            </ul>

            <Skills/>
           
        </div>

    );
}