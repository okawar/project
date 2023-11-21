document.addEventListener("DOMContentLoaded", function () {
    let cartWrapper = document.getElementById("cart-wrapper");
    let descriptionElement = document.getElementById("description");
    let clearCartButton = document.getElementById("clearCartButton");

    // Загружаем корзину из localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Обновляем отображение корзины при загрузке страницы
    updateCartDisplay();

    clearCartButton.addEventListener("click", function () {
        clearCart();
    });

    function clearCart() {
        cart = [];
        localStorage.removeItem("cart");
        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartWrapper.innerHTML = ""; // Очищаем содержимое cartWrapper

        cart.forEach(function (product, index) {
            let productContainer = document.createElement("div");
            productContainer.classList.add("product-container");

            let productImage = document.createElement("img");
            productImage.style = "width: 350px;"
            productImage.src = product.image;
            productImage.alt = product.name;
            productContainer.appendChild(productImage);

            let productInfo = document.createElement("div");
            productInfo.textContent = "Товар: " + product.name + ", Цена: " + product.price;
            productContainer.appendChild(productInfo);

            let deleteButton = document.createElement("button");
            deleteButton.id = "deleteButton"
            deleteButton.textContent = "Удалить";
            deleteButton.addEventListener("click", function () {
                removeFromCart(index);
            });
            productContainer.appendChild(deleteButton);

            let payButton = document.createElement("button");
            payButton.id = "payButton"
            payButton.textContent = "Оплатить";
            payButton.addEventListener("click", function () {
                alert("Оплачено: " + product.name);
            });
            productContainer.appendChild(payButton);

            cartWrapper.appendChild(productContainer);
        });

        showHideElements();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    function showHideElements() {
        if (cart.length > 0) {
            clearCartButton.style.display = "block";
            descriptionElement.style.display = "none";
        } else {
            clearCartButton.style.display = "none";
            descriptionElement.style.display = "block";
        }
    }
});