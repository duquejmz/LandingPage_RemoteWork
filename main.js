// ================================
// DOM Elements
// ================================
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const navbar = document.querySelector('#navbar');
const submenuBtns = document.querySelectorAll('.submenu-btn');
const featuresUl = document.querySelector('.features-ul');
const companyUl = document.querySelector('.company-ul');

// ================================
// Mobile Menu Toggle
// ================================
function openMenu() {
    navbar.classList.add('open');
    menu.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navbar.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    closeAllSubmenus();
}

menu.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Close menu when clicking on the backdrop
navbar.querySelector('.back')?.addEventListener('click', closeMenu);

// ================================
// Submenu Toggle
// ================================
function closeAllSubmenus() {
    submenuBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    });
    featuresUl?.classList.remove('show');
    companyUl?.classList.remove('show');
}

function toggleSubmenu(button, submenu) {
    const isOpen = submenu.classList.contains('show');
    
    // Close all submenus first
    closeAllSubmenus();
    
    // If it wasn't open, open it
    if (!isOpen) {
        button.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        submenu.classList.add('show');
    }
}

submenuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const submenu = btn.nextElementSibling;
        if (submenu) {
            toggleSubmenu(btn, submenu);
        }
    });
});

// ================================
// Close submenus when clicking outside
// ================================
document.addEventListener('click', (e) => {
    const isClickInsideNav = navbar.contains(e.target);
    const isClickOnMenu = menu.contains(e.target);
    
    if (!isClickInsideNav && !isClickOnMenu) {
        closeAllSubmenus();
    }
});

// ================================
// Keyboard accessibility
// ================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Check if mobile menu is open
        if (navbar.classList.contains('open')) {
            closeMenu();
        } else {
            closeAllSubmenus();
        }
    }
});

// ================================
// Handle window resize
// ================================
window.addEventListener('resize', () => {
    // Reset mobile menu state on larger screens
    if (window.innerWidth >= 768) {
        navbar.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}); 