const createFilters = () => {
    const categories = ["Beer", "Snacks", "Distillates"]

    for(let i of categories){
        let icon = document.createElement("i")
        icon.className = "fas fa-beer"
        icon.id = i
        icon.innerHTML = i
        filterHtml.appendChild(boton)
        boton.addEventListener("click", () => filtrate(i))
    }    
}


let buy = document.createElement("button")
buy.className = "buy"
$("#cart").prepend(buy)