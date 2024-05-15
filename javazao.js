const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')
const switchMode = document.querySelector('.switchMode')
const tema  = document.querySelector('#tema')

switchMode.onchange = function(){
    if(tema.textContent === 'Tema Claro'){
        tema.innerText = 'Tema Escuro'
    }else{
        tema.innerText = 'Tema Claro'
    }
}

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'light' : 'dark'
    elemento.setAttribute('data-bs-theme', modo)
})

