// Translations
const translations = {
    ru: {
        meta: {
            title: 'Портфолио'
        },
        nav: {
            home: 'Главная',
            about: 'О себе',
            skills: 'Навыки',
            projects: 'Проекты',
            contact: 'Контакты'
        },
        hero: {
            greeting: 'Привет, я',
            subtitle: 'Создаю впечатляющие веб-приложения с современными анимациями',
            projectsBtn: 'Мои проекты',
            contactBtn: 'Связаться'
        },
        typing: {
            texts: ['Разработчик', 'Дизайнер', 'Креативщик']
        },
        about: {
            title: 'О себе',
            text1: 'Я увлеченный разработчик, который создает красивые и функциональные веб-приложения. Моя цель - объединить креативность и технологии для создания незабываемого пользовательского опыта.',
            text2: 'Специализируюсь на создании современных интерфейсов с плавными анимациями и интерактивными элементами.',
            stats: {
                projects: 'Проектов',
                clients: 'Довольных клиентов',
                experience: 'Лет опыта'
            }
        },
        skills: {
            title: 'Навыки',
            frontend: {
                title: 'Frontend',
                desc: 'HTML, CSS, JavaScript, React, Vue'
            },
            design: {
                title: 'Дизайн',
                desc: 'UI/UX, Figma, Adobe XD'
            },
            animations: {
                title: 'Анимации',
                desc: 'CSS Animations, GSAP, Framer Motion'
            },
            backend: {
                title: 'Backend',
                desc: 'Node.js, Python, Databases'
            }
        },
        projects: {
            title: 'Проекты',
            view: 'Посмотреть',
            project1: {
                title: 'E-Commerce Platform',
                desc: 'Современная платформа для онлайн-торговли'
            },
            project2: {
                title: 'Dashboard Analytics',
                desc: 'Интерактивная панель аналитики'
            },
            project3: {
                title: 'Mobile App',
                desc: 'Кроссплатформенное мобильное приложение'
            }
        },
        contact: {
            title: 'Связаться со мной',
            email: {
                label: 'Email'
            },
            phone: {
                label: 'Телефон'
            },
            location: {
                label: 'Локация',
                value: 'Москва, Россия'
            },
            form: {
                name: 'Ваше имя',
                email: 'Email',
                message: 'Сообщение',
                submit: 'Отправить',
                submitted: 'Отправлено! ✓',
                sending: 'Отправка...',
                error: 'Ошибка отправки',
                notConfigured: 'Форма не настроена. Пожалуйста, настройте config.js'
            }
        },
        footer: {
            rights: 'Все права защищены.'
        }
    },
    en: {
        meta: {
            title: 'Portfolio'
        },
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hello, I am',
            subtitle: 'Creating impressive web applications with modern animations',
            projectsBtn: 'My Projects',
            contactBtn: 'Get in Touch'
        },
        typing: {
            texts: ['Developer', 'Designer', 'Creative']
        },
        about: {
            title: 'About Me',
            text1: 'I am a passionate developer who creates beautiful and functional web applications. My goal is to combine creativity and technology to create an unforgettable user experience.',
            text2: 'I specialize in creating modern interfaces with smooth animations and interactive elements.',
            stats: {
                projects: 'Projects',
                clients: 'Happy Clients',
                experience: 'Years of Experience'
            }
        },
        skills: {
            title: 'Skills',
            frontend: {
                title: 'Frontend',
                desc: 'HTML, CSS, JavaScript, React, Vue'
            },
            design: {
                title: 'Design',
                desc: 'UI/UX, Figma, Adobe XD'
            },
            animations: {
                title: 'Animations',
                desc: 'CSS Animations, GSAP, Framer Motion'
            },
            backend: {
                title: 'Backend',
                desc: 'Node.js, Python, Databases'
            }
        },
        projects: {
            title: 'Projects',
            view: 'View',
            project1: {
                title: 'E-Commerce Platform',
                desc: 'Modern platform for online trading'
            },
            project2: {
                title: 'Dashboard Analytics',
                desc: 'Interactive analytics dashboard'
            },
            project3: {
                title: 'Mobile App',
                desc: 'Cross-platform mobile application'
            }
        },
        contact: {
            title: 'Get in Touch',
            email: {
                label: 'Email'
            },
            phone: {
                label: 'Phone'
            },
            location: {
                label: 'Location',
                value: 'Moscow, Russia'
            },
            form: {
                name: 'Your Name',
                email: 'Email',
                message: 'Message',
                submit: 'Send',
                submitted: 'Sent! ✓',
                sending: 'Sending...',
                error: 'Sending error',
                notConfigured: 'Form is not configured. Please configure config.js'
            }
        },
        footer: {
            rights: 'All rights reserved.'
        }
    },
    de: {
        meta: {
            title: 'Portfolio'
        },
        nav: {
            home: 'Startseite',
            about: 'Über mich',
            skills: 'Fähigkeiten',
            projects: 'Projekte',
            contact: 'Kontakt'
        },
        hero: {
            greeting: 'Hallo, ich bin',
            subtitle: 'Erstelle beeindruckende Webanwendungen mit modernen Animationen',
            projectsBtn: 'Meine Projekte',
            contactBtn: 'Kontakt aufnehmen'
        },
        typing: {
            texts: ['Entwickler', 'Designer', 'Kreativer']
        },
        about: {
            title: 'Über mich',
            text1: 'Ich bin ein leidenschaftlicher Entwickler, der schöne und funktionale Webanwendungen erstellt. Mein Ziel ist es, Kreativität und Technologie zu kombinieren, um ein unvergessliches Benutzererlebnis zu schaffen.',
            text2: 'Ich spezialisiere mich auf die Erstellung moderner Benutzeroberflächen mit flüssigen Animationen und interaktiven Elementen.',
            stats: {
                projects: 'Projekte',
                clients: 'Zufriedene Kunden',
                experience: 'Jahre Erfahrung'
            }
        },
        skills: {
            title: 'Fähigkeiten',
            frontend: {
                title: 'Frontend',
                desc: 'HTML, CSS, JavaScript, React, Vue'
            },
            design: {
                title: 'Design',
                desc: 'UI/UX, Figma, Adobe XD'
            },
            animations: {
                title: 'Animationen',
                desc: 'CSS Animationen, GSAP, Framer Motion'
            },
            backend: {
                title: 'Backend',
                desc: 'Node.js, Python, Datenbanken'
            }
        },
        projects: {
            title: 'Projekte',
            view: 'Ansehen',
            project1: {
                title: 'E-Commerce Plattform',
                desc: 'Moderne Plattform für Online-Handel'
            },
            project2: {
                title: 'Dashboard Analytics',
                desc: 'Interaktives Analytics-Dashboard'
            },
            project3: {
                title: 'Mobile App',
                desc: 'Plattformübergreifende mobile Anwendung'
            }
        },
        contact: {
            title: 'Kontakt aufnehmen',
            email: {
                label: 'E-Mail'
            },
            phone: {
                label: 'Telefon'
            },
            location: {
                label: 'Standort',
                value: 'Moskau, Russland'
            },
            form: {
                name: 'Ihr Name',
                email: 'E-Mail',
                message: 'Nachricht',
                submit: 'Senden',
                submitted: 'Gesendet! ✓',
                sending: 'Wird gesendet...',
                error: 'Sendefehler',
                notConfigured: 'Formular ist nicht konfiguriert. Bitte konfigurieren Sie config.js'
            }
        },
        footer: {
            rights: 'Alle Rechte vorbehalten.'
        }
    }
};

