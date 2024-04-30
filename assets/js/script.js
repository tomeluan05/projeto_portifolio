// TYPING ANIMATION
let typed = new Typed(".typing", {
    strings: ["", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
})

// ASIDE

const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll('li'),
      totalNavList = navlist.length,
      allSection = document.querySelectorAll('.section'),
      totalSection = allSection.length;

      for(let i = 0; i < totalNavList; i++){
        const a = navlist[i].querySelector('a')
        a.addEventListener('click', function(){

            removeBackSection();
            for(let j = 0; j < totalNavList; j++){
                if(navlist[j].querySelector('a').classList.contains('active')){
                    addBackSection(j)
                }
                navlist[j].querySelector('a').classList.remove('active')
            }
            this.classList.add('active')
            showSection(this)
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
      }

      function showSection(element){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector('#' + target).classList.add('active')
      }

      function addBackSection(num){
        allSection[num].classList.add('back-section')
      }

      function removeBackSection(){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("back-section")
        }
      }

      function updateNav(element){
        for(let i = 0; i < totalNavList; i++){
            navlist[i].querySelector('a').classList.remove('active')
            const target = element.getAttribute("href").split("#")[1];

            if(target === navlist[i].querySelector('a').getAttribute('href').split("#")[1]){
                navlist[i].querySelector('a').classList.add('active')
            }
        }
      }

      document.querySelector('.hire-me').addEventListener('click', function(){
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex)
        showSection(this)
        updateNav(this)
        removeBackSection()
        addBackSection()
        addBackSection(sectionIndex)
      })

      const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');

// Adiciona um event listener ao botão do menu para abrir e fechar o menu
navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
});

// Adiciona um event listener ao documento para capturar cliques em qualquer lugar da tela
document.addEventListener('click', (event) => {
    const isMenuOpen = aside.classList.contains('open');
    // Verifica se o clique não ocorreu dentro do menu aberto
    if (isMenuOpen && event.target !== navTogglerBtn && !aside.contains(event.target)) {
        asideSectionTogglerBtn(); // Fecha o menu
    }
});

// Função para abrir e fechar o menu
function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}


    //   const navTogglerBtn = document.querySelector('.nav-toggler'),
    //         aside = document.querySelector('.aside');
    //         navTogglerBtn.addEventListener('click', ()=>{
    //             asideSectionTogglerBtn();
    //         })
    //         function asideSectionTogglerBtn(){
    //             aside.classList.toggle("open")
    //             navTogglerBtn.classList.toggle('open');
    //             for(let i = 0; i < totalSection; i++){
    //                 allSection[i].classList.toggle("open");
    //             }
    //         }

// OTHER LANGUAGES

