import Modal from './modal.js'

const modal = Modal()


// pegar todos os botões que existem com a classe checkout
const checkButtons = document.querySelectorAll(".actions a.check")

//percorrer todos  os botões que existem dentro de checkbuttons
checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        modal.open()
    })
})