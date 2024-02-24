function Experiencia(empresa, datainicial, datafinal, tecnologias, atividades){
    this.empresa = empresa;
    this.datainicial = datainicial;
    this.datafinal = datafinal;
    this.atividades = atividades;
    this.tecnologias = tecnologias;
}

function experienciaPT(){
    const empresas = new Array();
    empresas.push(new Experiencia("VVS Sistemas","08/2007","07/2010","Delphi; Firebird", "Manutenção de sistema desktop voltado para o comércio; Criação de relatórios; Suporte ao cliente; Migração de dados") );
    empresas.push(new Experiencia("Empresa Fácil","07/2010","10/2013","Delphi; FoxBase; MySQL", "Manutenção de sistema desktop voltado para o comércio; Migração de dados; Suporte ao cliente") );
    empresas.push(new Experiencia("Nasajon Sistemas","10/2013","08/2015","Delphi; PostgreSQL", "Manutenção de sistema desktop para escritório de contabilidade; Migração de dados") );
    empresas.push(new Experiencia("Tema Sistemas","09/2015","03/2016","Delphi; SQL Server", "Manutenção de sistema desktop para mercado financeiro") );
    empresas.push(new Experiencia("Infoideias","01/2017","07/2019","Delphi; MySQL; Oracle; Asp Classico;  PHP; CSS; JQuery", "Manutenção de sistema desktop para escola; Manutenção em sistemas web( um sistema em Asp classico e outro em PHP); Suporte ao cliente; análise de requisitos; levantamento de necessidades; gerenciamento de equipe; gerenciamento de projetos") );
    empresas.push(new Experiencia("Exército Brasileiro","08/2019","Atualmente",
                                  "PHP; MySQL; Oracle; PostgreSQL;Moodle; Linux; Jenkins; Unit 3D; Ionic; JQuery; Javascript; Python; Redis; React", 
                                  "Manutenção de sistemas web voltados para educação a distância; Gerenciamento de bancos de dados MySQL e PostgreSQL; "+
                                  "Administração de cloud própria com linux; gerenciamento do sistema LMS Moodle; análise de requisitos; "+
                                  "levantamento de necessidades; auto gerenciamento; gerenciamento de projetos; Suporte a usuários ") );
    return empresas;                                  
}

function experienciaEN(){
    const empresas = new Array();
    empresas.push(new  Experiencia("VVS Sistemas","08/2007","07/2010","Delphi; Firebird", "Desktop system maintenance for commerce; Creation of reports; Customer support; Data migration") );
    empresas.push(new  Experiencia("Empresa Fácil","07/2010","10/2013","Delphi; FoxBase; MySQL", "Desktop system maintenance for commerce; Data migration; Customer support") );
    empresas.push(new  Experiencia("Nasajon Sistemas","10/2013","08/2015","Delphi; PostgreSQL", "Desktop system maintenance for accounting office; Data migration") );
    empresas.push(new  Experiencia("Tema Sistemas","09/2015","03/2016","Delphi; SQL Server", "Desktop system maintenance for financial markets") );
    empresas.push(new  Experiencia("Infoideias","01/2017","07/2019","Delphi; MySQL; Oracle; Asp Classico;  PHP; CSS; JQuery; React", "Desktop system maintenance for school; Maintenance of web systems (one system in classic Asp and another in PHP); Customer support; requirements analysis; needs assessment; team management; project management") );
    empresas.push(new  Experiencia("Brazilian Army","08/2019","Current day",
                                  "PHP; MySQL; Oracle; PostgreSQL;Moodle; Linux; Jenkins; Unit 3D; Ionic; JQuery; Javascript; Python; Redis", 
                                  "Maintenance of web systems for distance education; Management of MySQL and PostgreSQL databases; "+
                                  "Own cloud administration with Linux; LMS Moodle system management; requirements analysis; "+
                                  "needs assessment; self-management; project management; user support") );
    return empresas;                                  
}


export default function ExperienciasModel(idioma){
    const resposta = {
        "PT": experienciaPT(),
        "EN": experienciaEN()
    }

    return resposta[idioma];
}