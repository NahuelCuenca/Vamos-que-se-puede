$( document ).ready(function (){
    
    createCards();
    // createFilters();
    //signup();

})
//libreria
// https://validatejs.org/


const cart = [];

let bag = []

class products{
    constructor(id, group, img, name, price, details, quantity){
        this.id = id;
        this.group = group;
        this.img = img;
        this.name = name;
        this.price = price;
        this.details = details;
        this.quantity = 0;
    }
};

cart.push(new products(1, "Beer", "../img/Andes_roja.jpg", "Cerveza Andes roja", 180, "Lata de 473ml", 0));
cart.push(new products(2, "Beer", "../img/Andes_negra.jpg", "Cerveza Andes negra", 180, "Lata de 473ml", 0));
cart.push(new products(3, "Beer", "../img/B3.png", "Cerveza Patagonia IPA 24.7", 220, "Lata de 473ml", 0));

cart.push(new products(4, "Snacks", "../img/mani_japones.jpg", "Maní crocante japonés", 110, "Snack crocante sabor a queso X 200gr", 0));
cart.push(new products(5, "Snacks", "../img/doritos.jpeg", "Doritos sabor original", 500, "Snacks de queso X 300gr,", 0));
cart.push(new products(6, "Snacks", "../img/lays.jpg", "Papas Lays sabor original", 550, "Bolsa X 370gr,", 0));

cart.push(new products(7, "Distillates", "../img/Ron.jpg", "Ron Havana Club", 800, "Botella de 750ml,", 0));
cart.push(new products(8, "Distillates", "../img/Fernet.jpg", "Fernet Branca", 965, "Botella de 1l,", 0));
cart.push(new products(9, "Distillates", "../img/JackD.jpg", "Jack Daniels Old", 4000, "Botella de whisky 1l,", 0));


