document.querySelector('.burger').addEventListener('click', event => {
    document.querySelector('.hidden_nav').classList.toggle('hide');
})

document.addEventListener('click', event => {
    if (!event.composedPath.contains('.burger') && !event.composedPath.contains('..hidden_nav')) {
        const menu = document.querySelector('.hidden_nav');
        if (!menu.classList.contains('hide')) {
            menu.classList.add('hide');
        }
    }
})

function matchFunc() {
    if (window.innerWidth >= 1100) {
        const menu = document.querySelector('.hidden_nav')
        if (!menu.classList.contains('hide')) {
            menu.classList.add('hide');
        }
    }
}

setInterval(matchFunc, 1000);