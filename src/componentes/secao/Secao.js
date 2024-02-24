import style from "./secao.module.css"
export default function Secao({children}){
    return (<section className={style.secao} > 
                {children}
            </section>)
}