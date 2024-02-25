import ExperienciasModel from "@/models/ExperienciasModel";
import style from "./experiencia.module.css"
import Secao from "../secao/Secao";
import { useContext } from "react";
import IdiomaService from "@/app/services/IdiomaServcice";

export default function Experiencias(){
    const {idioma} = useContext(IdiomaService);
    const experienias = ExperienciasModel(idioma);
    const textos = {
        "PT": {
               titulo: "Experiências profisionais",
               periodo: "Período",
               atividade: "Atividades",
               tecnologias: "Tecnologias usadas"
            },
        "EN" : {
                titulo:  "Professional experiences",
                periodo: "Period",
                atividade: "Performed activities",
                tecnologias: "Technologies used"
              }

    }

    return (
        <Secao>
            <div className={style.experiencias+" card"} id="experiencias">
                <div className="row m-auto p-3">
                    <h1>{textos[idioma].titulo}</h1>
                </div>   
                <div className="card-body d-flex  flex-column flex-wrap  align-content-center">
                    {experienias.map((experieniaItem, key) => {                    
                        return (
                            <div key={key} className="mb-2 card">
                                <div className="row card-body m-auto p-4">
                                    <h3 className="fw-semibold">{experieniaItem.empresa}</h3>
                                    <h6 className="fs-6">{textos[idioma].periodo} {experieniaItem.datainicial} -&gt; {experieniaItem.datafinal} </h6>
                                </div>
                                <div className="row card-body p-3 m-auto ">    
                                    <div className="col-md-6">
                                        
                                        <div className="row card-body">
                                            <h5>{textos[idioma].tecnologias}</h5>
                                            <ul className={style.lista_tecnologias}>                                        
                                                {experieniaItem.tecnologias.split(";").map( (tec, key)=>{                                            
                                                    return (<li key={key}>
                                                                {tec}
                                                            </li>
                                                            )
                                                } )}

                                            </ul>
                                        </div>
                                    </div>    
                                    <div className="col-md-6 card-body">
                                        <h4>{textos[idioma].atividade}</h4>
                                        <ul className={style.lista_atividade}>
                                            {experieniaItem.atividades.split(";").map( (atv, key)=>{                                            
                                                    return (<li className={style.atividade} key={key}>
                                                                {atv}
                                                            </li>
                                                        )
                                                } )}
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