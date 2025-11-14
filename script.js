// Language Management
const DEFAULT_LANG = 'en';
let currentLang = DEFAULT_LANG;

function initLanguage() {
    const savedLang = localStorage.getItem('zhishi-lang') || DEFAULT_LANG;
    currentLang = savedLang;
    updateLanguage(currentLang);
    updateLangToggleButton();
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('zhishi-lang', lang);
    
    const elements = document.querySelectorAll('[data-cn][data-en]');
    elements.forEach(el => {
        if (lang === 'cn') {
            el.textContent = el.getAttribute('data-cn');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });

    const htmlElement = document.documentElement;
    htmlElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
}

function updateLangToggleButton() {
    const button = document.getElementById('langToggle');
    if (button) {
        button.textContent = currentLang === 'en' ? '中文' : 'English';
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'cn' : 'en';
    updateLanguage(newLang);
    updateLangToggleButton();
}

// Language Toggle Button Event Listener
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // FAQ Accordion
    initFaqAccordion();

    // Smooth Scroll
    initSmoothScroll();

    // Scroll Animation
    initScrollAnimation();
});

// FAQ Accordion
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animation - Elements fade in as they come into view
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature cards, scenario cards, and other elements
    const elementsToObserve = document.querySelectorAll(
        '.feature-card, .scenario-card, .faq-item, .advantage-item, section'
    );
    
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
}

// Add fade-in animation styles
const style = document.createElement('style');
style.textContent = `
    .feature-card, .scenario-card, .faq-item {
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .feature-card:nth-child(1) { animation-delay: 0s; }
    .feature-card:nth-child(2) { animation-delay: 0.1s; }
    .feature-card:nth-child(3) { animation-delay: 0.2s; }
    .feature-card:nth-child(4) { animation-delay: 0.3s; }
    .feature-card:nth-child(5) { animation-delay: 0.4s; }
    .feature-card:nth-child(6) { animation-delay: 0.5s; }

    .scenario-card:nth-child(1) { animation-delay: 0s; }
    .scenario-card:nth-child(2) { animation-delay: 0.1s; }
    .scenario-card:nth-child(3) { animation-delay: 0.2s; }
    .scenario-card:nth-child(4) { animation-delay: 0.3s; }

    .faq-item:nth-child(1) { animation-delay: 0s; }
    .faq-item:nth-child(2) { animation-delay: 0.1s; }
    .faq-item:nth-child(3) { animation-delay: 0.2s; }
    .faq-item:nth-child(4) { animation-delay: 0.3s; }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in {
        animation: fadeInUp 0.6s ease-out !important;
    }
`;
document.head.appendChild(style);

// Button Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const text = button.textContent.trim();
            
            // Handle Download button
            if (text === 'Download Now' || text === '立即下载') {
                handleDownloadClick();
            }
            // Handle Learn More button
            else if (text === 'Learn More' || text === '了解更多') {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

function handleDownloadClick() {
    // Placeholder for download functionality
    alert('Download link will be available soon!');
    // In production, this would redirect to download or show a download modal
}

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavLink();

// Scroll Performance Optimization
let ticking = false;
let lastScrollY = 0;

function handleScroll() {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(updateScrollElements);
        ticking = true;
    }
}

function updateScrollElements() {
    // Add any scroll-dependent updates here
    ticking = false;
}

window.addEventListener('scroll', handleScroll, { passive: true });

// Prevent layout shift
document.addEventListener('DOMContentLoaded', function() {
    // Ensure smooth rendering
    if ('scrollbarWidth' in document.documentElement.style) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.scrollbarWidth = `${scrollbarWidth}px`;
    }
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(event) {
    // Close FAQ on Escape
    if (event.key === 'Escape') {
        const activeFaqItems = document.querySelectorAll('.faq-item.active');
        activeFaqItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Toggle language with Ctrl+L
    if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
        event.preventDefault();
        toggleLanguage();
    }
});

// Analytics Placeholder (can be integrated with actual analytics service)
function trackEvent(eventName, data = {}) {
    if (window.console && window.console.log) {
        console.log(`Event: ${eventName}`, data);
    }
}

// Track page view
trackEvent('page_view', {
    title: document.title,
    url: window.location.href
});

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('button_click', {
                text: button.textContent.trim(),
                class: button.className
            });
        });
    });

    // Track FAQ interactions
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', () => {
            trackEvent('faq_click', {
                question_index: index,
                question_text: question.textContent.trim()
            });
        });
    });

    // Track language changes
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            trackEvent('language_change', {
                new_language: currentLang
            });
        });
    }
});

// Performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            trackEvent('page_load', {
                load_time_ms: loadTime,
                dom_ready_time: timing.domContentLoadedEventEnd - timing.navigationStart
            });
        }, 0);
    });
}

// Accessibility: Focus visible styles
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// Add keyboard navigation styles
const a11yStyle = document.createElement('style');
a11yStyle.textContent = `
    body.keyboard-nav *:focus {
        outline: 2px solid #5865f2;
        outline-offset: 2px;
    }
`;
document.head.appendChild(a11yStyle);
