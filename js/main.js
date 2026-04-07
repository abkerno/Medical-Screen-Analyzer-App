/**
 * axionis - Professional Healthcare Technology Website
 * Main JavaScript File
 * 
 * Features:
 * - Bilingual support (English/Arabic) with RTL/LTR switching
 * - Mobile navigation toggle
 * - Smooth scroll navigation
 * - Form validation
 * - Scroll animations
 * - Counter animation for statistics
 */

(function() {
    'use strict';

    // =========================================================================
    // Translations Database
    // =========================================================================
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.philosophy': 'Philosophy',
            'nav.solutions': 'Solutions',
            'nav.about': 'About',
            'nav.resources': 'Resources',
            'nav.contact': 'Contact',
            
            // Hero Section
            'hero.title': 'Connecting Technology & Medicine',
            'hero.subtitle': 'Intelligent, precise, and future-ready clinical solutions designed for global scalability. Seamless bilingual harmony across all platforms.',
            'hero.cta.primary': 'Request a Demo',
            'hero.cta.secondary': 'Learn More',
            
            // Philosophy Section
            'philosophy.title': 'Our Philosophy',
            'philosophy.subtitle': 'System Over Decoration',
            'philosophy.cards.connection.title': 'Connection',
            'philosophy.cards.connection.desc': 'Bridging healthcare systems with intelligent technology for seamless integration.',
            'philosophy.cards.continuity.title': 'Continuity',
            'philosophy.cards.continuity.desc': 'A systematic approach to continuous care, ensuring no gap in patient journey.',
            'philosophy.cards.precision.title': 'Precision',
            'philosophy.cards.precision.desc': 'Minimal design reflecting the accuracy and intelligence of our medical technology.',
            
            // Solutions Section
            'solutions.title': 'Our Solutions',
            'solutions.subtitle': 'Scalable Modules for Modern Healthcare',
            'solutions.badge': 'Featured',
            'solutions.cards.clinical.title': 'Clinical Management',
            'solutions.cards.clinical.desc': 'Comprehensive platform for managing patient records, appointments, and clinical workflows with precision.',
            'solutions.cards.clinical.features.0': 'Electronic Health Records',
            'solutions.cards.clinical.features.1': 'Appointment Scheduling',
            'solutions.cards.clinical.features.2': 'Clinical Decision Support',
            'solutions.cards.ai.title': 'axionis AI',
            'solutions.cards.ai.desc': 'Advanced artificial intelligence for predictive analytics, diagnosis support, and personalized treatment plans.',
            'solutions.cards.ai.features.0': 'Predictive Analytics',
            'solutions.cards.ai.features.1': 'Diagnosis Assistance',
            'solutions.cards.ai.features.2': 'Treatment Optimization',
            'solutions.cards.data.title': 'Data Integration',
            'solutions.cards.data.desc': 'Seamless integration of disparate healthcare data sources into a unified, actionable platform.',
            'solutions.cards.data.features.0': 'Multi-Source Integration',
            'solutions.cards.data.features.1': 'Real-time Synchronization',
            'solutions.cards.data.features.2': 'Secure Data Exchange',
            'solutions.cards.telemedicine.title': 'Telemedicine',
            'solutions.cards.telemedicine.desc': 'Secure, high-quality virtual consultations enabling remote patient care across geographical boundaries.',
            'solutions.cards.telemedicine.features.0': 'HD Video Consultations',
            'solutions.cards.telemedicine.features.1': 'Secure Messaging',
            'solutions.cards.telemedicine.features.2': 'Remote Monitoring',
            
            // About Section
            'about.title': 'Building Trust Through Precision',
            'about.text1': 'axionis represents the convergence of cutting-edge technology and compassionate healthcare. Our identity is rooted in the belief that medical solutions should be as elegant as they are effective.',
            'about.text2': 'The abstract minimal geometric mark at our core symbolizes connection, continuity of care, and the seamless integration of technology into medicine. Every design decision reflects our commitment to logical, intelligent, and professional solutions.',
            'about.stats.countries': 'Countries',
            'about.stats.partners': 'Partners',
            'about.stats.patients': 'Patients',
            'about.symbol.caption': 'The intersection of technology and care',
            
            // Resources Section
            'resources.title': 'Resources & Case Studies',
            'resources.subtitle': 'Evidence-Based Success',
            'resources.types.case': 'Case Study',
            'resources.types.report': 'Industry Report',
            'resources.types.brochure': 'Product Brochure',
            'resources.cards.study1.title': 'Digital Transformation in Regional Healthcare',
            'resources.cards.study1.desc': 'How a 500-bed hospital reduced administrative overhead by 40% while improving patient satisfaction scores.',
            'resources.cards.report1.title': 'The Future of AI in Clinical Decision Making',
            'resources.cards.report1.desc': 'Comprehensive analysis of AI adoption patterns and outcomes in modern healthcare facilities.',
            'resources.cards.brochure.title': 'axionis Platform Overview',
            'resources.cards.brochure.desc': 'Complete technical specifications and feature breakdown of the axionis healthcare ecosystem.',
            'resources.download': 'Download PDF',
            
            // Contact Section
            'contact.title': 'Get in Touch',
            'contact.text': 'Ready to transform your healthcare operations? Our team is here to help you find the right solution.',
            'contact.email.title': 'Email',
            'contact.phone.title': 'Phone',
            'contact.phone.en': '+1 (555) 123-4567 (English)',
            'contact.phone.ar': '+966 11 234 5678 (العربية)',
            'contact.location.title': 'Headquarters',
            'contact.location.address': 'Riyadh, Saudi Arabia<br>Dubai, UAE',
            'contact.form.name': 'Full Name',
            'contact.form.email': 'Email Address',
            'contact.form.company': 'Company/Organization',
            'contact.form.interest': 'Area of Interest',
            'contact.form.select': 'Select an option',
            'contact.form.options.demo': 'Request a Demo',
            'contact.form.options.partnership': 'Partnership Inquiry',
            'contact.form.options.support': 'Technical Support',
            'contact.form.options.other': 'Other',
            'contact.form.message': 'Message',
            'contact.form.errors.name': 'Please enter your name',
            'contact.form.errors.email': 'Please enter a valid email',
            'contact.form.errors.interest': 'Please select an option',
            'contact.form.errors.message': 'Please enter your message',
            'contact.form.submit': 'Send Message',
            
            // Footer
            'footer.tagline': 'Connecting Technology & Medicine',
            'footer.links.solutions': 'Solutions',
            'footer.links.clinical': 'Clinical Management',
            'footer.links.ai': 'axionis AI',
            'footer.links.data': 'Data Integration',
            'footer.links.telemedicine': 'Telemedicine',
            'footer.links.company': 'Company',
            'footer.links.about': 'About Us',
            'footer.links.philosophy': 'Philosophy',
            'footer.links.resources': 'Resources',
            'footer.links.contact': 'Contact',
            'footer.links.legal': 'Legal',
            'footer.links.privacy': 'Privacy Policy',
            'footer.links.terms': 'Terms of Service',
            'footer.links.cookies': 'Cookie Policy',
            'footer.copyright': '© 2024 axionis. All rights reserved.'
        },
        
        ar: {
            // Navigation
            'nav.home': 'الرئيسية',
            'nav.philosophy': 'فلسفتنا',
            'nav.solutions': 'الحلول',
            'nav.about': 'من نحن',
            'nav.resources': 'الموارد',
            'nav.contact': 'اتصل بنا',
            
            // Hero Section
            'hero.title': 'نربط التكنولوجيا بالطب',
            'hero.subtitle': 'حلول سريرية ذكية ودقيقة ومستقبلية مصممة للتوسع العالمي. تناغم ثنائي اللغة بسلاسة عبر جميع المنصات.',
            'hero.cta.primary': 'اطلب عرضًا توضيحيًا',
            'hero.cta.secondary': 'اعرف المزيد',
            
            // Philosophy Section
            'philosophy.title': 'فلسفتنا',
            'philosophy.subtitle': 'النظام قبل الزخرفة',
            'philosophy.cards.connection.title': 'التواصل',
            'philosophy.cards.connection.desc': 'ربط أنظمة الرعاية الصحية بالتكنولوجيا الذكية لتكامل سلس.',
            'philosophy.cards.continuity.title': 'الاستمرارية',
            'philosophy.cards.continuity.desc': 'نهج منهجي للرعاية المستمرة، لضمان عدم وجود فجوة في رحلة المريض.',
            'philosophy.cards.precision.title': 'الدقة',
            'philosophy.cards.precision.desc': 'تصميم بسيط يعكس دقة وذكاء تقنيتنا الطبية.',
            
            // Solutions Section
            'solutions.title': 'حلولنا',
            'solutions.subtitle': 'وحدات قابلة للتوسع للرعاية الصحية الحديثة',
            'solutions.badge': 'مميز',
            'solutions.cards.clinical.title': 'الإدارة السريرية',
            'solutions.cards.clinical.desc': 'منصة شاملة لإدارة سجلات المرضى والمواعيد وسير العمل السريري بدقة.',
            'solutions.cards.clinical.features.0': 'السجلات الصحية الإلكترونية',
            'solutions.cards.clinical.features.1': 'جدولة المواعيد',
            'solutions.cards.clinical.features.2': 'دعم القرار السريري',
            'solutions.cards.ai.title': 'اكسيونيس الذكاء الاصطناعي',
            'solutions.cards.ai.desc': 'ذكاء اصطناعي متقدم للتحليلات التنبؤية ودعم التشخيص وخطط العلاج الشخصية.',
            'solutions.cards.ai.features.0': 'التحليلات التنبؤية',
            'solutions.cards.ai.features.1': 'مساعدة التشخيص',
            'solutions.cards.ai.features.2': 'تحسين العلاج',
            'solutions.cards.data.title': 'تكامل البيانات',
            'solutions.cards.data.desc': 'تكامل سلس لمصادر بيانات الرعاية الصحية المتباينة في منصة موحدة قابلة للتنفيذ.',
            'solutions.cards.data.features.0': 'تكامل مصادر متعددة',
            'solutions.cards.data.features.1': 'المزامنة في الوقت الفعلي',
            'solutions.cards.data.features.2': 'تبادل البيانات الآمن',
            'solutions.cards.telemedicine.title': 'الطب عن بعد',
            'solutions.cards.telemedicine.desc': 'استشارات افتراضية آمنة وعالية الجودة تمكن من رعاية المرضى عن بعد عبر الحدود الجغرافية.',
            'solutions.cards.telemedicine.features.0': 'استشارات فيديو عالية الدقة',
            'solutions.cards.telemedicine.features.1': 'مراسلة آمنة',
            'solutions.cards.telemedicine.features.2': 'المراقبة عن بعد',
            
            // About Section
            'about.title': 'بناء الثقة من خلال الدقة',
            'about.text1': 'تمثل اكسيونيس التقاء التكنولوجيا المتطورة والرعاية الصحية الرحيمة. هويتنا متأصلة في الاعتقاد بأن الحلول الطبية يجب أن تكون أنيقة بقدر فعاليتها.',
            'about.text2': 'العلامة الهندسية البسيطة المجردة في جوهرنا ترمز إلى التواصل واستمرارية الرعاية والتكامل السلس للتكنولوجيا في الطب. كل قرار تصميم يعكس التزامنا بالحلول المنطقية والذكية والمهنية.',
            'about.stats.countries': 'دولة',
            'about.stats.partners': 'شريك',
            'about.stats.patients': 'مريض',
            'about.symbol.caption': 'تقاطع التكنولوجيا والرعاية',
            
            // Resources Section
            'resources.title': 'الموارد ودراسات الحالة',
            'resources.subtitle': 'نجاح قائم على الأدلة',
            'resources.types.case': 'دراسة حالة',
            'resources.types.report': 'تقرير صناعي',
            'resources.types.brochure': 'كتيب المنتج',
            'resources.cards.study1.title': 'التحول الرقمي في الرعاية الصحية الإقليمية',
            'resources.cards.study1.desc': 'كيف قللت مستشفى مكونة من 500 سرير النفقات الإدارية بنسبة 40٪ مع تحسين درجات رضا المرضى.',
            'resources.cards.report1.title': 'مستقبل الذكاء الاصطناعي في اتخاذ القرارات السريرية',
            'resources.cards.report1.desc': 'تحليل شامل لأنماط اعتماد الذكاء الاصطناعي والنتائج في مرافق الرعاية الصحية الحديثة.',
            'resources.cards.brochure.title': 'نظرة عامة على منصة اكسيونيس',
            'resources.cards.brochure.desc': 'المواصفات التقنية الكاملة وتفصيل الميزات لنظام اكسيونيس البيئي للرعاية الصحية.',
            'resources.download': 'تنزيل PDF',
            
            // Contact Section
            'contact.title': 'تواصل معنا',
            'contact.text': 'هل أنت مستعد لتحويل عمليات الرعاية الصحية الخاصة بك؟ فريقنا هنا لمساعدتك في العثور على الحل المناسب.',
            'contact.email.title': 'البريد الإلكتروني',
            'contact.phone.title': 'الهاتف',
            'contact.phone.en': '+1 (555) 123-4567 (English)',
            'contact.phone.ar': '+966 11 234 5678 (العربية)',
            'contact.location.title': 'المقر الرئيسي',
            'contact.location.address': 'الرياض، المملكة العربية السعودية<br>دبي، الإمارات العربية المتحدة',
            'contact.form.name': 'الاسم الكامل',
            'contact.form.email': 'عنوان البريد الإلكتروني',
            'contact.form.company': 'الشركة/المؤسسة',
            'contact.form.interest': 'مجال الاهتمام',
            'contact.form.select': 'اختر خيارًا',
            'contact.form.options.demo': 'طلب عرض توضيحي',
            'contact.form.options.partnership': 'استفسار عن الشراكة',
            'contact.form.options.support': 'الدعم الفني',
            'contact.form.options.other': 'آخر',
            'contact.form.message': 'الرسالة',
            'contact.form.errors.name': 'الرجاء إدخال اسمك',
            'contact.form.errors.email': 'الرجاء إدخال بريد إلكتروني صالح',
            'contact.form.errors.interest': 'الرجاء اختيار خيار',
            'contact.form.errors.message': 'الرجاء إدخال رسالتك',
            'contact.form.submit': 'إرسال الرسالة',
            
            // Footer
            'footer.tagline': 'نربط التكنولوجيا بالطب',
            'footer.links.solutions': 'الحلول',
            'footer.links.clinical': 'الإدارة السريرية',
            'footer.links.ai': 'اكسيونيس الذكاء الاصطناعي',
            'footer.links.data': 'تكامل البيانات',
            'footer.links.telemedicine': 'الطب عن بعد',
            'footer.links.company': 'الشركة',
            'footer.links.about': 'من نحن',
            'footer.links.philosophy': 'فلسفتنا',
            'footer.links.resources': 'الموارد',
            'footer.links.contact': 'اتصل بنا',
            'footer.links.legal': 'قانوني',
            'footer.links.privacy': 'سياسة الخصوصية',
            'footer.links.terms': 'شروط الخدمة',
            'footer.links.cookies': 'سياسة ملفات تعريف الارتباط',
            'footer.copyright': '© 2024 اكسيونيس. جميع الحقوق محفوظة.'
        }
    };

    // =========================================================================
    // State Management
    // =========================================================================
    let currentLang = localStorage.getItem('axionis-lang') || 'en';

    // =========================================================================
    // DOM Elements
    // =========================================================================
    const elements = {
        langToggle: null,
        mobileMenuToggle: null,
        header: null,
        navLinks: [],
        contactForm: null
    };

    // =========================================================================
    // Initialize Application
    // =========================================================================
    function init() {
        cacheElements();
        applyLanguage(currentLang);
        setupEventListeners();
        setupScrollAnimations();
        setupCounterAnimation();
        updateActiveNavLink();
    }

    // Cache DOM elements
    function cacheElements() {
        elements.langToggle = document.getElementById('langToggle');
        elements.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        elements.header = document.querySelector('.site-header');
        elements.navLinks = document.querySelectorAll('.nav-link');
        elements.contactForm = document.getElementById('contactForm');
    }

    // =========================================================================
    // Language Switching
    // =========================================================================
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('axionis-lang', lang);
        
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update body class
        document.body.className = `lang-${lang}`;
        
        // Update language toggle button
        if (elements.langToggle) {
            const langCurrent = elements.langToggle.querySelector('.lang-current');
            const langAlt = elements.langToggle.querySelector('.lang-alt');
            
            if (lang === 'en') {
                langCurrent.textContent = 'EN';
                langAlt.textContent = 'عربي';
            } else {
                langCurrent.textContent = 'عربي';
                langAlt.textContent = 'EN';
            }
        }
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update form placeholders
        updateFormPlaceholders();
    }

    function updateFormPlaceholders() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const companyInput = document.getElementById('company');
        const messageInput = document.getElementById('message');
        
        if (nameInput) nameInput.placeholder = currentLang === 'en' ? 'John Doe' : 'الاسم الكامل';
        if (emailInput) emailInput.placeholder = currentLang === 'en' ? 'john@example.com' : 'البريد الإلكتروني';
        if (companyInput) companyInput.placeholder = currentLang === 'en' ? 'Company Name' : 'اسم الشركة';
        if (messageInput) messageInput.placeholder = currentLang === 'en' ? 'Your message...' : 'رسالتك...';
    }

    // =========================================================================
    // Event Listeners
    // =========================================================================
    function setupEventListeners() {
        // Language toggle
        if (elements.langToggle) {
            elements.langToggle.addEventListener('click', toggleLanguage);
        }
        
        // Mobile menu toggle
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        }
        
        // Scroll events
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Navigation links
        elements.navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
        
        // Contact form
        if (elements.contactForm) {
            elements.contactForm.addEventListener('submit', handleFormSubmit);
        }
        
        // Close mobile menu on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                closeMobileMenu();
            }
        });
    }

    function toggleLanguage() {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(newLang);
    }

    function toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const isExpanded = elements.mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            closeMobileMenu();
        } else {
            openMobileMenu(mobileMenu);
        }
    }

    function openMobileMenu(mobileMenu) {
        if (!mobileMenu) {
            // Create mobile menu if it doesn't exist
            const navList = document.querySelector('.nav-list');
            if (navList) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = `<nav role="navigation" aria-label="Mobile navigation">
                    <ul class="nav-list">${navList.innerHTML}</ul>
                </nav>`;
                document.body.appendChild(mobileMenu);
                
                // Add click handlers to new links
                mobileMenu.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', handleNavClick);
                });
            }
        }
        
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            elements.mobileMenuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }

    function handleScroll() {
        // Header shadow on scroll
        if (elements.header) {
            if (window.scrollY > 50) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
        }
        
        // Update active nav link
        updateActiveNavLink();
    }

    function handleNavClick(e) {
        const href = this.getAttribute('href');
        
        // Close mobile menu if open
        closeMobileMenu();
        
        // Handle anchor links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                elements.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        let isValid = true;
        const form = elements.contactForm;
        
        // Validate name
        const nameInput = form.querySelector('#name');
        if (!nameInput.value.trim()) {
            setFieldError(nameInput, true);
            isValid = false;
        } else {
            setFieldError(nameInput, false);
        }
        
        // Validate email
        const emailInput = form.querySelector('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            setFieldError(emailInput, true);
            isValid = false;
        } else {
            setFieldError(emailInput, false);
        }
        
        // Validate interest
        const interestSelect = form.querySelector('#interest');
        if (!interestSelect.value) {
            setFieldError(interestSelect, true);
            isValid = false;
        } else {
            setFieldError(interestSelect, false);
        }
        
        // Validate message
        const messageInput = form.querySelector('#message');
        if (!messageInput.value.trim()) {
            setFieldError(messageInput, true);
            isValid = false;
        } else {
            setFieldError(messageInput, false);
        }
        
        if (isValid) {
            // Show success message (in production, this would submit to a server)
            showSuccessMessage();
            form.reset();
        }
    }

    function setFieldError(input, hasError) {
        const formGroup = input.closest('.form-group');
        if (formGroup) {
            if (hasError) {
                formGroup.classList.add('error');
                input.classList.add('error');
            } else {
                formGroup.classList.remove('error');
                input.classList.remove('error');
            }
        }
    }

    function showSuccessMessage() {
        const successMsg = currentLang === 'en' 
            ? 'Thank you! Your message has been sent successfully.' 
            : 'شكرًا لك! تم إرسال رسالتك بنجاح.';
        
        alert(successMsg);
    }

    // =========================================================================
    // Scroll Animations
    // =========================================================================
    function setupScrollAnimations() {
        // Add fade-in class to animatable elements
        const animatableElements = document.querySelectorAll('.philosophy-card, .solution-card, .resource-card, .about-content, .about-visual, .contact-info, .contact-form-wrapper');
        
        animatableElements.forEach(el => {
            el.classList.add('fade-in');
        });
        
        // Observe elements
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatableElements.forEach(el => observer.observe(el));
    }

    // =========================================================================
    // Counter Animation
    // =========================================================================
    function setupCounterAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // =========================================================================
    // Initialize on DOM Ready
    // =========================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
