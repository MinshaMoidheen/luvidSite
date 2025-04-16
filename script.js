// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function setActiveNavItem() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', setActiveNavItem);

// Initialize Brand Carousel Swiper
const brandSwiper = new Swiper('.brand-swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});

// Initialize Testimonials Swiper
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide',
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.querySelector('.menu-overlay');
const menuClose = document.querySelector('.menu-close');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

menuClose.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

menuOverlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Hero Section Animations
document.addEventListener('DOMContentLoaded', function() {
    // Fade in the hero title from top
    anime({
        targets: '.hero h1',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutQuart',
        delay: 300
    });

    // Fade in the hero paragraph with a slight delay
    anime({
        targets: '.hero p',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutQuart',
        delay: 800
    });

    // Fade in the CTA buttons with a staggered effect
    anime({
        targets: '.cta-buttons',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutQuart',
        delay: 1200
    });

    // Add enhanced hover animations to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        // Initial button fade in
        anime({
            targets: button,
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuart',
            delay: anime.stagger(200, {start: 1200})
        });

        // Enhanced hover animation
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                translateY: -5,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });

        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                duration: 300,
                easing: 'easeOutExpo'
            });
        });

        // Add click animation
        button.addEventListener('click', function() {
            anime({
                targets: this,
                scale: [1, 0.95, 1],
                duration: 300,
                easing: 'easeInOutQuad'
            });
        });
    });

    // Add a subtle background fade animation
    anime({
        targets: '.hero',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutQuart',
        delay: 0
    });

    // Services Section Animations
    // Fade in the services header
    anime({
        targets: '.services-header h2',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutQuart',
        delay: 300
    });

    // Fade in the services description
    anime({
        targets: '.services-header p',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutQuart',
        delay: 600
    });

    // Fade in service cards with staggered effect
    anime({
        targets: '.service-card',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuart',
        delay: anime.stagger(200, {start: 900})
    });
});

// Scroll Animation for Services Header
const servicesHeader = document.querySelector('.services-header');

function animateServicesHeader() {
    const servicesHeaderPosition = servicesHeader.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (servicesHeaderPosition < screenPosition) {
        // Animate the services header title
        anime({
            targets: '.services-header h2',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutQuart'
        });

        // Animate the services description
        anime({
            targets: '.services-header p',
            translateY: [-30, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutQuart',
            delay: 300
        });

        // Remove the scroll event listener after animation
        window.removeEventListener('scroll', animateServicesHeader);
    }
}

// Add scroll event listener for services header animation
window.addEventListener('scroll', animateServicesHeader);

// Initial check in case the section is already in view
animateServicesHeader();

// Scroll Animation for About Intro Content
const aboutIntro = document.querySelector('.about-intro-content');

function animateAboutIntro() {
    const aboutIntroPosition = aboutIntro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutIntroPosition < screenPosition) {
        // Animate the about intro title
        anime({
            targets: '.about-intro-content h2',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutQuart'
        });

        // Animate the about intro paragraph
        anime({
            targets: '.about-intro-content p',
            translateY: [-30, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutQuart',
            delay: 300
        });

        // Remove the scroll event listener after animation
        window.removeEventListener('scroll', animateAboutIntro);
    }
}

// Add scroll event listener for about intro animation
window.addEventListener('scroll', animateAboutIntro);

// Initial check in case the section is already in view
animateAboutIntro();

// Scroll Animation for Section Header
const sectionHeaders = document.querySelectorAll('.section-header');

function animateSectionHeaders() {
    sectionHeaders.forEach(header => {
        const headerPosition = header.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (headerPosition < screenPosition) {
            // Animate the section header title
            anime({
                targets: header.querySelector('h2'),
                translateY: [-50, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutQuart'
            });

            // Animate the section header paragraph
            anime({
                targets: header.querySelector('p'),
                translateY: [-30, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutQuart',
                delay: 300
            });

            // Remove the scroll event listener after animation
            window.removeEventListener('scroll', animateSectionHeaders);
        }
    });
}

// Add scroll event listener for section header animations
window.addEventListener('scroll', animateSectionHeaders);

// Initial check in case sections are already in view
animateSectionHeaders();

// Scroll Animation for Service Grid
const serviceGrid = document.querySelector('.services-grid');

function animateServiceGrid() {
    const serviceGridPosition = serviceGrid.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (serviceGridPosition < screenPosition) {
        // Animate service cards with staggered effect
        anime({
            targets: '.service-card',
            translateY: [-30, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuart',
            delay: anime.stagger(200, {start: 300})
        });

        // Remove the scroll event listener after animation
        window.removeEventListener('scroll', animateServiceGrid);
    }
}

// Add scroll event listener for service grid animation
window.addEventListener('scroll', animateServiceGrid);

// Initial check in case the section is already in view
animateServiceGrid();

// Scroll Animation for Section Title
const sectionTitles = document.querySelectorAll('.section-title');

function animateSectionTitles() {
    sectionTitles.forEach(title => {
        const titlePosition = title.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (titlePosition < screenPosition) {
            // Animate the section title from right
            anime({
                targets: title,
                translateX: [100, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutQuart'
            });

            // Remove the scroll event listener after animation
            window.removeEventListener('scroll', animateSectionTitles);
        }
    });
}

// Add scroll event listener for section title animations
window.addEventListener('scroll', animateSectionTitles);

// Initial check in case sections are already in view
animateSectionTitles(); 