// Arquivo lang-pt.json
const langPT = {
    // TYPING
    typing_language: "Desenvolvedor Web Front-End",

    // TEXTOS DO MENU 
    inicio_language: "Início",
    about_language: "Sobre",
    services_language: "Serviços",
    portfolio_language: "Portfolio",
    contact_language: "Contato",

    // TEXTOS DA PAGINA INICIAL
    titulo: "Olá, meu nome é ",
    primeiro_paragrafo_language: "Eu sou um ",
    segundo_paragrafo_language: "Sou um desenvolvedor web com experiência há mais de 3 anos. Minha especialidade é criar sites interativos, design gráfico e muito mais...",
    botao_download_language: "Baixar CV",

    // MENU FERRAMENTAS
    tradutor_language: "Traduzir",
    tema_cores_language: "Tema de Cores",

    // SOBRE MIM
    sobre_mim_titulo_language: "Sobre mim",
    sobre_mim_subtitulo_language1: "Eu sou Tome Luan e ",
    sobre_mim_subtitulo_language2: "Desenvolvedor Web",

    sobre_mim_paragrafo_language: "Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",

    sobre_mim_aniversario: "Data Nascimento : ",
    sobre_mim_idade: "Idade : ",
    sobre_mim_website: "Site : ",
    sobre_mim_grau: "Grau : ",
    sobre_mim_telefone: "Telefone : ",
    sobre_mim_cidade: "Cidade : ",
    sobre_mim_freelance: "Disponível",
    sobre_mim_botao_hire_me: "Contrate-me",
    educacao_language: "Educação",
    experiencia_language: "Experiência",
    educacao_language_titulo1: "Mestrado em Ciência da Computação 1",
    educacao_language_titulo2: "Mestrado em Ciência da Computação 2",
    educacao_language_titulo3: "Mestrado em Ciência da Computação 3",
    experiencia_language_titulo1: "Mestrado em Ciência da Computação 1",
    experiencia_language_titulo2: "Mestrado em Ciência da Computação 2",
    experiencia_language_titulo3: "Mestrado em Ciência da Computação 3",

    educacao_language_paragrafo1: "PARAGRAFO1 Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    educacao_language_paragrafo2: "PARAGRAFO2 Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    educacao_language_paragrafo3: "PARAGRAFO3 Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",

    experiencia_language_paragrafo1: "PARAGRAFO1 Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    experiencia_language_paragrafo2: "PARAGRAFO2 Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    experiencia_language_paragrafo3: "PARAGRAFO3 Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    
    // SERVICOS
    servico_language: "Serviços",
    servico_language_titulo1: "Web Design PT 1",
    servico_language_titulo2: "Web Design PT 2",
    servico_language_titulo3: "Web Design PT 3",
    servico_language_titulo4: "Web Design PT 4",
    servico_language_titulo5: "Web Design PT 5",
    servico_language_titulo6: "Web Design PT 6",

    servico_language_paragrafo1: "PARAGRAPH 1 BR - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo2: "PARAGRAPH 2 BR - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo3: "PARAGRAPH 3 BR - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo4: "PARAGRAPH 4 BR - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo5: "PARAGRAPH 5 BR - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo6: "PARAGRAPH 6 BR - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",

    // PORTFOLIO
    portfolio_language_titulo: "Portfólio",
    portfolio_language_subtitulo: "Meus últimos projetos :",

    // CONTATO
    contact_language_titulo: "Contato",
    contact_language_subtitulo1: "Você tem alguma dúvida ?",

    contact_language_subtitulo2: "Estou disponível para seus serviços",

    contact_telefone_titulo: "Me ligue",
    contact_escritorio: "Escritório",
    // contact_escritorio: "Escritório",
    contact_site: "Site",

    // FORMULARIO
    form_language_enviar_mensagem: "Enviar Mensagem"


};

