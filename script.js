
// three lines toggle menu on mobile device
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("open");
}




//Main content == products,images,price,add to cart
const products = [
    {
        id : 1,
        name: "Coca-cola",
        price :720,
        piecesPerBox:24,
        image:"images/coca-cola.webp"
    },
    {
        id : 2,
        name:"Sprite",
        price:720,
        piecesPerBox:24,
        image:"images/sprite.webp"
    },
    {
        id: 3,
        name:"Sting",
        price:920,
        piecesPerBox:24,
        image:"images/sting.webp"
    },
    {
        id:4,
        name:"Thums Up",
        price:820,
        piecesPerBox:24,
        image:"images/thumbsup.webp"
    }

]


//Selecting a div from HTML to render the products
const productList = document.getElementById("product-list")

//Using forEach() == To select every element's info from array named "products"
products.forEach(product=>{

    //creating card/div for every img
    const card = document.createElement("div")
    card.className = "product-card"
    
    //details inside every card using template literals
    card.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>₹${product.price}/ box</p>
    <p>${product.piecesPerBox} pieces per box</p>
    <button onclick="addToCart(${product.id})" id="add-to-cart">Add to Cart</button>
    `;

    //Appending the card to div which we have created named "productList"
    productList.appendChild(card);
});

//notification after product added to cart
function addToCart(productId){
    alert("Product added: " + productId);
}