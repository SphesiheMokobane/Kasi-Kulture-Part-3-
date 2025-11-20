<script>
    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');

        // Event listener to toggle the mobile menu visibility
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });
        }
    });
</script>