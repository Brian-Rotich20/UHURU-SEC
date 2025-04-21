// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown_menu');
    
    // Mobile dropdowns
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            dropdownMenu.classList.toggle('open');
        });
    }

    // Handle mobile dropdowns
    mobileDropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', function(e) {
                if (e.target === dropdownLink || e.target === dropdownLink.querySelector('.dropdown-icon')) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (dropdownMenu.classList.contains('open') && 
            !dropdownMenu.contains(e.target) && 
            e.target !== menuToggle) {
            dropdownMenu.classList.remove('open');
        }
    });

    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent) {
                    dropdownContent.style.display = 'none';
                    setTimeout(() => {
                        dropdownContent.style.display = '';
                    }, 10);
                }
            }
        });
    });
});

//search bar
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get search elements from both desktop and mobile versions
    const desktopSearchForm = document.querySelector('.search-container form');
    const mobileSearchForm = document.querySelector('.mobile-search form');
    
    // Create a searchable content index with page mappings
    let searchableContent = [];
    
    // Function to initialize the search index
    function initSearchIndex() {
        // This maps search terms to specific pages
        // Format: { searchTerms: [array of terms], redirectURL: "page.html" }
        searchableContent = [
            {
                searchTerms: ["home", "main", "welcome", "uss", "uhuru secondary school"],
                redirectURL: "index.html"
            },
            {
                searchTerms: ["history", "about", "about us", "background", "school history"],
                redirectURL: "about.html"
            },
            {
                searchTerms: ["mission", "vision", "values", "philosophy", "goals"],
                redirectURL: "about.html#mission"
            },
            {
                searchTerms: ["leadership", "principal", "deputy", "management", "administration", "board"],
                redirectURL: "leadership.html"
            },
            {
                searchTerms: ["achievements", "awards", "trophies", "recognition", "success"],
                redirectURL: "achievements.html"
            },
            {
                searchTerms: ["gallery", "photos", "images", "pictures", "events"],
                redirectURL: "gallery.html"
            },
            {
                searchTerms: ["admission", "enroll", "join", "requirements", "application", "register"],
                redirectURL: "requirements.html"
            },
            {
                searchTerms: ["academics", "education", "learning", "teaching", "subjects", "curriculum"],
                redirectURL: "academics.html"
            },
            {
                searchTerms: ["calendar", "schedule", "dates", "academic calendar", "term dates", "exam dates"],
                redirectURL: "academic-calendar.html"
            },
            {
                searchTerms: ["news", "updates", "announcements", "blog", "newsletter"],
                redirectURL: "news.html"
            },
            {
                searchTerms: ["contact", "reach", "email", "phone", "location", "address", "map"],
                redirectURL: "contact.html"
            },
            {
                searchTerms: ["faculty", "staff", "teachers", "instructors", "professors"],
                redirectURL: "leadership.html#faculty"
            }
        ];
    }
    
    // Handle search form submission - desktop version
    if (desktopSearchForm) {
        const desktopSearchInput = desktopSearchForm.querySelector('input[name="query"]');
        
        desktopSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchQuery = desktopSearchInput.value.trim();
            if (searchQuery) {
                performSearch(searchQuery, desktopSearchInput);
            } else {
                alert('Please enter a search term');
            }
        });
    }
    
    // Handle search form submission - mobile version
    if (mobileSearchForm) {
        const mobileSearchInput = mobileSearchForm.querySelector('input[name="query"]');
        
        mobileSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchQuery = mobileSearchInput.value.trim();
            if (searchQuery) {
                performSearch(searchQuery, mobileSearchInput);
            } else {
                alert('Please enter a search term');
            }
        });
    }
    
    // Function to perform the search and redirect or show "No results"
    function performSearch(query, inputElement) {
        query = query.toLowerCase();
        let foundMatch = false;
        
        // Check for exact matches first
        for (const item of searchableContent) {
            if (item.searchTerms.includes(query)) {
                window.location.href = item.redirectURL;
                foundMatch = true;
                return;
            }
        }
        
        // Check for partial matches
        for (const item of searchableContent) {
            for (const term of item.searchTerms) {
                if (term.includes(query) || query.includes(term)) {
                    window.location.href = item.redirectURL;
                    foundMatch = true;
                    return;
                }
            }
        }
        
        // If no matches are found, show "No results" in the search box
        if (!foundMatch) {
            // Save the original value to restore it later
            const originalValue = inputElement.value;
            
            // Change the placeholder and clear the input
            inputElement.value = "";
            inputElement.placeholder = "No results found";
            inputElement.classList.add('no-results');
            
            // After 2 seconds, restore the original state
            setTimeout(() => {
                inputElement.placeholder = "Search USS...";
                inputElement.value = originalValue;
                inputElement.classList.remove('no-results');
            }, 2000);
        }
    }
    
    // Initialize search functionality
    initSearchIndex();
});