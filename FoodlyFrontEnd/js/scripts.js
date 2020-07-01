const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.cards')


for(let card of cards) {
    card.addEventListener('click', () => {
    
        let imageID = card.getAttribute('id')
        let author = card.querySelector('p').innerHTML
        let title = card.querySelector('h3').innerHTML
    
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `./assets/${imageID}.png`
        modalOverlay.querySelector('.title').innerHTML = title
        modalOverlay.querySelector('.author').innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
    modalOverlay.querySelector('.title').innerHTML = ""
    modalOverlay.querySelector('.author').innerHTML = ""
})