/**
 * CLINEXA WEBSITE JAVASCRIPT
 * Bilingual Language Toggle & Interactive Features
 */

// Language State Management
const LanguageManager = {
    currentLang: 'en',
    
    // Translations data
    translations: {},
    
    // Initialize language manager
    init() {
        this.loadSavedLanguage();
        this.bindEvents();
        this.updatePageDirection();
    },
    
    // Load saved language from localStorage
    loadSavedLanguage() {
        const saved = localStorage.getItem('clinexa-lang');
        if (saved && (saved === 'en' || saved === 'ar')) {
            this.currentLang = saved;
        }
    },
    
    // Save language preference
    saveLanguage(lang) {
        localStorage.setItem('clinexa-lang', lang);
    },
    
    // Toggle between English and Arabic
    toggle() {
        this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.applyLanguage();
        this.saveLanguage(this.currentLang);
        this.updatePageDirection();
        this.updateLangToggleButton();
    },
    
    // Apply language to all translatable elements
    applyLanguage() {
        const translatableElements = document.querySelectorAll('[data-en][data-ar]');
        
        translatableElements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            
            // Preserve any arrow or special characters
            const hasArrow = element.textContent.includes('↓');
            if (hasArrow && !text.includes('↓')) {
                element.textContent = text + ' ↓';
            } else {
                element.textContent = text;
            }
        });
        
        // Update form labels
        this.updateFormLabels();
    },
    
    // Update form field labels
    updateFormLabels() {
        const labels = document.querySelectorAll('.form-group label');
        labels.forEach(label => {
            const text = label.getAttribute(`data-${this.currentLang}`);
            if (text) {
                label.textContent = text;
            }
        });
    },
    
    // Update page direction (LTR/RTL)
    updatePageDirection() {
        const html = document.documentElement;
        if (this.currentLang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
        }
    },
    
    // Update language toggle button text
    updateLangToggleButton() {
        const btn = document.getElementById('langToggle');
        if (btn) {
            const langSpan = btn.querySelector('.lang-current');
            if (this.currentLang === 'en') {
                langSpan.textContent = 'العربية';
            } else {
                langSpan.textContent = 'English';
            }
        }
    },
    
    // Bind event listeners
    bindEvents() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggle());
        }
    }
};

// Mobile Menu Manager
const MobileMenu = {
    isOpen: false,
    
    init() {
        this.bindEvents();
    },
    
    toggle() {
        this.isOpen = !this.isOpen;
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.getElementById('mobileMenuBtn');
        
        if (this.isOpen) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
            navLinks.style.padding = '1rem';
            navLinks.style.borderBottom = '1px solid var(--color-border)';
            menuBtn.classList.add('active');
        } else {
            navLinks.style.display = '';
            navLinks.style.flexDirection = '';
            navLinks.style.position = '';
            navLinks.style.top = '';
            navLinks.style.left = '';
            navLinks.style.right = '';
            navLinks.style.background = '';
            navLinks.style.padding = '';
            navLinks.style.borderBottom = '';
            menuBtn.classList.remove('active');
        }
        
        // Adjust for RTL
        if (document.documentElement.dir === 'rtl') {
            navLinks.style.direction = 'rtl';
        }
    },
    
    bindEvents() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => this.toggle());
        }
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.isOpen) {
                    this.toggle();
                }
            });
        });
    }
};

// Smooth Scroll for Anchor Links
const SmoothScroll = {
    init() {
        this.bindEvents();
    },
    
    bindEvents() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
};

// Contact Form Handler
const ContactForm = {
    init() {
        this.bindEvents();
    },
    
    bindEvents() {
        const form = document.getElementById('contactForm');
        
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    },
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Validate form
        if (!this.validateForm(data)) {
            return;
        }
        
        // Show success message (in real implementation, send to server)
        this.showSuccessMessage();
        
        // Reset form
        e.target.reset();
    },
    
    validateForm(data) {
        const requiredFields = ['name', 'email', 'message'];
        
        for (const field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                alert(LanguageManager.currentLang === 'en' 
                    ? 'Please fill in all required fields' 
                    : 'يرجى ملء جميع الحقول المطلوبة');
                return false;
            }
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert(LanguageManager.currentLang === 'en'
                ? 'Please enter a valid email address'
                : 'يرجى إدخال عنوان بريد إلكتروني صالح');
            return false;
        }
        
        return true;
    },
    
    showSuccessMessage() {
        const message = LanguageManager.currentLang === 'en'
            ? 'Thank you! Your message has been sent successfully.'
            : 'شكرًا لك! تم إرسال رسالتك بنجاح.';
        
        alert(message);
    }
};

// Navbar Scroll Effect
const NavbarEffect = {
    init() {
        this.bindEvents();
    },
    
    bindEvents() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
};

// Intersection Observer for Animations
const ScrollAnimations = {
    init() {
        if ('IntersectionObserver' in window) {
            this.setupObserver();
        }
    },
    
    setupObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe cards and modules
        const animatedElements = document.querySelectorAll(
            '.philosophy-card, .solution-module, .resource-card'
        );
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
    MobileMenu.init();
    SmoothScroll.init();
    ContactForm.init();
    NavbarEffect.init();
    ScrollAnimations.init();
    
    // Apply initial language state
    LanguageManager.applyLanguage();
    LanguageManager.updateLangToggleButton();
});

// Handle responsive menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.display = '';
            navLinks.style.flexDirection = '';
            navLinks.style.position = '';
            navLinks.style.top = '';
            navLinks.style.left = '';
            navLinks.style.right = '';
            navLinks.style.background = '';
            navLinks.style.padding = '';
            navLinks.style.borderBottom = '';
        }
        MobileMenu.isOpen = false;
    }
});

// Console branding (for developers)
console.log('%c Clinexa ', 'background: #0A84FF; color: white; font-size: 20px; font-weight: bold; padding: 5px 10px;');
console.log('%c Connecting Technology & Medicine ', 'color: #0F172A; font-size: 14px;');
