function Formacao( escola, curso){
    this.escola = escola;
    this.curso = curso;
}

function formacaoPT(){
    const formacoes = new Array();
    formacoes.push(new Formacao("FAETEC", "Técnico de Informática")); 
    formacoes.push(new Formacao("Universidade Estácio de Sá", "Engenharia de Controle e Automação"));    
    
    return formacoes;
}

function formacaoEN(){
    const formacoes = new Array();
    
    formacoes.push(new Formacao( "FAETEC", "IT")); 
    formacoes.push(new Formacao("Universidade Estácio de Sá", "Control and Automation Engineering"));    
    
    return formacoes;
}


export default function FormacaoModel(idioma){
    const Formacaoidioma = {
        "PT" : formacaoPT(),
        "EN" : formacaoEN()
    }

    return Formacaoidioma[idioma];
}