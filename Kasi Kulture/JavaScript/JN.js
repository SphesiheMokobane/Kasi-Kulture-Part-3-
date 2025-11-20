<script>
    // This script handles the mobile hamburger menu toggle.
    document.addEventListener('DOMContentLoaded', () => {
        // 1. Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });
        }
       
        // Removed menu selection and ordering logic as it is not needed on the News page.
    });
</script>