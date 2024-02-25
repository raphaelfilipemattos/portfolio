import TrabalhosModel from "@/models/TrabalhosModel";
import Secao from "../secao/Secao";
import Image from "next/image";
import style from "./trabalho.module.css"
import { useContext } from "react";
import IdiomaService from "@/app/services/IdiomaServcice";
import Link from "next/link";


export default function Trabalhos(){
    const {idioma} = useContext(IdiomaService);
    const jobs = TrabalhosModel(idioma);
    const titulo={
        "PT": "Alguns trabalhos realizados",
        "EN" : "Some work carried out "
    }

    return (
        <Secao>
            <div className={style.trabalho+ " card"} id="trabalhos">
                <div className="row text-center">
                    <h2>{titulo[idioma]}</h2>
                </div>
                <div className="card-body">
                    {jobs.map((job, index) => {
                        return (
                            <div className="card" key={index}>
                            <div className={" card-body row"} >                                
                                <div  className="col-md-2">
                                    {job.titulo}
                                </div>    
                                <div  className="col-md-3">
                                    {job.descricao}
                                </div>    
                                <div  className="col-md-5">
                                    <ul>
                                        {job.fotos.map((foto, indexFoto) => {
                                            return (
                                                <li key={indexFoto}>
                                                    <Link href={foto} target="_blanck" >
                                                        <Image 
                                                        
                                                        src={foto}
                                                        alt="Work"
                                                        width={500}
                                                        height={500}
                                                        className={style.imagem}
                                                        />
                                                     </Link>  
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>    
                            </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </Secao>

    );
}