// toggle style switcher

// FORMA 1 DE FAZER SEM FECHAR O MODAL AO CLICAR EM OUTRO LUGAR DA TELA
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
// styleSwitcherToggle.addEventListener('click', ()=>{
//     document.querySelector('.style-switcher').classList.toggle('open')
// })

// FORMA 2 DE FAZER FECHANDO O MODAL AO CLICAR EM OUTRO LUGAR DA TELA
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// Função para fechar o modal
function fecharModal() {
    document.querySelector('.style-switcher').classList.remove('open');
}
// Adiciona um event listener ao documento para capturar cliques
document.addEventListener('click', function(event) {
    var modal = document.querySelector('.style-switcher');
    // Verifica se o clique ocorreu fora do modal
    if (!modal.contains(event.target) && !event.target.classList.contains('style-switcher-toggler')) {
        fecharModal();
    }
});
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});


// hide style switcher on scroll
window.addEventListener('scroll', ()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

// theme colors
const alternateStyles = document.querySelectorAll('.alternate-style')

function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }

        else{
            style.setAttribute("disabled", "true")
        }
    })
}


// THEME LIGHT AND DARK MODE
const dayNight = document.querySelector('.day-night')
dayNight.addEventListener('click', ()=>{
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})
window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')
    }
    else{
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})