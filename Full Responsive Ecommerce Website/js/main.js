//open & cloce cart 

const cart = document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active");
}
function cloce_cart() {
    cart.classList.remove("active");
}
// add item in card

const menu = document.querySelector("#menu")
function open_menu(){
    menu.classList.add("active");
}
function cloce_menu() {
    menu.classList.remove("active");
}
//open & close menu

//item image
let bigimage =document.getElementById("bigimg")

function ChangeItemImage(img){
    bigimage.src = img
}






var ail_product_json;

var item_in_cart = document.querySelector(".items_in_cart")

let product_cart = []

function addTOcart(id, btn){
    product_cart.push(ail_product_json[id])
    btn.classList.add("active")
    getcartitems()
}

let count_item = document.querySelector(".count_item");
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");
let price_cart_head = document.querySelector(".price_cart_head");

 function getcartitems(){
    let total_price = 0;
    let items_c ="";
    for(let i = 0; i < product_cart.length; i++){
        items_c +=`
        <div class="item_cart">
        <img src="${product_cart[i].img}" alt="" />
        <div class="content">
          <h4>${product_cart[i].name}</h4>
          <p class="price_cart">${product_cart[i].price}</p>
        </div>
        <button onclick ="remove_from_cart(${i})" class="delete_item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
        `
        total_price += product_cart[i].price
        
    }
    item_in_cart.innerHTML = items_c

    price_cart_head.innerHTML = "$" +total_price

    count_item.innerHTML = product_cart.length

   count_item_cart.innerHTML = `
   ( ${product_cart.length} item in cart)
   `
    price_cart_total.innerHTML = "$" +total_price

 }

 function remove_from_cart(index){
    product_cart.splice(index,1)
    getcartitems()

    let addTOcartButton = document.querySelectorAll(".fa-cart-plus")
    for (let i = 0 ;i < addTOcartButton.length ; i++ ) {
        addTOcartButton[i].classList.remove("active")

        product_cart.forEach(product =>{
            if(product.id == i){
                addTOcartButton[i].classList.add("active")
            }
        })
        
    }
 }
//.back_to_top

let  back_to_top = document.querySelector(".back_to_top")

back_to_top.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

//=======



