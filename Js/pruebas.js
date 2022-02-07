const createFilters = () => {
    const categories = ["Beer", "Snacks", "Distillates"]

    for(let i of categories){
        
        let filterContainer = document.createElement("div");
        filterContainer.setAttribute = ("id", "filterDiv");
        filterContainer.className = "filters-containers";
    
        filterHtml.appendChild(filterContainer);
    
        
        
        let filterIcon = document.createElement("i");
        filterIcon.className = `${i.className}`;
        filterIcon.id = i;
        filterIcon.innerHTML = i;
        
        filterContainer.appendChild(filterIcon);
        filterIcon.addEventListener("click", () => filtrate(i))
        
    }    
}



categories.push(new groups("Beer", "fas fa-beer", "Beer"));
categories.push(new groups("Snacks", "fas fa-hotdog", "Snacks"));
categories.push(new groups("Distillates", "fas fa-glass-martini-alt", "Distillates"));




saveStorage();
    for(i of cart){
        saveStorage(i.title, JSON.stringify(cart))
    
    }} 

const saveStorage = (cart, title) => {localStorage.setItem(cart, title)};



/*$(".buy-button").on("click", function(){

    let purchaseDiv = document.createElement("div");
    purchaseDiv.setAttribute("class", "purchase-div");

    purchaseDiv.innerHTML =`<form action="">
                                <legend class="text">Ya casi estamos! completa los siguientes datos</legend>
                                <label for="adress">
                                    <span class="text">Indicanos tu dirección</span>
                                    <input type="text" name="adress">
                                </label>
                                <label for="phoneNumber">
                                    <span class="text">Número de telefono</span>
                                    <input type="tel" name="phoneNumber">
                                </label>
                            </form>`
    purchase.appendChild(purchaseDiv);
});
*/





//ARREGLAR ESTO
/*cart.forEach(products => {
        let confirmCart = document.createElement("div");
        confirmCart.setAttribute = ("class", "purchase-div");
        
        confirmCart.innerHtml = `<img src="${i.img}" class="min-img" alt="Selected Product">
                                 <h2 class="subtitle"> ${i.name}</h2>
                                 <p class="text"> ${i.price}</p>
                                `
    });
    */

























const createFilters = () => {
    
    const categories = [{
        name: "Beer",
        className: "fas fa-beer",
    },{
        name: "Snacks",
        className: "fas fa-hotdog",
    },{
        name: "Distillates",
        className: "fas fa-glass-martini-alt",
    }];

    for(let i of categories){
        
        let filterContainer = document.createElement("div");
        filterContainer.setAttribute = ("id", "filterDiv");
        filterContainer.className = "filters-containers";
    
        filterHtml.appendChild(filterContainer);
    
        
        let filterIcon = document.createElement("i");
        filterIcon.className = `${i.className}`;
        filterIcon.innerHTML = i;
        
        filterContainer.appendChild(filterIcon);
        filterIcon.addEventListener("click", () => filtrate(i))
    }    
}





