const products = [

    {
        name: "Akatsuki Premium Oversized Hoodie",
        category: "APPAREL",
        price: 1999,
        oldPrice: 2499,
        symbol: "☁",
        description: "Premium anime-inspired oversized hoodie designed for comfort, style and true anime fans."
    },

    {
        name: "Anime Oversized T-Shirt",
        category: "APPAREL",
        price: 999,
        oldPrice: 1499,
        symbol: "Y",
        description: "A stylish oversized anime-inspired T-shirt made for everyday streetwear."
    },

    {
        name: "Anime Character Figure",
        category: "FIGURES",
        price: 3499,
        oldPrice: 4999,
        symbol: "Y",
        description: "Premium anime collectible figure with detailed design and display-ready finish."
    },

    {
        name: "Premium Anime Figure",
        category: "FIGURES",
        price: 2999,
        oldPrice: 3999,
        symbol: "夜",
        description: "A premium collectible made for anime fans and collectors."
    },

    {
        name: "Itachi Premium Poster",
        category: "POSTERS",
        price: 799,
        oldPrice: 1299,
        symbol: "月",
        description: "Premium anime wall poster with a cinematic dark aesthetic."
    },

    {
        name: "Gojo Wall Poster",
        category: "POSTERS",
        price: 699,
        oldPrice: 999,
        symbol: "六",
        description: "High-quality anime wall art designed for your room or gaming setup."
    },

    {
        name: "Anime Canvas Art",
        category: "POSTERS",
        price: 1199,
        oldPrice: 1699,
        symbol: "術",
        description: "Premium canvas artwork for anime lovers."
    },

    {
        name: "Konoha Keychain",
        category: "ACCESSORIES",
        price: 499,
        oldPrice: 799,
        symbol: "葉",
        description: "Compact anime-inspired keychain for your bag, keys or gaming setup."
    },

    {
        name: "Anime Ring",
        category: "ACCESSORIES",
        price: 599,
        oldPrice: 899,
        symbol: "◈",
        description: "Stylish anime-inspired accessory designed for everyday use."
    },

    {
        name: "Sharingan Keychain",
        category: "ACCESSORIES",
        price: 449,
        oldPrice: 699,
        symbol: "◉",
        description: "Anime-inspired keychain with a bold Sharingan-style design."
    },

    {
        name: "Gaming Mouse Pad",
        category: "GAMING",
        price: 899,
        oldPrice: 1299,
        symbol: "X",
        description: "Smooth gaming mouse pad designed for anime and gaming setups."
    },

    {
        name: "Anime Gaming Desk Mat",
        category: "GAMING",
        price: 1299,
        oldPrice: 1799,
        symbol: "V",
        description: "Large premium desk mat for your gaming and anime setup."
    }

];


// Get product ID from URL

const params =
    new URLSearchParams(window.location.search);

const productId =
    Number(params.get("id")) || 0;


// Get selected product

const product =
    products[productId] || products[0];


// Update product information

document.title =
    product.name + " — YORUVEX";


document.querySelector(".category")
    .textContent =
    "YORUVEX • " + product.category;


document.querySelector(".details h1")
    .textContent =
    product.name;


document.querySelector(".price strong")
    .textContent =
    "₹" + product.price.toLocaleString("en-IN");


document.querySelector(".price del")
    .textContent =
    "₹" + product.oldPrice.toLocaleString("en-IN");


document.querySelector(".description")
    .textContent =
    product.description;


document.querySelector(".anime-art")
    .textContent =
    product.symbol;


// Cart

let cartCount =
    Number(localStorage.getItem("yoruvexCart")) || 0;


document.getElementById("cartCount")
    .textContent =
    cartCount;


// Quantity

let quantity = 1;


function changeQuantity(amount) {

    quantity += amount;

    if (quantity < 1)
        quantity = 1;

    if (quantity > 10)
        quantity = 10;

    document.getElementById("quantity")
        .textContent = quantity;
}


// Add to cart

function addToCart() {

    cartCount += quantity;

    localStorage.setItem(
        "yoruvexCart",
        cartCount
    );

    document.getElementById("cartCount")
        .textContent =
        cartCount;

    alert(
        quantity +
        " × " +
        product.name +
        " added to cart 🔥"
    );
}


// Buy now

function buyNow() {

    addToCart();

    window.location.href =
        "cart.html";
}


// Wishlist

function toggleWishlist(button) {

    if (button.textContent.trim() === "♡") {

        button.textContent = "♥";

        button.style.color =
            "#ff1727";

    } else {

        button.textContent = "♡";

        button.style.color =
            "white";
    }
}


// Mobile menu

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("show");

}
