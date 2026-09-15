let cartCount = 0;

function addCart() {

    cartCount++;

    const cart = document.querySelector(".cart small");

    cart.textContent = cartCount;

    // Small animation
    cart.style.transform = "scale(1.4)";

    setTimeout(() => {
        cart.style.transform = "scale(1)";
    }, 200);
}


// Mobile menu

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show");

}


// Wishlist

document.querySelectorAll(".heart").forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent === "♡") {

            button.textContent = "♥";
            button.style.color = "#ff1727";

        } else {

            button.textContent = "♡";
            button.style.color = "white";

        }

    });

});
