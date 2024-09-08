document.addEventListener('DOMContentLoaded', function () {
    // Toggle product details
    const productNames = document.querySelectorAll('.product-name');
    productNames.forEach(productName => {
        productName.addEventListener('click', function () {
            const details = this.nextElementSibling;
            const isVisible = details.style.display === 'block';
            details.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    menuToggle.addEventListener('click', function () {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
});
