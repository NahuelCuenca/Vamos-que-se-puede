class products{
    constructor(id, group, img, name, price, details, quantity){
        this.id = id
        this.group = group
        this.img = img
        this.name = name
        this.price = price
        this. details = details
        this.quantity = quantity
    }
}

let beer1 = new products(1, "Beer", "Cerveza Andes roja", "$180", "Lata de 473ml");
let beer2 = new products(2, "Beer", "Cerveza Andes negra", "$180", "Lata de 473ml");
let beer3 = new products(3, "Beer", "Cerveza Patagonia IPA 24.7", "$220", "Lata de 473ml");

let snacks1 = new products(4, "Snacks", "Maní crocante japonés", "$110", "Snack crocante sabor a queso X 200gr");
let snacks2 = new products(5, "Snacks", "Doritos sabor original", "$500", "Snacks de queso X 300gr");
let snacks3 = new products(6, "Snacks", "Papas Lays sabor original", "$550", "Bolsa X 370gr");

let distillates1 = new products(7, "Distillates", "Ron Havana Club", "$800", "Botella de 750ml");
let distillates2 = new products(8, "Distillates", "Fernet Branca", "$965", "Botella de 1l");
let distillates3 = new products(9, "Distillates", "Jack Daniels Old", "$4000", "Botella de whisky 1l");



products.push(new products(""))
products.push(new products(""))
products.push(new products(""))
products.push(new products(""))
products.push(new products(""))
products.push(new products(""))
products.push(new products(""))
products.push(new products(""))
products.push(new products(""))





























for(let i of categories){
    
    let boton = document.createElement("button")
    boton.className = "pasas las clases que quieras"
    boton.id = i
    boton.innerHTML = i

    let filterContainer = document.createElement("div");
    filterContainer.setAttribute = ("id", "filterContainer");
    filterContainer.className = "filter-container";
    filterContainer.innerHTML =`<i id="${i.id}" class="fas fa-glass-martini-alt"></i>`
    
    
    
    filterHtml.appendChild(filterContainer);
    filterHtml.appendChild(boton)
    
    boton.addEventListener("click", () => filtrate(i))


}    







const categories = [];

class groups{
    constructor(id, className, group){
        this.id = id;
        this.className = className;
        this.group = group;
    }
};

categories.push(new groups(1,"fas fa-beer", "Beer"));
categories.push(new groups(1,"fas fa-hotdog", "Snacks"));
categories.push(new groups(1,"fas fa-glass-martini-alt", "Distillates"));


for(i of categories){

    let filterContainer = document.createElement("div");
    filterContainer.setAttribute = ("id", "filterDiv");
    filterContainer.className = "filter-container";
    filterContainer.innerHTML =`<i id="${i.id}" class="fas fa-glass-martini-alt"></i>`
    
    filterHtml.appendChild(filterContainer);
    
    
    let filterIcon = document.createElement("i");
    filterIcon.className = `${i.className}`;
    filterIcon.id = i;
    filterIcon.innerHTML = i;
        
    filterContainer.appendChild(filterIcon);
    filterIcon.addEventListener("click", () => filtrate(i))


}


























const urlSignup = "https://jsonplaceholder.typicode.com/posts"

$.post(urlSignup, data, function(){

    alert("Todo listo! Acabas de registrarte");


})






function askAge() {
    let age = localStorage.getItem("edad");
    if (age == null) {
      $("#modal-edad").modal("show");
    } else {
      validarEdad(age);
    }
  }
  
  function saveAge() {
    const age = $("#validar-edad").val();
    if (age.trim() != "") {
      localStorage.setItem("edad", age);
      $("#modal-edad").modal("hide");
      validarEdad(age);
    }
  }
  
  function verifyAge(age) {
    if (age < 18) {
      $("#modal-menor").show("menorDiv");
      var formulario = document.getElementById("customer");
      formulario.parentNode.removeChild(formulario);
      $("#filtered").hide();
      $("#cart").hide();
    }
  }