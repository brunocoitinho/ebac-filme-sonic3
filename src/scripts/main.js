document.addEventListener("DOMContentLoaded", (event) => {
    const botaoMenu = document.querySelectorAll('.header__nav__link')
    const navItens = document.querySelectorAll('.header__nav__item')
       

    for (let i  = 0; i  < botaoMenu.length; i ++) {
        botaoMenu[i].addEventListener('click', (e) => {
            console.log(e.target.parentNode.classList)
            removeSelection(navItens)
            e.target.parentNode.classList.add('header__nav__item--is-selected')
        })
        
    }
});

function removeSelection(itens) {
    itens.forEach((item) => {
        item.classList.remove('header__nav__item--is-selected')
    } )
}