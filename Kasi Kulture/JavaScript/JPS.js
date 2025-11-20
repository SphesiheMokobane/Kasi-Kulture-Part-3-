document.addEventListener('DOMContentLoaded', () => {
    //  Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
    
    // Menu Selection Logic
    // Changed to select all checkboxes
    const menuItems = document.querySelectorAll('.menu-item input[type="checkbox"]');
    const addToOrderButton = document.getElementById('addToOrder');

    function updateOrderButton() {
        const selectedItems = document.querySelectorAll('.menu-item input[type="checkbox"]:checked');
        let total = 0;
        
        // Calculate the total price
        selectedItems.forEach(item => {
            // value is now the price as a number string (e.g., "45")
            total += parseInt(item.value); 
        });

        if (selectedItems.length > 0) {
            // Update button text to show the calculated total
            addToOrderButton.textContent = `Add to Order (R${total})`;
            addToOrderButton.disabled = false;
        } else {
            addToOrderButton.textContent = `Please Select Item(s)`;
            addToOrderButton.disabled = true;
        }
    }

    menuItems.forEach(item => {
        // Listen for 'change' on all checkboxes
        item.addEventListener('change', updateOrderButton);
    });

    // Initialize button state
    updateOrderButton();

    // Checkout Logic - Collect selected items and redirect
    if (addToOrderButton) {
        addToOrderButton.addEventListener('click', () => {
            const selectedItemsCheckboxes = document.querySelectorAll('.menu-item input[type="checkbox"]:checked');
            const orderDetails = [];
            let totalAmount = 0;

            selectedItemsCheckboxes.forEach(checkbox => {
                const price = parseInt(checkbox.value);
                const description = checkbox.getAttribute('data-item-description');

                orderDetails.push({
                    description: description,
                    price: price
                });
                totalAmount += price;
            });
            
            if (orderDetails.length > 0) {
                // Store the order details in localStorage
                localStorage.setItem('kasiKultureOrder', JSON.stringify(orderDetails));
                localStorage.setItem('kasiKultureTotal', totalAmount);
                
                // Redirect to the checkout page
                window.location.href = 'Checkout.html';
            } else {
                 // Should not happen if button is disabled correctly, but as a fallback
                alert("Please select at least one item to add to your order.");
            }
        });
    }

    // Lightbox Gallery Logic (Rest of the original JPS.js is unchanged, but included for completeness)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const menuImages = document.querySelectorAll('.menu-grid .menu-item img');
    let currentImageIndex;

    // Collect all image data (src and alt/caption)
    const imageData = Array.from(menuImages).map(img => ({
        src: img.src,
        alt: img.alt
    }));

    window.openLightbox = function(index) {
        currentImageIndex = index;
        showImage(currentImageIndex);
        lightbox.style.display = 'flex';
    }

    window.closeLightbox = function() {
        lightbox.style.display = 'none';
    }

    window.changeImage = function(n) {
        currentImageIndex += n;
        // Handle wrapping around
        if (currentImageIndex >= imageData.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = imageData.length - 1;
        }
        showImage(currentImageIndex);
    }

    function showImage(index) {
        const item = imageData[index];
        lightboxImg.src = item.src;
        lightboxCaption.textContent = item.alt;
    }

    menuImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            window.openLightbox(index);
        });
    });
});