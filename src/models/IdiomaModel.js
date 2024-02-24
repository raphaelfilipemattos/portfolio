function Idioma(sigla,descricao,bandeira){
    this.sigla = sigla;
    this.descricao = descricao;
    this.bandeira = bandeira;
}

export default function IdiomaModel(){
    const idiomas = Array();
    idiomas.push( new Idioma("PT","Portugês", "/assets/img/pt.png") )
    idiomas.push( new Idioma("EN","English", "/assets/img/en.png") )
    
    return idiomas;
    

}