// Arquivo lang-en.json
const langEN = {
    // TYPING
    typing_language: "Front-End Web Developer",

    // TEXTOS DO MENU 
    inicio_language: "Home",
    about_language: "About",
    services_language: "Services",
    portfolio_language: "Portfolio",
    contact_language: "Contact",

    // TEXTOS DA PAGINA INICIAL
    titulo: "Hello, my name is ",
    primeiro_paragrafo_language: "I'm a ",
    segundo_paragrafo_language: "I'm a web Developer with experience for over 3 years. My expertise is to create and website interactive, graphic design, and many more...",
    botao_download_language: "Download CV",

    // MENU FERRAMENTAS
    tradutor_language: "Translate",
    tema_cores_language: "Theme Colors",

    // SOBRE MIM
    sobre_mim_titulo_language: "About me",
    sobre_mim_subtitulo_language1: "I'm Tome Luan and ",
    sobre_mim_subtitulo_language2: "Web Developer",
    
    sobre_mim_paragrafo_language: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus assumenda eius alias impedit officia veniam ullam in, ipsa optio id odit aliquid ratione temporibus voluptatum dolorem magni modi nemo beatae?",

    sobre_mim_aniversario: "Birthday : ",
    sobre_mim_idade: "Age : ",
    sobre_mim_website: "Website : ",
    sobre_mim_grau: "Degree : ",
    sobre_mim_telefone: "Phone : ",
    sobre_mim_cidade: "City : ",
    sobre_mim_freelance: "Available",
    sobre_mim_botao_hire_me: "Hire me",
    educacao_language: "Education",
    experiencia_language: "Experience",

    educacao_language_titulo1: "Master in Computer Cience 1",
    educacao_language_titulo2: "Master in Computer Cience 2",
    educacao_language_titulo3: "Master in Computer Cience 3",
    experiencia_language_titulo1: "Master in Computer Cience 1",
    experiencia_language_titulo2: "Master in Computer Cience 2",
    experiencia_language_titulo3: "Master in Computer Cience 3",

    // SERVICOS
    servico_language: "Services",
    servico_language_titulo1: "Web Design EN 1",
    servico_language_titulo2: "Web Design EN 2",
    servico_language_titulo3: "Web Design EN 3",
    servico_language_titulo4: "Web Design EN 4",
    servico_language_titulo5: "Web Design EN 5",
    servico_language_titulo6: "Web Design EN 6",

    servico_language_paragrafo1: "PARAGRAPH 1 EN - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo2: "PARAGRAPH 2 EN - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo3: "PARAGRAPH 3 EN - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo4: "PARAGRAPH 4 EN - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo5: "PARAGRAPH 5 EN - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",
    servico_language_paragrafo6: "PARAGRAPH 6 EN - Aqui tem um texto lorem ipsum que está nesse campo no lugar de um paragrafo falando sobre mim e contém 25 palavras para preencher o conteudo.",

    // PORTFOLIO
    portfolio_language_titulo: "Portfolio",
    portfolio_language_subtitulo: "My Last Projects :",

    // CONTACT
    contact_language_titulo: "Contact",
    contact_language_subtitulo1: "Have You Any Questions ?",
    contact_language_subtitulo2: "I'm at your services",

    contact_telefone_titulo: "Call me",
    contact_escritorio: "Office",
    contact_site: "Website",

    // FORMULARIO
    form_language_enviar_mensagem: "Send Message"

};

let idiomaAtual = 'pt'; // Padrão para português

function carregarIdioma(idioma) {
    if (idioma === 'en') {
        return langEN;
    } else {
        return langPT;
    }
}