// Get current language from localStorage or default to 'ru'
let currentLanguage = localStorage.getItem('language') || 'ru';

// Typing Animation
const typingText = document.querySelector('.typing-text');
let texts = translations[currentLanguage].typing.texts;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    if (!typingText) return;
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 3000); // Увеличено с 2000 до 3000 - пауза перед удалением
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    // Замедлена скорость: удаление быстрее, печать медленнее для читаемости
    const speed = isDeleting ? 40 : 150; // Увеличено с 100 до 150 для печати
    setTimeout(typeText, speed);
}

// Function to get nested translation value
function getTranslation(key, translations) {
    return key.split('.').reduce((obj, k) => obj && obj[k], translations);
}

// Function to update page language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update typing texts
    texts = translations[lang].typing.texts;
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typingText) {
        typingText.textContent = '';
    }
    setTimeout(typeText, 500);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, translations[lang]);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key, translations[lang]);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update title
    const titleTranslation = getTranslation('meta.title', translations[lang]);
    if (titleTranslation) {
        document.title = titleTranslation;
    }
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update form submission text
    const submitBtn = document.querySelector('.contact-form button');
    if (submitBtn && submitBtn.textContent.includes('✓')) {
        const submittedText = getTranslation('contact.form.submitted', translations[lang]);
        if (submittedText) {
            submitBtn.textContent = submittedText;
        }
    }
}

