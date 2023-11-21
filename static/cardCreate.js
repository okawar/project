document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll('.card');
    let cartCountElement = document.getElementById("cart-count-nav"); // Обновленный селектор

    cards.forEach(function (card) {
        let buyButton = card.querySelector('.buy-button');
        buyButton.addEventListener("click", function () {
            let productData = JSON.parse(card.getAttribute('data-product'));
            addToCart(productData);
        });
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    function updateCartDisplay() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCountElement.textContent = cart.length;
    }
});