function atualizarConteudo(idioma) {
    const traducoes = carregarIdioma(idioma);

    // TYPED
    typed.strings[1] = traducoes.typing_language;

    // MENU INICIAL
    const home_language = document.getElementById('home_language')
    home_language.childNodes[1].textContent = traducoes.inicio_language;
    const about_language = document.getElementById('about_language')
    about_language.childNodes[1].textContent = traducoes.about_language;
    const services_language = document.getElementById('services_language')
    services_language.childNodes[1].textContent = traducoes.services_language;
    const contact_language = document.getElementById('contact_language')
    contact_language.childNodes[1].textContent = traducoes.contact_language;

    // TEXTOS DA HOME PAGE
    const texto_inicio_language = document.getElementById('hello_id')
    texto_inicio_language.childNodes[0].textContent = traducoes.titulo;
    const primeiro_paragrafo_language = document.getElementById('primeiro_paragrafo_language')
    primeiro_paragrafo_language.childNodes[0].textContent = traducoes.primeiro_paragrafo_language;
    const segundo_paragrafo_language = document.getElementById('segundo_paragrafo_language')
    segundo_paragrafo_language.textContent = traducoes.segundo_paragrafo_language;
    const botao_download_language = document.getElementById('botao_download_language')
    botao_download_language.textContent = traducoes.botao_download_language;

    // MENU FERRAMENTAS
    const tema_cores_language = document.getElementById('tema_cores_language')
    tema_cores_language.textContent = traducoes.tema_cores_language;
    const tradutor_language = document.getElementById('tradutor_language')
    tradutor_language.textContent = traducoes.tradutor_language;

    // SOBRE MIM
    const sobre_mim_titulo_language = document.getElementById('sobre_mim_titulo_language')
    sobre_mim_titulo_language.textContent = traducoes.sobre_mim_titulo_language;
    
    const sobre_mim_subtitulo_language1 = document.getElementById('sobre_mim_subtitulo_language')
    sobre_mim_subtitulo_language1.childNodes[0].textContent = traducoes.sobre_mim_subtitulo_language1;

    const sobre_mim_subtitulo_language2 = document.getElementById('sobre_mim_subtitulo_language')
    sobre_mim_subtitulo_language2.childNodes[1].textContent = traducoes.sobre_mim_subtitulo_language2;

    const sobre_mim_paragrafo_language = document.getElementById('sobre_mim_paragrafo_language')
    sobre_mim_paragrafo_language.textContent = traducoes.sobre_mim_paragrafo_language;

    const sobre_mim_aniversario = document.getElementById('sobre_mim_aniversario')
    sobre_mim_aniversario.childNodes[0].textContent = traducoes.sobre_mim_aniversario;

    const sobre_mim_idade = document.getElementById('sobre_mim_idade')
    sobre_mim_idade.childNodes[0].textContent = traducoes.sobre_mim_idade;

    const sobre_mim_website = document.getElementById('sobre_mim_website')
    sobre_mim_website.childNodes[0].textContent = traducoes.sobre_mim_website;

    const sobre_mim_grau = document.getElementById('sobre_mim_grau')
    sobre_mim_grau.childNodes[0].textContent = traducoes.sobre_mim_grau;

    const sobre_mim_telefone = document.getElementById('sobre_mim_telefone')
    sobre_mim_telefone.childNodes[0].textContent = traducoes.sobre_mim_telefone;

    const sobre_mim_cidade = document.
    getElementById('sobre_mim_cidade')
    sobre_mim_cidade.childNodes[0].textContent = traducoes.sobre_mim_cidade;

    const sobre_mim_freelance = document.getElementById('sobre_mim_freelance')
    sobre_mim_freelance.childNodes[1].textContent = traducoes.sobre_mim_freelance;
    
    const sobre_mim_botao_hire_me = document.getElementById('sobre_mim_botao_hire_me')
    sobre_mim_botao_hire_me.textContent = traducoes.sobre_mim_botao_hire_me;

    // EDUCACAO
    const educacao_language = document.getElementById('educacao_language')
    educacao_language.textContent = traducoes.educacao_language;
    // EXPERIENCIA
    const experiencia_language = document.getElementById('experiencia_language')
    experiencia_language.textContent = traducoes.experiencia_language;

    const educacao_language_titulo1 = document.getElementById('educacao_language_titulo1')
    educacao_language_titulo1.textContent = traducoes.educacao_language_titulo1;

    const educacao_language_titulo2 = document.getElementById('educacao_language_titulo2')
    educacao_language_titulo2.textContent = traducoes.educacao_language_titulo2;

    const educacao_language_titulo3 = document.getElementById('educacao_language_titulo3')
    educacao_language_titulo3.textContent = traducoes.educacao_language_titulo3;

    const educacao_language_paragrafo1 = document.getElementById('educacao_language_paragrafo1')
    educacao_language_paragrafo1.textContent = traducoes.educacao_language_paragrafo1;
    
    const educacao_language_paragrafo2 = document.getElementById('educacao_language_paragrafo2')
    educacao_language_paragrafo2.textContent = traducoes.educacao_language_paragrafo2;

    const educacao_language_paragrafo3 = document.getElementById('educacao_language_paragrafo3')
    educacao_language_paragrafo3.textContent = traducoes.educacao_language_paragrafo3;

    // EXPERIENCIA
    const experiencia_language_titulo1 = document.getElementById('experiencia_language_titulo1')
    experiencia_language_titulo1.textContent = traducoes.experiencia_language_titulo1;

    const experiencia_language_titulo2 = document.getElementById('experiencia_language_titulo2')
    experiencia_language_titulo2.textContent = traducoes.experiencia_language_titulo2;

    const experiencia_language_titulo3 = document.getElementById('experiencia_language_titulo3')
    experiencia_language_titulo3.textContent = traducoes.experiencia_language_titulo3;

    const experiencia_language_paragrafo1 = document.getElementById('experiencia_language_paragrafo1')
    experiencia_language_paragrafo1.textContent = traducoes.experiencia_language_paragrafo1;
    
    const experiencia_language_paragrafo2 = document.getElementById('experiencia_language_paragrafo2')
    experiencia_language_paragrafo2.textContent = traducoes.experiencia_language_paragrafo2;

    const experiencia_language_paragrafo3 = document.getElementById('experiencia_language_paragrafo3')
    experiencia_language_paragrafo3.textContent = traducoes.experiencia_language_paragrafo3;

    const servico_language = document.getElementById('servico_language')
    servico_language.textContent = traducoes.servico_language;

    // SERVICOS TITULOS

    const servico_language_titulo1 = document.getElementById('servico_language_titulo1')
    servico_language_titulo1.textContent = traducoes.servico_language_titulo1;

    const servico_language_titulo2 = document.getElementById('servico_language_titulo2')
    servico_language_titulo2.textContent = traducoes.servico_language_titulo2;

    const servico_language_titulo3 = document.getElementById('servico_language_titulo3')
    servico_language_titulo3.textContent = traducoes.servico_language_titulo3;

    const servico_language_titulo4 = document.getElementById('servico_language_titulo4')
    servico_language_titulo4.textContent = traducoes.servico_language_titulo4;

    const servico_language_titulo5 = document.getElementById('servico_language_titulo5')
    servico_language_titulo5.textContent = traducoes.servico_language_titulo5;

    const servico_language_titulo6 = document.getElementById('servico_language_titulo6')
    servico_language_titulo6.textContent = traducoes.servico_language_titulo6;

    // SERVICOS PARAGRAFOS
    const servico_language_paragrafo1 = document.getElementById('servico_language_paragrafo1')
    servico_language_paragrafo1.textContent = traducoes.servico_language_paragrafo1;

    const servico_language_paragrafo2 = document.getElementById('servico_language_paragrafo2')
    servico_language_paragrafo2.textContent = traducoes.servico_language_paragrafo2;

    const servico_language_paragrafo3 = document.getElementById('servico_language_paragrafo3')
    servico_language_paragrafo3.textContent = traducoes.servico_language_paragrafo3;

    const servico_language_paragrafo4 = document.getElementById('servico_language_paragrafo4')
    servico_language_paragrafo4.textContent = traducoes.servico_language_paragrafo4;

    const servico_language_paragrafo5 = document.getElementById('servico_language_paragrafo5')
    servico_language_paragrafo5.textContent = traducoes.servico_language_paragrafo5;

    const servico_language_paragrafo6 = document.getElementById('servico_language_paragrafo6')
    servico_language_paragrafo6.textContent = traducoes.servico_language_paragrafo6;

    // PORTFOLIO
    const portfolio_language_titulo = document.getElementById('portfolio_language_titulo')
    portfolio_language_titulo.textContent = traducoes.portfolio_language_titulo;

    const portfolio_language_subtitulo = document.getElementById('portfolio_language_subtitulo')
    portfolio_language_subtitulo.textContent = traducoes.portfolio_language_subtitulo;
    
    // CONTATO
    const contact_language_titulo = document.getElementById('contact_language_titulo')
    contact_language_titulo.textContent = traducoes.contact_language_titulo;

    const contact_language_subtitulo1 = document.getElementById('contact_language_subtitulo1')
    contact_language_subtitulo1.textContent = traducoes.contact_language_subtitulo1;

    const contact_language_subtitulo2 = document.getElementById('contact_language_subtitulo2')
    contact_language_subtitulo2.textContent = traducoes.contact_language_subtitulo2;

    const contact_telefone_titulo = document.getElementById('contact_telefone_titulo')
    contact_telefone_titulo.textContent = traducoes.contact_telefone_titulo;

    const contact_escritorio = document.getElementById('contact_escritorio')
    contact_escritorio.textContent = traducoes.contact_escritorio;

    const contact_site = document.getElementById('contact_site')
    contact_site.textContent = traducoes.contact_site;

    const form_language_enviar_mensagem = document.getElementById('form_language_enviar_mensagem')
    form_language_enviar_mensagem.textContent = traducoes.form_language_enviar_mensagem;

}

function mudarIdioma(idioma) {
    idiomaAtual = idioma;
    atualizarConteudo(idioma);
}

// Carregar o conteúdo inicial
atualizarConteudo(idiomaAtual);

