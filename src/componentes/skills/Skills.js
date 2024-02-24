import ExperienciasModel from "@/models/ExperienciasModel";
import Secao from "../secao/Secao";
import style from "./skill.module.css"

export default function Skills(){

    const experiencias = ExperienciasModel("PT");

    const tecnologias = []
    const tecnologiasUsadas = experiencias.map(exp => exp.tecnologias.split(";"))
    tecnologiasUsadas.map(skill => {        
        skill.map(data => {
            data = data.trim();
            if (tecnologias.indexOf(data) < 0){
                tecnologias.push(data);
            }
        })
        
    });
    
    return (
        <div>  
            <h1>Skills</h1>          
            
                <ul className={style.lista_skills}>
                    {tecnologias.map((tecnologia, index) => {
                        return (
                            <li key={index}>
                                {tecnologia}
                            </li>
                        )
                    })}
                </ul>
            
        </div>
    );

}