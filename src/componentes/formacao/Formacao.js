import FormacaoModel from "@/models/FormacaoModel";
import Secao from "../secao/Secao";
import style from "./formacao.module.css"
import IdiomaService from "@/app/services/IdiomaServcice";
import { useContext } from "react";

export default function Formacao(){
    const {idioma} = useContext(IdiomaService);
    const formacao = FormacaoModel(idioma);
    const titulo = {
        "PT": "Formação Acadêmica",
        "EN" : "Academic Education"
    }

    return (
        <Secao>
            <div className="card" id="formacao">
                <div className="row m-auto">
                    <h2>{titulo[idioma]}</h2>
                </div>                
                <div className="card-body">
                    <ul className={style.lista}>
                        {formacao.map((formacaoItem, key) => {
                            return (
                                <li key={key}>
                                    <span className={style.escola} >{formacaoItem.escola}</span> : <span  className={style.curso} >{formacaoItem.curso} </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div> 
        </Secao>

    );
}