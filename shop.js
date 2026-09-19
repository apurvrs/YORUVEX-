const products = [

    {
        name: "Akatsuki Hoodie",
        category: "Apparel",
        price: 1999,
        oldPrice: 2499,
        symbol: "☁",
        badge: "BEST SELLER"
    },

    {
        name: "Anime Oversized T-Shirt",
        category: "Apparel",
        price: 999,
        oldPrice: 1499,
        symbol: "Y"
    },

    {
        name: "Anime Character Figure",
        category: "Figures",
        price: 3499,
        oldPrice: 4999,
        symbol: "Y",
        badge: "POPULAR"
    },

    {
        name: "Premium Anime Figure",
        category: "Figures",
        price: 2999,
        oldPrice: 3999,
        symbol: "夜"
    },

    {
        name: "Itachi Premium Poster",
        category: "Posters",
        price: 799,
        oldPrice: 1299,
        symbol: "月"
    },

    {
        name: "Gojo Wall Poster",
        category: "Posters",
        price: 699,
        oldPrice: 999,
        symbol: "六"
    },

    {
        name: "Anime Canvas Art",
        category: "Posters",
        price: 1199,
        oldPrice: 1699,
        symbol: "術"
    },

    {
        name: "Konoha Keychain",
        category: "Accessories",
        price: 499,
        oldPrice: 799,
        symbol: "葉"
    },

    {
        name: "Anime Ring",
        category: "Accessories",
        price: 599,
        oldPrice: 899,
        symbol: "◈"
    },

    {
        name: "Sharingan Keychain",
        category: "Accessories",
        price: 449,
        oldPrice: 699,
        symbol: "◉"
    },

    {
        name: "Gaming Mouse Pad",
        category: "Gaming",
        price: 899,
        oldPrice: 1299,
        symbol: "X"
    },

    {
        name: "Anime Gaming Desk Mat",
        category: "Gaming",
        price: 1299,
        oldPrice: 1799,
        symbol: "V"
    }

];


let cartCount =
    Number(localStorage.getItem("yoruvexCart")) || 0;


const grid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const resultText =
    document.getElementById("resultText");

const noProducts =
    document.getElementById("noProducts");

const cartElement =
    document.getElementById("cartCount");


cartElement.textContent = cartCount;


/* ================= RENDER ================= */

function renderProducts(list) {

    grid.innerHTML = "";

    if (list.length === 0) {

        noProducts.style.display = "block";

        resultText.textContent =
            "No products found";

        return;

    }

    noProducts.style.display = "none";

    resultText.textContent =
        `Showing ${list.length} products`;


    list.forEach((product, index) => {

        const card =
    document.createElement("article");

card.className = "product";

card.addEventListener("click", function (e) {

    if (
        e.target.closest(".add-cart") ||
        e.target.closest(".wishlist")
    ) {
        return;
    }

    window.location.href = "product.html";

});

card.innerHTML = `

            <div class="product-image">

                ${
                    product.badge
                    ?
                    `<div class="product-badge">
                        ★ ${product.badge}
                    </div>`
                    :
                    ""
                }

                <button
                    class="wishlist"
                    onclick="wishlist(this)"
                >
                    ♡
                </button>

                <div class="product-symbol">
                    ${product.symbol}
                </div>

            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <div class="product-price">

                    ₹${product.price.toLocaleString("en-IN")}

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${index})"
                >

                    <i class="fa-solid fa-cart-shopping"></i>

                    Add to Cart

                </button>

            </div>

        `;

        grid.appendChild(card);

    });

}


/* ================= FILTER ================= */

function filterProducts() {

    let list = [...products];


    const search =
        searchInput.value.toLowerCase().trim();


    if (search) {

        list = list.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

        );

    }


    const selectedCategories =
        [...document.querySelectorAll(
            ".category-filter:checked"
        )].map(input => input.value);


    if (selectedCategories.length) {

        list = list.filter(product =>
            selectedCategories
                .includes(product.category)
        );

    }


    const price =
        document.querySelector(
            'input[name="price"]:checked'
        ).value;


    if (price !== "all") {

        list = list.filter(product =>
            product.price <= Number(price)
        );

    }


    const sort =
        sortSelect.value;


    if (sort === "low") {

        list.sort((a,b) =>
            a.price - b.price
        );

    }


    if (sort === "high") {

        list.sort((a,b) =>
            b.price - a.price
        );

    }


    if (sort === "name") {

        list.sort((a,b) =>
            a.name.localeCompare(b.name)
        );

    }


    renderProducts(list);

}


/* ================= CART ================= */

function addToCart(index) {

    cartCount++;

    localStorage.setItem(
        "yoruvexCart",
        cartCount
    );

    cartElement.textContent =
        cartCount;

    alert(
        products[index].name +
        " added to cart!"
    );

}


/* ================= WISHLIST ================= */

function wishlist(button) {

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


/* ================= CLEAR ================= */

function clearFilters() {

    searchInput.value = "";

    document
        .querySelectorAll(".category-filter")
        .forEach(input => {
            input.checked = false;
        });

    document.querySelector(
        'input[name="price"][value="all"]'
    ).checked = true;

    sortSelect.value = "default";

    filterProducts();

}


/* ================= MENU ================= */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("show");

}


/* ================= SEARCH ================= */

searchInput.addEventListener(
    "input",
    filterProducts
);


document
    .querySelectorAll(".category-filter")
    .forEach(input => {

        input.addEventListener(
            "change",
            filterProducts
        );

    });


document
    .querySelectorAll('input[name="price"]')
    .forEach(input => {

        input.addEventListener(
            "change",
            filterProducts
        );

    });


sortSelect.addEventListener(
    "change",
    filterProducts
);


/* ================= NEWSLETTER ================= */

function subscribe(event) {

    event.preventDefault();

    alert(
        "Welcome to YORUVEX! 🔥"
    );

}


/* INITIAL */

renderProducts(products);
