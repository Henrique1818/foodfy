const recipeCard = document.querySelectorAll('.card')

for(let i = 0; i < recipeCard.length; i++) {
    recipeCard[i].addEventListener("click", () => {
        window.location.href = `/recipes/${i}`
    })
}

// Show and Hide
const recipeInfo = document.querySelectorAll(".topic-content")
const spans = document.querySelectorAll(".span")

for(let i = 0; i < spans.length; i++) {

    spans[i].addEventListener("click", function() {
        if (recipeInfo[i].classList.toggle('hide')) {
            recipeInfo[i].classList.add('hide')
            recipeInfo[i].classList.remove('show')

            spans[i].innerHTML = "show"
        } else {
            recipeInfo[i].classList.add('show')
            recipeInfo[i].classList.remove('hide')
            spans[i].innerHTML = 'hide'
        }
    })
}