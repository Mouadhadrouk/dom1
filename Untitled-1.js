
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalAmount = document.getElementById("total-amount");

    cartItems.forEach((item) => {
        const quantityControlIncrease = item.querySelector(".increase");
        const quantityControlDecrease = item.querySelector(".decrease");
        const itemQuantity = item.querySelector(".item-quantity");
        const deleteButton = item.querySelector(".delete-item");
        const likeButton = item.querySelector(".like-item");

        quantityControlIncrease.addEventListener("click", function() {
            let quantity = parseInt(itemQuantity.textContent);
            quantity++;
            itemQuantity.textContent = quantity;
            updateTotal();
        });

        quantityControlDecrease.addEventListener("click", function() {
            let quantity = parseInt(itemQuantity.textContent);
            if (quantity > 1) {
                quantity--;
                itemQuantity.textContent = quantity;
                updateTotal();
            }
        });

        deleteButton.addEventListener("click", function() {
            item.remove();
            updateTotal();
        });

        likeButton.addEventListener("click", function() {
            likeButton.classList.toggle("liked");
        });
    });

    function updateTotal() {
        let totalPrice = 0;

        cartItems.forEach((item) => {
            const itemPrice = parseFloat(item.querySelector(".item-price").textContent.slice(1));
            const itemQuantity = parseInt(item.querySelector(".item-quantity").textContent);
            totalPrice += itemPrice * itemQuantity;
        });

        totalAmount.textContent = totalPrice.toFixed(2);
    }
});
