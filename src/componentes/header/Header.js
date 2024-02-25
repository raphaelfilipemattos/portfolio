"use client"
import IdiomaModel from "@/models/IdiomaModel";
import Image from "next/image";
import Link from "next/link";
import style from  "./header.module.css";
import IdiomaService from "@/app/services/IdiomaServcice";
import { useContext, useState } from "react";
import Hero from "../hero/Hero";

export default function Header({children}){        
    const [idioma, setIdioma] = useState("PT");
    
    function setIdiomaContext(sigla){         
        setIdioma(sigla)
    }

    function MenusPT(){
        return [
            {
                link: "/#formacao",
                descricao: "Formação Acadêmica"
            },
            {
                link: "/#trabalhos",
                descricao: "Trabalhos realizados"
            },
            {
                link: "/#experiencias",
                descricao: "Experiências profisionais"
            }
        ]
    }

    function MenusEN(){
        return [
            {
                link: "/#formacao",
                descricao: "Academic Education"
            },
            {
                link: "/#trabalhos",
                descricao: "Works"
            },
            {
                link: "/#experiencias",
                descricao: "Professional experiences"
            }
        ]
    }


    const menus = {
        "PT": MenusPT(),
        "EN": MenusEN(),
    }

    return (
        <>        
            <nav className={style.nav+ " navbar navbar-expand-lg bg-body-tertiary"}>                
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <Image 
                            src={"/assets/img/perfil.jpg"}
                            width={100}
                            height={100}
                            className={style.foto_perfil}
                            alt="Perfil"
                        />
                    </Link>
                    <span className="navbar-text">
                        <ul className={style.lista_idiomas +" d-flex direcion-column"}>
                            {IdiomaModel().map(idioma => {

                                return (<li key={idioma.sigla}>
                                        <a 
                                        href="#" 
                                        title={idioma.descricao}                                      
                                        > 
                                            <Image 
                                                alt={"Idioma "+idioma.sigla}
                                                width={64}
                                                height={64}
                                                src={idioma.bandeira} 
                                                className={style.bandeira}
                                                onClick={event => {                                                
                                                    event.preventDefault(); 
                                                    setIdiomaContext(idioma.sigla)}}
                                                />
                                        </a>
                                </li>)
                            })} 
                        </ul>   
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            menus[idioma].map((menu,index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link" href={menu.link}>{menu.descricao}</a>
                                    </li>
                                )
                            })
                        }                      
                    
                    </ul>                
                    
                    </div>
                </div>
                </nav>
                <IdiomaService.Provider value={{ idioma, setIdioma }}>
                <div className="row">
                    <div className="col-md-3">
                        <Hero/>
                    </div>
                    <div className="col-md-9">              
                            {children}
                    </div>
                </div>

                </IdiomaService.Provider>
            </>


    );
}