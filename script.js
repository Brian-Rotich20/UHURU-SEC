
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdownMenu = document.querySelector('.dropdown_menu');

        menuToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
            menuToggle.innerHTML = dropdownMenu.classList.contains('active') ? '&#x2715;' : '&#9776;';
        });