const increaseButtons = document.querySelectorAll('.increase');
const decreaseButtons = document.querySelectorAll('.decrease');
const totalPriceElement = document.getElementById('total-price');

increaseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
    });
});

decreaseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
            updateTotalPrice();
        }
    });
});

function updateTotalPrice() {
    const price = parseFloat(document.querySelector('.item-price').textContent.replace('$', ''));
    const quantity = parseInt(document.querySelector('.quantity').textContent);
    const total = price * quantity;
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}
