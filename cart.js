// Add an event listener to the cart icon
const cartIcon = document.getElementById('cart-icon');
cartIcon.addEventListener('click', toggleCart);

// Function to toggle the visibility of the cart
function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.classList.toggle('show');
}

//Start when document is loading
if(document.readyState=="loading")
{
    document.addEventListener('DOMContentLoaded',start);
}
else
{
    start();
}

// start//
function start(){addEvents();}

//update and render//

function update(){
    addEvents();
    updateTotal();}

// add events//
function addEvents()
{
    //remove cart items
    const cartContent = document.querySelector('.cart-content');
  cartContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-remove')) {
      const btn = event.target;
      const cartBox = btn.parentElement;
      cartBox.remove();
      updateTotal();
    }
  });
    //change item quantity
    let cartquantity=document.querySelectorAll('.cart-quantity');
    cartquantity.forEach(input=>{
        input.addEventListener("change",handlequantity);
    })

    //add to cart
    let addcart=document.querySelectorAll('.addtocart');
    addcart.forEach(btn =>{
        btn.addEventListener("click",handleaddcart);
    });
    updateTotal();
        
}

//handle events// 
let itemsadded=[];
function handleaddcart(){
    let product=this.parentElement;
    let title=product.querySelector(".name").innerHTML;
    let price=product.querySelector(".price").innerHTML;
    let img=product.querySelector(".img-fluid").src;
    console.log(title,price,img);

    let newtoadd={
        title,price,img
    };
    
    //handle item already exists
    if(itemsadded.find((el)=>el.title==newtoadd.title))
    {
        alert("this Item is alresdy exist!");
        return;
    }
    else{
        itemsadded.push(newtoadd);
    }
 
    //add product to cart
    let cartBoxElement=CartBoxComponent(title,price,img);
    let newnode=document.createElement("div");
    newnode.innerHTML=cartBoxElement;
    const cartcontent=document.querySelector('.cart-content');
    cartcontent.appendChild(newnode);
    updateTotal();


}








function handlle_remove(){
    this.parentElement.remove();
    updateTotal();
}
function handlequantity(){
    if(isNaN(this.value)||this.value<1){
        this.value=1;
    }
    this.value=Math.floor(this.value);
    update();
}


//update and rerender functions//
function updateTotal(){
    let cartboxs=document.querySelectorAll('.cart-box');
    const total=document.querySelectorAll('.total-price');
    
    total.forEach((element) => {
        let t = 0;
    cartboxs.forEach((cartbox)=>
    {
        let price=cartbox.querySelector(".cart-price");
        let p=parseFloat(price.textContent.replace('Rs','').trim());
        let quantity=cartbox.querySelector('.cart-quantity').value;
        let sub=p*quantity;
        t+=sub;
    });
        let formattedTotal = "Rs " + t.toFixed(2);
        element.innerHTML = formattedTotal;
      });
}

//html componets
function CartBoxComponent(title,price,img){
    return `
    <div class="cart-box">
       <img src=${img} alt="" class="cart-img">
       <div class="detail-box">
         <div class="cart-product-title">${title}</div>
         <div class="cart-price">${price}</div>
         <input type="number" value="1" class="cart-quantity">
       </div>
    <!--remove cart-->
    <button class="cart-remove">REMOVE</button>
    </div>`
}
