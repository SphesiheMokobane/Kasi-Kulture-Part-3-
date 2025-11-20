document.addEventListener('DOMContentLoaded', () => {
    // Function to display the order from localStorage
    function displayOrderSummary() {
        const orderList = document.getElementById('order-summary');
        const totalDisplay = document.getElementById('order-total');
        
        // Retrieve data from localStorage
        const orderDetailsJSON = localStorage.getItem('kasiKultureOrder');
        const totalAmount = localStorage.getItem('kasiKultureTotal');

        orderList.innerHTML = ''; // Clear existing content

        if (orderDetailsJSON) {
            const orderDetails = JSON.parse(orderDetailsJSON);
            
            // Populate the list with each item
            orderDetails.forEach(item => {
                const listItem = document.createElement('li');
                // Format: Item Description (RXX)
                listItem.textContent = `${item.description} (R${item.price})`; 
                orderList.appendChild(listItem);
            });

            // Display the total amount
            if (totalAmount) {
                totalDisplay.textContent = `Total Amount: R${totalAmount}`;
            } else {
                totalDisplay.textContent = 'Total Amount: R0';
            }
            
            // Optional: Clear storage after successful display if you only want the order once
            // localStorage.removeItem('kasiKultureOrder');
            // localStorage.removeItem('kasiKultureTotal');

        } else {
            orderList.innerHTML = '<li>Your cart is empty. Please return to the <a href="Product and services.html">Product and Services</a> page to select items.</li>';
            totalDisplay.textContent = 'Total Amount: R0';
        }
    }

    displayOrderSummary();
});