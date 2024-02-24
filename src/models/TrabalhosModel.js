function trabalho(titulo, descricao, fotos){
    this.titulo = titulo;
    this.descricao = descricao;
    this.fotos = fotos;
}

function TrabalhosPT(){
    const jobs = new Array();
    jobs.push(new trabalho("EBLive","Desenvolvimento do sistema de stream de vídeo e repositório de vídeos do Exército Brasileiro. Participei de todas as fases do projeto.",["/assets/img/trabalhos/eblive.png"]));
    jobs.push(new trabalho("Sistema de gestão técnica","Sistema de secretaria para o ambiente virtual de aprendizagem. Realizo manutenção e suporte. ",["/assets/img/trabalhos/academico.png", "/assets/img/trabalhos/moodle.png"]));
    jobs.push(new trabalho("EBVirtual","Sistema de secretaria para o ambiente virtual de aprendizagem, mas destinado para o público infanto-juvenil. Realizo manutenção e suporte. ",["/assets/img/trabalhos/ebvirtual.png"]));
    
    return jobs;
}

function TrabalhosEN(){
    const jobs = new Array();
    jobs.push(new trabalho("EBLive","Development of the Brazilian Army's video stream system and video repository. I participated in all phases of the project.",["/assets/img/trabalhos/eblive.png"]));
    jobs.push(new trabalho("Sistema de gestão técnica","Management system for the virtual learning environment. I provide maintenance and support. ",["/assets/img/trabalhos/academico.png", "/assets/img/trabalhos/moodle.png"]));
    jobs.push(new trabalho("EBVirtual","Management system for the virtual learning environment, but aimed at children and young people. I provide maintenance and support.",["/assets/img/trabalhos/ebvirtual.png"]));

    return jobs;
}

export default function TrabalhosModel(idioma){
    const Jobs = {
        "PT": TrabalhosPT(),
        "EN": TrabalhosEN()
    }
    return Jobs[idioma];
}