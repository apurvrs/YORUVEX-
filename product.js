let quantity = 1;

let cartCount =
    Number(localStorage.getItem("yoruvexCart")) || 0;

const quantityElement =
    document.getElementById("quantity");

const cartElement =
    document.getElementById("cartCount");


cartElement.textContent = cartCount;


/* QUANTITY */

function changeQuantity(amount) {

    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }

    if (quantity > 10) {
        quantity = 10;
    }

    quantityElement.textContent =
        quantity;
}


/* ADD TO CART */

function addToCart() {

    cartCount += quantity;

    localStorage.setItem(
        "yoruvexCart",
        cartCount
    );

    cartElement.textContent =
        cartCount;

    alert(
        quantity +
        " × Akatsuki Hoodie added to cart 🔥"
    );

}


/* BUY NOW */

function buyNow() {

    addToCart();

    window.location.href =
        "cart.html";

}


/* WISHLIST */

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


/* MOBILE MENU */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("show");

}
