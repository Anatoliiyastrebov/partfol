// Translations
const translations = {
    ru: {
        meta: {
            title: 'AY - Портфолио'
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
            name: 'Анатолий Ястребов',
            role: 'Frontend / Fullstack веб-разработчик',
            subtitle: 'Создаю современные веб-приложения и сайты для бизнеса. Специализируюсь на разработке удобных интерфейсов и функциональных решений.',
            projectsBtn: 'Посмотреть проекты',
            contactBtn: 'Связаться'
        },
        typing: {
            texts: ['Frontend разработчик', 'Fullstack разработчик', 'Веб-разработчик']
        },
        about: {
            title: 'О себе',
            text1: 'Я веб-разработчик с практическим опытом создания сайтов и веб-приложений. Работаю как с фронтендом, так и с бэкендом, что позволяет создавать полноценные решения.',
            text2: 'Специализируюсь на разработке веб-приложений, сайтов и пользовательских интерфейсов. Делаю акцент на качественный код, удобство использования и результат, который решает задачи клиента.',
            text3: 'Работаю с различными технологиями и подхожу к каждому проекту индивидуально, учитывая потребности бизнеса и пользователей.',
            stats: {
                projects: 'Проектов',
                clients: 'Довольных клиентов',
                experience: 'Лет опыта'
            }
        },
        skills: {
            title: 'Навыки',
            category: {
                frontend: 'Frontend',
                backend: 'Backend',
                tools: 'Инструменты'
            },
            frontend: {
                html: 'HTML / CSS',
                htmlDesc: 'Семантическая разметка, адаптивная вёрстка',
                js: 'JavaScript',
                jsDesc: 'ES6+, DOM, асинхронность',
                react: 'React',
                reactDesc: 'Компоненты, хуки, состояние'
            },
            backend: {
                node: 'Node.js',
                nodeDesc: 'Express, серверная разработка',
                db: 'Базы данных',
                dbDesc: 'MongoDB, SQL основы',
                api: 'API',
                apiDesc: 'REST, интеграции'
            },
            tools: {
                git: 'Git / GitHub',
                gitDesc: 'Версионирование, работа в команде',
                design: 'Figma',
                designDesc: 'Работа с макетами, UI/UX',
                deploy: 'Деплой',
                deployDesc: 'Vercel, Render, облачные сервисы'
            }
        },
        projects: {
            title: 'Проекты',
            description: 'Примеры моих работ: веб-приложения, сайты и интерфейсы, которые я разработал',
            view: 'Посмотреть',
            github: 'GitHub',
            live: 'Live версия',
            noProjects: 'Проекты будут добавлены в ближайшее время'
        },
        contact: {
            title: 'Связаться со мной',
            description: 'Есть проект или вопрос? Напишите мне, и я отвечу в ближайшее время. Готов обсудить вашу задачу и предложить решение.',
            email: {
                label: 'Email'
            },
            telegram: {
                label: 'Telegram',
                value: '@username'
            },
            github: {
                label: 'GitHub',
                value: 'github.com/username'
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
            name: 'Anatolii Yastrebov',
            role: 'Frontend / Fullstack Web Developer',
            subtitle: 'I create modern web applications and websites for businesses. I specialize in developing user-friendly interfaces and functional solutions.',
            projectsBtn: 'View Projects',
            contactBtn: 'Get in Touch'
        },
        typing: {
            texts: ['Frontend Developer', 'Fullstack Developer', 'Web Developer']
        },
        about: {
            title: 'About Me',
            text1: 'I am a web developer with practical experience in creating websites and web applications. I work with both frontend and backend, which allows me to create complete solutions.',
            text2: 'I specialize in developing web applications, websites, and user interfaces. I focus on quality code, usability, and results that solve client problems.',
            text3: 'I work with various technologies and approach each project individually, considering business and user needs.',
            stats: {
                projects: 'Projects',
                clients: 'Happy Clients',
                experience: 'Years of Experience'
            }
        },
        skills: {
            title: 'Skills',
            category: {
                frontend: 'Frontend',
                backend: 'Backend',
                tools: 'Tools'
            },
            frontend: {
                html: 'HTML / CSS',
                htmlDesc: 'Semantic markup, responsive layout',
                js: 'JavaScript',
                jsDesc: 'ES6+, DOM, asynchrony',
                react: 'React',
                reactDesc: 'Components, hooks, state'
            },
            backend: {
                node: 'Node.js',
                nodeDesc: 'Express, server development',
                db: 'Databases',
                dbDesc: 'MongoDB, SQL basics',
                api: 'API',
                apiDesc: 'REST, integrations'
            },
            tools: {
                git: 'Git / GitHub',
                gitDesc: 'Version control, teamwork',
                design: 'Figma',
                designDesc: 'Working with layouts, UI/UX',
                deploy: 'Deployment',
                deployDesc: 'Vercel, Render, cloud services'
            }
        },
        projects: {
            title: 'Projects',
            description: 'Examples of my work: web applications, websites, and interfaces I have developed',
            view: 'View',
            github: 'GitHub',
            live: 'Live version',
            noProjects: 'Projects will be added soon'
        },
        contact: {
            title: 'Get in Touch',
            description: 'Have a project or question? Write to me and I will reply as soon as possible. Ready to discuss your task and suggest a solution.',
            email: {
                label: 'Email'
            },
            telegram: {
                label: 'Telegram',
                value: '@username'
            },
            github: {
                label: 'GitHub',
                value: 'github.com/username'
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
            name: 'Anatolii Yastrebov',
            role: 'Frontend / Fullstack Webentwickler',
            subtitle: 'Ich erstelle moderne Webanwendungen und Websites für Unternehmen. Ich spezialisiere mich auf die Entwicklung benutzerfreundlicher Oberflächen und funktionaler Lösungen.',
            projectsBtn: 'Projekte ansehen',
            contactBtn: 'Kontakt aufnehmen'
        },
        typing: {
            texts: ['Frontend Entwickler', 'Fullstack Entwickler', 'Webentwickler']
        },
        about: {
            title: 'Über mich',
            text1: 'Ich bin ein Webentwickler mit praktischer Erfahrung in der Erstellung von Websites und Webanwendungen. Ich arbeite sowohl mit Frontend als auch mit Backend, was mir ermöglicht, vollständige Lösungen zu erstellen.',
            text2: 'Ich spezialisiere mich auf die Entwicklung von Webanwendungen, Websites und Benutzeroberflächen. Ich lege Wert auf qualitativ hochwertigen Code, Benutzerfreundlichkeit und Ergebnisse, die Kundenprobleme lösen.',
            text3: 'Ich arbeite mit verschiedenen Technologien und gehe individuell an jedes Projekt heran, wobei ich die Bedürfnisse des Unternehmens und der Benutzer berücksichtige.',
            stats: {
                projects: 'Projekte',
                clients: 'Zufriedene Kunden',
                experience: 'Jahre Erfahrung'
            }
        },
        skills: {
            title: 'Fähigkeiten',
            category: {
                frontend: 'Frontend',
                backend: 'Backend',
                tools: 'Werkzeuge'
            },
            frontend: {
                html: 'HTML / CSS',
                htmlDesc: 'Semantisches Markup, responsive Layout',
                js: 'JavaScript',
                jsDesc: 'ES6+, DOM, Asynchronität',
                react: 'React',
                reactDesc: 'Komponenten, Hooks, State'
            },
            backend: {
                node: 'Node.js',
                nodeDesc: 'Express, Serverentwicklung',
                db: 'Datenbanken',
                dbDesc: 'MongoDB, SQL Grundlagen',
                api: 'API',
                apiDesc: 'REST, Integrationen'
            },
            tools: {
                git: 'Git / GitHub',
                gitDesc: 'Versionskontrolle, Teamarbeit',
                design: 'Figma',
                designDesc: 'Arbeit mit Layouts, UI/UX',
                deploy: 'Deployment',
                deployDesc: 'Vercel, Render, Cloud-Services'
            }
        },
        projects: {
            title: 'Projekte',
            description: 'Beispiele meiner Arbeit: Webanwendungen, Websites und Benutzeroberflächen, die ich entwickelt habe',
            view: 'Ansehen',
            github: 'GitHub',
            live: 'Live-Version',
            noProjects: 'Projekte werden in Kürze hinzugefügt'
        },
        contact: {
            title: 'Kontakt aufnehmen',
            description: 'Haben Sie ein Projekt oder eine Frage? Schreiben Sie mir und ich antworte so schnell wie möglich. Bereit, Ihre Aufgabe zu besprechen und eine Lösung vorzuschlagen.',
            email: {
                label: 'E-Mail'
            },
            telegram: {
                label: 'Telegram',
                value: '@username'
            },
            github: {
                label: 'GitHub',
                value: 'github.com/username'
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

// Структура проектов (объявлена здесь, чтобы быть доступной везде)
const projectsData = [
    {
        title: "Анкета по здоровью - Net Bolezny",
        description: "Веб-приложение для сбора информации о здоровье пациентов. Многоязычный интерфейс с удобной формой заполнения.",
        techStack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://net-bolezny.vercel.app/",
        githubUrl: null
    },
    {
        title: "Анкета по здоровью - My Health Form",
        description: "Интерактивная анкета для оценки состояния здоровья. Поддержка нескольких языков (RU/EN/DE) и адаптивный дизайн.",
        techStack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://myhealthform.vercel.app/",
        githubUrl: null
    },
    {
        title: "Анкета по здоровью - Wellness Checkup",
        description: "Веб-форма для комплексной оценки здоровья и самочувствия. Современный интерфейс с валидацией данных.",
        techStack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://wellness-checkup.vercel.app/",
        githubUrl: null
    },
    {
        title: "Анкета по здоровью - Ainur Sherbakova",
        description: "Персональная анкета здоровья с многоязычной поддержкой. Разработана для медицинских консультаций и сбора данных.",
        techStack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://ainur-sherbakova.vercel.app/",
        githubUrl: null
    }
];

// Get current language from localStorage or default to 'ru'
let currentLanguage = localStorage.getItem('language') || 'ru';

// Smooth reveal animation for project cards (объявлен здесь, чтобы быть доступным для renderProjects)
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

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
    
    // Re-render projects with new language
    renderProjects();
    
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
    // Для продакшена - используем Render backend URL
    // Замените на ваш реальный URL после деплоя на Render
    return 'https://portfolio-backend-db2d.onrender.com';
})();

console.log('🔗 API Base URL:', API_BASE_URL);

// Функция отправки формы на backend
async function sendContactForm(formData) {
    try {
        const requestBody = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };
        
        // Формируем полный URL для API
        const apiUrl = `${API_BASE_URL}/api/contact`;
        
        console.log('📤 Отправка запроса на:', apiUrl);
        console.log('📝 Тело запроса:', requestBody);
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        console.log('📥 Статус ответа:', response.status);
        
        const data = await response.json().catch(() => {
            console.error('❌ Не удалось распарсить ответ сервера');
            throw new Error('Сервер вернул некорректный ответ');
        });
        
        console.log('📦 Ответ сервера:', data);
        
        if (!response.ok) {
            // Ошибка от сервера
            const errorMessage = data.errors && data.errors.length > 0 
                ? data.errors.join(', ') 
                : (data.message || `Ошибка ${response.status}: ${response.statusText}`);
            console.error('❌ Ошибка ответа:', errorMessage);
            throw new Error(errorMessage);
        }
        
        if (!data.success) {
            const errorMessage = data.message || 'Неизвестная ошибка';
            console.error('❌ Сервер вернул ошибку:', errorMessage);
            throw new Error(errorMessage);
        }
        
        console.log('✅ Сообщение успешно отправлено!');
        return { success: true, data };
    } catch (error) {
        console.error('❌ Ошибка отправки формы:', error);
        console.error('Детали ошибки:', {
            message: error.message,
            name: error.name,
            stack: error.stack
        });
        
        // Более информативные сообщения об ошибках
        let errorMessage = error.message;
        
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessage = 'Не удалось подключиться к серверу. Убедитесь, что backend сервер запущен на порту 3001.';
        } else if (error.message.includes('CORS')) {
            errorMessage = 'Ошибка CORS. Проверьте настройки сервера.';
        }
        
        return { 
            success: false, 
            message: errorMessage || 'Не удалось отправить сообщение. Проверьте, что backend сервер запущен.'
        };
    }
}

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
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
        const btnText = button.querySelector('.btn-text');
        const btnIcon = button.querySelector('.btn-icon');
        
        if (btnText) {
            btnText.textContent = sendingText || 'Отправка...';
        } else {
            button.textContent = sendingText || 'Отправка...';
        }
        
        if (btnIcon) {
            btnIcon.textContent = '⏳';
        }
        
        try {
            // Отправляем данные на backend
            const result = await sendContactForm(formData);
            
            if (result.success) {
                // Успешная отправка
                const submittedText = getTranslation('contact.form.submitted', translations[currentLanguage]);
                const btnText = button.querySelector('.btn-text');
                const btnIcon = button.querySelector('.btn-icon');
                
                if (btnText) {
                    btnText.textContent = submittedText || 'Отправлено! ✓';
                } else {
                    button.textContent = submittedText || 'Отправлено! ✓';
                }
                
                if (btnIcon) {
                    btnIcon.textContent = '✓';
                }
                
                button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Сбрасываем форму
                contactForm.reset();
                
                // Восстанавливаем кнопку через 3 секунды
                setTimeout(() => {
                    button.disabled = false;
                    if (btnText) {
                        btnText.textContent = getTranslation('contact.form.submit', translations[currentLanguage]) || 'Отправить';
                    } else {
                        button.textContent = getTranslation('contact.form.submit', translations[currentLanguage]) || 'Отправить';
                    }
                    if (btnIcon) {
                        btnIcon.textContent = '→';
                    }
                    button.style.background = '';
                }, 3000);
            } else {
                // Ошибка отправки
                console.error('❌ Ошибка отправки формы:', result.message);
                const btnText = button.querySelector('.btn-text');
                const btnIcon = button.querySelector('.btn-icon');
                
                if (btnText) {
                    btnText.textContent = 'Ошибка';
                } else {
                    button.textContent = 'Ошибка';
                }
                
                if (btnIcon) {
                    btnIcon.textContent = '✕';
                }
                
                button.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                
                const errorMsg = result.message || 'Ошибка отправки сообщения. Убедитесь, что backend сервер запущен.';
                alert(errorMsg);
                
                setTimeout(() => {
                    button.disabled = false;
                    if (btnText) {
                        btnText.textContent = getTranslation('contact.form.submit', translations[currentLanguage]) || 'Отправить';
                    } else {
                        button.textContent = getTranslation('contact.form.submit', translations[currentLanguage]) || 'Отправить';
                    }
                    if (btnIcon) {
                        btnIcon.textContent = '→';
                    }
                    button.style.background = '';
                }, 5000);
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

// Рендеринг проектов
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) {
        console.warn('Projects container not found, retrying...');
        // Повторная попытка через небольшую задержку
        setTimeout(renderProjects, 200);
        return;
    }
    
    if (projectsData.length === 0) {
        container.innerHTML = `
            <div class="no-projects">
                <p data-i18n="projects.noProjects">Проекты будут добавлены в ближайшее время</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = projectsData.map((project, index) => {
        const liveButton = project.liveUrl 
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link project-link-live">Live версия</a>`
            : '';
        const githubButton = project.githubUrl
            ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link project-link-github">GitHub</a>`
            : '';
        
        const buttons = liveButton || githubButton 
            ? `<div class="project-buttons">${liveButton}${githubButton}</div>`
            : '';
        
        return `
            <div class="project-card" data-index="${index}">
                <div class="project-image" style="background: linear-gradient(135deg, var(--primary), var(--accent));">
                    ${buttons ? `<div class="project-overlay">${buttons}</div>` : ''}
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Обновить наблюдатели для новых карточек
    document.querySelectorAll('.project-card').forEach(card => {
        projectObserver.observe(card);
    });
}

// Инициализация проектов при загрузке
function initProjects() {
    // Небольшая задержка, чтобы убедиться, что DOM готов
    setTimeout(() => {
        renderProjects();
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjects);
} else {
    // DOM уже загружен
    initProjects();
}

// Также вызываем после полной загрузки страницы
window.addEventListener('load', () => {
    renderProjects();
});