// Language switcher functionality
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// Initialize language on page load
updateLanguage(currentLanguage);

// Start typing animation - задержка перед началом
setTimeout(typeText, 1500);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in classes
document.querySelectorAll('.fade-in, .fade-in-up, .section-title, .skill-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Animated Counter for Stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Observe stat numbers
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// Animate Skill Bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            setTimeout(() => {
                progressBar.style.width = width + '%';
            }, 300);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 500;
    }
});

// URL backend API
// Автоматическое определение: локально или в продакшене
// Для продакшена замените на URL вашего backend сервера
const API_BASE_URL = (() => {
    // Если работаем локально
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3001';
    }
    // Для продакшена - замените на ваш URL
    // Пример: return 'https://your-backend.onrender.com';
    return 'http://localhost:3001'; // Временно, замените на продакшен URL
})();

// Функция отправки формы на backend
async function sendContactForm(formData) {
    try {
        const requestBody = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };
        
        console.log('Отправка запроса на:', `${API_BASE_URL}/api/contact`);
        console.log('Тело запроса:', requestBody);
        
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        console.log('Ответ сервера:', data);
        
        if (!response.ok) {
            // Ошибка от сервера
            const errorMessage = data.errors && data.errors.length > 0 
                ? data.errors.join(', ') 
                : (data.message || 'Ошибка отправки сообщения');
            throw new Error(errorMessage);
        }
        
        return { success: true, data };
    } catch (error) {
        console.error('Ошибка отправки формы:', error);
        return { 
            success: false, 
            message: error.message || 'Не удалось отправить сообщение. Проверьте, что backend сервер запущен.'
        };
    }
}

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        
        // Получаем данные формы более надежным способом
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageTextarea = contactForm.querySelector('textarea');
        
        if (!nameInput || !emailInput || !messageTextarea) {
            console.error('Не удалось найти поля формы');
            alert('Ошибка: поля формы не найдены');
            return;
        }
        
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageTextarea.value.trim()
        };
        
        // Валидация на клиенте
        if (!formData.name || !formData.email || !formData.message) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        
        // Дополнительная проверка длины
        if (formData.name.length < 2) {
            alert('Имя должно содержать минимум 2 символа');
            return;
        }
        
        if (formData.message.length < 5) {
            alert('Сообщение должно содержать минимум 5 символов');
            return;
        }
        
        // Проверка email формата
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Пожалуйста, введите корректный email адрес');
            return;
        }
        
        console.log('Отправка данных формы:', formData);
        
        // Блокируем кнопку
        button.disabled = true;
        const sendingText = getTranslation('contact.form.sending', translations[currentLanguage]);
        button.textContent = sendingText || 'Отправка...';
        
        try {
            // Отправляем данные на backend
            const result = await sendContactForm(formData);
            
            if (result.success) {
                // Успешная отправка
                const submittedText = getTranslation('contact.form.submitted', translations[currentLanguage]);
                button.textContent = submittedText || 'Отправлено! ✓';
                button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Сбрасываем форму
                contactForm.reset();
                
                // Возвращаем кнопку в исходное состояние через 3 секунды
                setTimeout(() => {
                    const submitText = getTranslation('contact.form.submit', translations[currentLanguage]);
                    button.textContent = submitText || 'Отправить';
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            } else {
                // Ошибка отправки
                button.textContent = originalText;
                button.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                
                const errorMsg = result.message || 'Ошибка отправки сообщения. Убедитесь, что backend сервер запущен.';
                alert(errorMsg);
                
                setTimeout(() => {
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            button.textContent = originalText;
            button.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            
            const errorText = getTranslation('contact.form.error', translations[currentLanguage]);
            alert(errorText || 'Произошла ошибка при отправке сообщения');
            
            setTimeout(() => {
                button.style.background = '';
                button.disabled = false;
            }, 3000);
        }
    });
}

// Mouse Cursor Effect (optional enhancement)
let cursor = null;

function createCursor() {
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #6366f1;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
}

// Uncomment to enable custom cursor
// createCursor();
// document.addEventListener('mousemove', (e) => {
//     if (cursor) {
//         cursor.style.left = e.clientX - 10 + 'px';
//         cursor.style.top = e.clientY - 10 + 'px';
//         cursor.style.display = 'block';
//     }
// });

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--text-primary) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Smooth reveal animation for project cards
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    projectObserver.observe(card);
});

