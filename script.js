
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdownMenu = document.querySelector('.dropdown_menu');

        menuToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
            menuToggle.innerHTML = dropdownMenu.classList.contains('active') ? '&#x2715;' : '&#9776;';
        });

        document.addEventListener('DOMContentLoaded', function() {
            const mobileDropdowns = document.querySelectorAll('.dropdown_menu .mobile-dropdown');
            
            mobileDropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('a');
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            });
        });