//Se crean las cards de los productos//
const createCards = () => {

    cardsHtml.innerHTML = ``

    for(let i of cart){
        
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        
            <img src="${i.img}" class="img" alt="Product Img">
                <div class="card-body">
                    <h5 class="card-title">${i.name}</h5>
                    <p class="card-text">${i.details}</p>
                    <button class="btn btn-primary" id="${i.id}">Agregar</button>
                </div>
         
        `
        cardsHtml.appendChild(card)

        let button = document.getElementById(i.id)
        button.addEventListener("click", () => agregarAlCarrito(i))
    }
}


const addToCart  = () =>{

    
    cartTable.innerHTML = "";
    let tr;
    
    let precioFinal = 0

    bag.forEach((element,i) => {                
        tr = document.createElement("tr");
        tr.setAttribute("id", i);
        
        tr.innerHTML = `<td>${element.name}</td>
                        <td>$${element.price}</td>
                        <td>${element.details}</td>
                        <td>${element.quantity}</td>
                        <td>    <button id="+${element.id}" class="addItem">+</button>
                                <button id="-${element.id}" class="deleteItem">-</button>
                        </td>
                        <td>`;

        cartTable.appendChild(tr);

        document.getElementById(`+${element.id}`).addEventListener("click", () => agregarAlCarrito(element));
        document.getElementById(`-${element.id}`).addEventListener("click", () => deleteItem(element));

        precioFinal+= element.price * element.quantity
        console.log(precioFinal)
        // precioFinal = precioFinal + (element.price * element.quantity) Es lo mismo

    });

    document.getElementById("final-price").innerHTML = `$${precioFinal}`
    
    // cartTable.innerHTML = "";
    
    // let tr;
    
    // for (item of bag){
        
    //     tr = document.createElement("tr");
    //     tr.setAttribute("id", item.id);
    //     if(item.quantity > 0){

    //         tr.innerHTML = `<td>${item.name}</td>
    //                     <td>${item.price}</td>
    //                     <td>${item.details}</td>
    //                     <td>${item.quantity}</td>
    //                     <td>    <button id="+${item.id}" class="addItem">+</button>
    //                             <button id="-${item.id}" class="deleteItem">-</button>
    //                     </td>
    //                     <td>`;

    //     cartTable.appendChild(tr);

    //     document.getElementById(`+${item.id}`).addEventListener("click", () => agregarAlCarrito(item));
    //     document.getElementById(`-${item.id}`).addEventListener("click", () => deleteItem(item));
    // }
    // }
}


const agregarAlCarrito = (item) => {
    
    console.log(item)

    const verifyRepeat = (element => element.id === item.id);
    
    if (bag.some(verifyRepeat)){
        bag.find(element => element.id === item.id).quantity++;
    
    }else{
        bag.push(item);
        bag.find(element => element.id === item.id).quantity++;
    }
    addToCart();
    cartStorage();
}


const cartStorage = () =>{
    localStorage.setItem("cart", JSON.stringify(bag));
}


// const createFilters = () => {
//     const categories = ["Beer", "Snacks", "Distillates"]
//     //Arreglar los iconos
//     categories[0].setAttribute = ("class", "fas fa-beer");
//     categories[1].setAttribute = ("class", "fas fa-hotdog");

//     for(let i of categories){
        
//         let filterContainer = document.createElement("div");
//         filterContainer.setAttribute = ("id", "filterDiv");
//         filterContainer.className = "filters-containers";
    
//         filterHtml.appendChild(filterContainer);
    
        
//         let filterIcon = document.createElement("i");
//         filterIcon.className = `${i.className}`;
//         filterIcon.innerHTML = i;
        
//         filterContainer.appendChild(filterIcon);
//         filterIcon.addEventListener("click", () => filtrate(i))
//     }    
// }


// const categories = [];

// class groups{
//     constructor(id, className, group){
//         this.id = id;
//         this.className = className;
//         this.group = group;
//     }
// };

// categories.push(new groups("Beer", "fas fa-beer", "Beer"));
// categories.push(new groups("Snacks", "fas fa-hotdog", "Snacks"));
// categories.push(new groups("Distillates", "fas fa-glass-martini-alt", "Distillates"));

// const createFilters = () => {
    
//     for(i of categories){

//         let filterContainer = document.createElement("div");
//         filterContainer.setAttribute = ("id", "filterDiv");
//         filterContainer.className = "filters-containers";
        
//         let filterIcon = document.createElement("i");
//         filterIcon.className = `${i.className}`;
//         filterIcon.id = i.id;

//         filterContainer.innerHTML = filterIcon
        
        
//         filterIcon.addEventListener("click", () => filtrate(i))
        
//         filterHtml.appendChild(filterContainer);
        

//         // filterContainer.appendChild(filterIcon);
//     }
// }




const filtrate = (category) => {
    cardsHtml.innerHTML = ``

    console.log(category)

    let filtered = cart.filter(element => element.group === category)

    for(let i of filtered){
        
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        
            <img src="${i.img}" class="card-img-top" alt="Beer1">
                <div class="card-body">
                    <h5 class="card-title">${i.name}</h5>
                    <p class="card-text">${i.details}</p>
                    <button class="btn btn-primary" id="${i.id}">Agregar</button>
                </div>
         
        `
        cardsHtml.appendChild(card)

        let CategoryButton = document.getElementById(i.id)
        CategoryButton.addEventListener("click", () => agregarAlCarrito(i))

    }
}


$("#all").on("click", () => createCards());


function addItem(item){
    
    cart.find(element => element.id === item).quantity++;
    console.log("esto no funca");
    addToCart(cart);
    cartStorage();
}


function deleteItem(item){

    const verify = element => element.id === item.id
    
    if(bag.some(verify)){
        
        const deleteProduct = bag.findIndex(cartItem =>{
            return cartItem.id === item.id
        });
    
    if(bag[deleteProduct].quantity === 1){
        
        let i = bag.splice(deleteProduct, 1)
        console.log("elimina supuestamente xD")
        sessionStorage.cart = JSON.stringify(bag) 
        cartStorage();
    }else{
        bag[deleteProduct].quantity--;
        console.log("borra")
        sessionStorage.cart = JSON.stringify(bag)
        cartStorage();
    }}

    addToCart()
}
/*
const signup = () =>{
    
    let name = prompt("Indicá tu nombre");
    let age 
    let aux = localStorage.getItem("age");
    
    if(aux === null){
        age = parseInt(prompt("Indicá tu edad"));

    }else{
        age = aux;
    }
    
    if(age<18){
        
        alert("Debes ser mayor de 18");
        localStorage.setItem("age", JSON.stringify(age));
        return false;
    }else if(isNaN(age)){
        alert("Deben ser números");
        return false;
    }else{
        localStorage.setItem("Age", JSON.stringify(age));
        
        $.post(urlSignup, name, (response, status) =>{

            if(status === "success"){
                
                alert(`Todo listo ${response.name}! Acabas de registrarte`);
                localStorage.setItem()
            }else{
                alert("Hubo un error, intentalo nuevamente");
            }
            
        
        
        });
        return true;
    }


}                      
/*const signup = () =>{
    
    
    let age 
    let aux = localStorage.getItem("age");
    
    if(aux === null){
        age = parseInt(prompt("Indicá tu edad"));

    }else{
        age = aux;
    }
    
    if(age<18){
        
        alert("Debes ser mayor de 18");
        localStorage.setItem("age", JSON.stringify(age));
        return false;
    }else if(isNaN(age)){
        alert("Deben ser números");
        return false;
    }else{
        localStorage.setItem("Age", JSON.stringify(age));
        return true;
    }
}                                                                                 //Se le pide al usuario la edad, si es menor se cancela la entrada a la pagina;
*/




//Global Scope//
let cerveza = cart.filter(cart => cart.group === "Beer");
let snacks = cart.filter(cart => cart.group === "Snacks");
let destilados = cart.filter(cart => cart.group === "Distillates");

let cardsHtml = document.getElementById("products");
let filterHtml = document.getElementById("filtered");
let cartTable = document.getElementById("cart");
let filterButton = document.getElementById("filter-button");
let amountDiv = document.getElementById("amount");


let buttonId = ["all", "Beer", "Snacks", "Distillates"]

for (let i = 0; i < buttonId.length; i+=1){

    let aux = buttonId[i]

    let botonAux = document.getElementById(aux)

    if(aux === "all"){

        botonAux.addEventListener("click", () => createCards())

    }else{
    botonAux.addEventListener("click", () => filtrate(aux))
    }

}


$(document.body).click(".btn-primary", function(event){
    
    
    $("#amount").show();
    
});





/* 
$(".btn-primary").on("click", function(){

    $(".btn-primary").css("background-color", "#49FF00");

});
*/






$("#filterButton").on("mouseover", function(){

    $("#filterButton").css({
        "background-color": "#64DFDF",
        "cursor": "pointer"
    });



})












