// Configurações do WhatsApp
const WHATSAPP_NUMBER = '5511959948382'; // Altere para o número real
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os planos de saúde da Beacon.';

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,
            easing: 'ease-out-cubic'
        });
    }

    // Initialize all functions
    initMobileMenu();
    initWhatsAppButtons();
    initScrollEffects();
    initFormValidation();
    initSmoothScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// WhatsApp Integration
function initWhatsAppButtons() {
    const whatsappButtons = [
        '#whatsapp-hero',
        '#whatsapp-cta',
        '#whatsapp-fixed',
        '#whatsapp-contact'
    ];

    whatsappButtons.forEach(selector => {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                openWhatsApp();
            });
        }
    });
}

function openWhatsApp(customMessage = null) {
    const message = customMessage || WHATSAPP_MESSAGE;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Scroll Effects
function initScrollEffects() {
    const header = document.querySelector('.header-fixed');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header && header.classList.add('scrolled');
        } else {
            header && header.classList.remove('scrolled');
        }
    });
}
//