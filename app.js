// Variable declaration
const categoryButton = document.querySelectorAll(".category")
const cards = document.querySelector(".cards")
// Functions declaration
const checkCategory = (e) =>{
    return e.target.innerText
}
const showCards = async (val) => {
    const res =await fetch(`https://swapi.dev/api/${val}`)
    const data = await res.json()
    console.log(data.results);
    data.results.forEach((result) => {
        const newDiv = document.createElement("div")
        newDiv.classList.add("card")
        
        if (val != "films") {
            newDiv.innerHTML= `<h2 class="card-title" >${result.name}</h2>`
        } else {
            newDiv.innerHTML= `<h2 class="card-title" >${result.title}</h2>`
        }
    cards.appendChild(newDiv)
    })
}
// Actions
categoryButton.forEach((button)=>{
    button.addEventListener("click", (e) => {
        e.stopPropagation()
        const btnContent = checkCategory(e);
        cards.innerHTML = ""
        showCards(btnContent)
    })
})