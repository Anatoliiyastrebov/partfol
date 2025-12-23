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
                experience: {
                    one: 'Год опыта',
                    few: 'Года опыта',
                    many: 'Лет опыта'
                }
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
            noProjects: 'Проекты будут добавлены в ближайшее время',
            techTitle: 'Используемые технологии:',
            readMore: 'Читать далее',
            readLess: 'Свернуть',
            showMore: 'Показать все',
            showLess: 'Скрыть'
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
            rights: 'Все права защищены.',
            private: 'Это частный веб-сайт-портфолио. Для связи используйте форму обратной связи или email.',
            contact: 'Контакт:',
            location: '📍 Германия',
            gdpr: 'Данные обрабатываются в соответствии с GDPR. Используя форму обратной связи, вы соглашаетесь с обработкой ваших данных.'
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
                experience: {
                    one: 'Year of Experience',
                    many: 'Years of Experience'
                }
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
            noProjects: 'Projects will be added soon',
            techTitle: 'Technologies used:',
            readMore: 'Read more',
            readLess: 'Read less',
            showMore: 'Show all',
            showLess: 'Hide'
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
            rights: 'All rights reserved.',
            private: 'This is a private portfolio website. For contact, please use the contact form or email.',
            contact: 'Contact:',
            location: '📍 Germany',
            gdpr: 'Data is processed in accordance with GDPR. By using the contact form, you agree to the processing of your data.'
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
                experience: {
                    one: 'Jahr Erfahrung',
                    many: 'Jahre Erfahrung'
                }
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
            noProjects: 'Projekte werden in Kürze hinzugefügt',
            techTitle: 'Verwendete Technologien:',
            readMore: 'Mehr lesen',
            readLess: 'Weniger anzeigen',
            showMore: 'Alle anzeigen',
            showLess: 'Ausblenden'
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
            rights: 'Alle Rechte vorbehalten.',
            private: 'Dies ist eine private Portfolio-Website. Für Kontakt verwenden Sie bitte das Kontaktformular oder E-Mail.',
            contact: 'Kontakt:',
            location: '📍 Deutschland',
            gdpr: 'Daten werden gemäß DSGVO verarbeitet. Durch die Nutzung des Kontaktformulars stimmen Sie der Verarbeitung Ihrer Daten zu.'
        }
    }
};

// Структура проектов (объявлена здесь, чтобы быть доступной везде)
const projectsData = [
    {
        title: {
            ru: "Net Bolezny",
            en: "Net Bolezny",
            de: "Net Bolezny"
        },
        description: {
            ru: "Веб-приложение с удобным и интуитивно понятным интерфейсом для сбора медицинских данных. Реализовал комфортный пользовательский путь, валидацию форм и адаптивный дизайн для всех устройств.",
            en: "Web application with a convenient and intuitive interface for collecting medical data. Implemented a comfortable user journey, form validation, and responsive design for all devices.",
            de: "Webanwendung mit einer benutzerfreundlichen und intuitiven Benutzeroberfläche zur Erfassung medizinischer Daten. Implementierte einen komfortablen Benutzerweg, Formularvalidierung und responsives Design für alle Geräte."
        },
        techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Form Validation"],
        liveUrl: "https://net-bolezny.vercel.app/",
        githubUrl: null,
        image: null
    },
    {
        title: {
            ru: "My Health Form",
            en: "My Health Form",
            de: "My Health Form"
        },
        description: {
            ru: "Интерактивная веб-анкета с многоязычной поддержкой (RU/EN/DE). Разработал систему переключения языков, адаптивную верстку и оптимизированную структуру данных для эффективного сбора информации.",
            en: "Interactive web questionnaire with multilingual support (RU/EN/DE). Developed a language switching system, adaptive layout, and optimized data structure for efficient information collection.",
            de: "Interaktiver Web-Fragebogen mit mehrsprachiger Unterstützung (RU/EN/DE). Entwickelte ein Sprachumschaltsystem, adaptive Layouts und optimierte Datenstruktur für effiziente Informationserfassung."
        },
        techStack: ["HTML5", "CSS3", "JavaScript", "i18n (Internationalization)", "Local Storage", "Responsive Design"],
        liveUrl: "https://myhealthform.vercel.app/",
        githubUrl: null,
        image: null
    },
    {
        title: {
            ru: "Wellness Checkup",
            en: "Wellness Checkup",
            de: "Wellness Checkup"
        },
        description: {
            ru: "Комплексная система оценки здоровья с многоуровневой валидацией данных. Создал структурированную форму с логической последовательностью вопросов и визуальной обратной связью для пользователя.",
            en: "Comprehensive health assessment system with multi-level data validation. Created a structured form with logical question sequence and visual feedback for users.",
            de: "Umfassendes Gesundheitsbewertungssystem mit mehrstufiger Datenvalidierung. Erstellte ein strukturiertes Formular mit logischer Fragensequenz und visuellem Feedback für Benutzer."
        },
        techStack: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Data Processing", "UX/UI Design"],
        liveUrl: "https://wellness-checkup.vercel.app/",
        githubUrl: null,
        image: null
    },
    {
        title: {
            ru: "Ainur Sherbakova",
            en: "Ainur Sherbakova",
            de: "Ainur Sherbakova"
        },
        description: {
            ru: "Персональная медицинская анкета с кастомным дизайном. Реализовал персонализированный интерфейс, систему сохранения данных и оптимизированную структуру для медицинских консультаций.",
            en: "Personal medical questionnaire with custom design. Implemented a personalized interface, data saving system, and optimized structure for medical consultations.",
            de: "Persönlicher medizinischer Fragebogen mit individuellem Design. Implementierte eine personalisierte Benutzeroberfläche, Datenspeichersystem und optimierte Struktur für medizinische Beratungen."
        },
        techStack: ["HTML5", "CSS3", "JavaScript", "Custom Styling", "Data Persistence", "Medical Forms"],
        liveUrl: "https://ainur-sherbakova.vercel.app/",
        githubUrl: null,
        image: null
    },
    {
        title: {
            ru: "My Wellness Tracking",
            en: "My Wellness Tracking",
            de: "My Wellness Tracking"
        },
        description: {
            ru: "Веб-приложение для отслеживания показателей здоровья с возможностью ведения истории записей. Разработал систему хранения данных, визуализацию информации и удобный интерфейс для регулярного мониторинга.",
            en: "Web application for tracking health indicators with the ability to maintain a history of records. Developed a data storage system, information visualization, and convenient interface for regular monitoring.",
            de: "Webanwendung zur Verfolgung von Gesundheitsindikatoren mit der Möglichkeit, einen Verlauf von Aufzeichnungen zu führen. Entwickelte ein Datenspeichersystem, Informationsvisualisierung und benutzerfreundliche Oberfläche für regelmäßige Überwachung."
        },
        techStack: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Data Visualization", "Tracking Systems"],
        liveUrl: "https://my-wellness-tracking.vercel.app/",
        githubUrl: null,
        image: null
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
        setTimeout(typeText, 4000); // Увеличено до 4000 - пауза перед удалением для лучшей читаемости
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Пауза перед началом нового текста
        return;
    }
    
    // Замедлена скорость: удаление быстрее, печать медленнее для читаемости
    const speed = isDeleting ? 50 : 200; // Увеличено до 200 для печати (было 150), удаление тоже замедлено до 50
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
        const statLabel = element.getAttribute('data-stat-label');
        
        // Специальная обработка для метки опыта
        if (statLabel === 'experience') {
            const statNumber = document.querySelector('.stat-number[data-stat-type="experience"]');
            if (statNumber) {
                const number = parseInt(statNumber.getAttribute('data-target')) || parseInt(statNumber.textContent) || 0;
                element.textContent = getExperienceText(number, lang);
            }
        } else {
            const translation = getTranslation(key, translations[lang]);
            if (translation) {
                element.textContent = translation;
            }
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
    
    // Update footer translations
    const footerElements = document.querySelectorAll('[data-i18n^="footer."]');
    footerElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, translations[lang]);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update current year
    updateCurrentYear();
    
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
        const href = this.getAttribute('href');
        
        // Если это ссылка на главную (#home), прокручиваем на самый верх
        if (href === '#home' || href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Для остальных секций используем обычную прокрутку
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Закрываем мобильное меню после клика
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
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

// Close menu when clicking on a link (удалено, так как уже обрабатывается в Smooth Scroll)

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

// Функция для склонения слова "год" в русском языке
function getRussianPluralForm(number) {
    const mod10 = number % 10;
    const mod100 = number % 100;
    
    if (mod100 >= 11 && mod100 <= 19) {
        return 'many'; // 11-19 лет
    }
    if (mod10 === 1) {
        return 'one'; // 1 год
    }
    if (mod10 >= 2 && mod10 <= 4) {
        return 'few'; // 2, 3, 4 года
    }
    return 'many'; // 5, 6, 7, 8, 9, 0 лет
}

// Функция для получения правильной формы слова в зависимости от языка
function getExperienceText(number, lang) {
    const translations = {
        ru: {
            one: 'Год опыта',
            few: 'Года опыта',
            many: 'Лет опыта'
        },
        en: {
            one: 'Year of Experience',
            many: 'Years of Experience'
        },
        de: {
            one: 'Jahr Erfahrung',
            many: 'Jahre Erfahrung'
        }
    };
    
    const langTranslations = translations[lang] || translations.ru;
    
    if (lang === 'ru') {
        const form = getRussianPluralForm(number);
        return langTranslations[form];
    } else if (lang === 'en' || lang === 'de') {
        return number === 1 ? langTranslations.one : langTranslations.many;
    }
    
    return langTranslations.many;
}

// Animated Counter for Stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const statType = element.getAttribute('data-stat-type');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        const currentValue = Math.floor(current);
        
        if (current < target) {
            element.textContent = currentValue;
            requestAnimationFrame(updateCounter);
            
            // Обновляем текст метки для опыта
            if (statType === 'experience') {
                updateExperienceLabel(currentValue);
            }
        } else {
            element.textContent = target;
            
            // Финальное обновление текста метки
            if (statType === 'experience') {
                updateExperienceLabel(target);
            }
        }
    };
    
    updateCounter();
};

// Функция для обновления текста метки опыта
function updateExperienceLabel(number) {
    const labelElement = document.querySelector('.stat-label[data-stat-label="experience"]');
    if (labelElement) {
        const lang = currentLanguage || 'ru';
        labelElement.textContent = getExperienceText(number, lang);
    }
}

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

// Функция отправки формы на backend (оптимизированная)
async function sendContactForm(formData) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 секунд timeout
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            throw new Error(data.message || `Ошибка ${response.status}`);
        }
        
        const data = await response.json();
        return data.success ? { success: true, data } : { success: false, message: data.message || 'Ошибка отправки' };
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            return { success: false, message: 'Превышено время ожидания. Попробуйте позже.' };
        }
        
        return { 
            success: false, 
            message: error.message.includes('Failed to fetch') 
                ? 'Не удалось подключиться к серверу. Проверьте подключение к интернету.' 
                : error.message 
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
            // Ошибка формы
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
// Update current year in footer
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

window.addEventListener('load', () => {
    updateCurrentYear();
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
        // Projects container not found, retrying...
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
    
    // Получаем переводы для кнопок
    const liveText = getTranslation('projects.live', translations[currentLanguage]) || 'Live версия';
    const githubText = getTranslation('projects.github', translations[currentLanguage]) || 'GitHub';
    
    container.innerHTML = projectsData.map((project, index) => {
        const projectTitle = typeof project.title === 'object' ? project.title[currentLanguage] || project.title.ru : project.title;
        const projectDescription = typeof project.description === 'object' ? project.description[currentLanguage] || project.description.ru : project.description;
        
        const liveButton = project.liveUrl 
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link project-link-live">${liveText}</a>`
            : '';
        const githubButton = project.githubUrl
            ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link project-link-github">${githubText}</a>`
            : '';
        
        const buttons = liveButton || githubButton 
            ? `<div class="project-buttons">${liveButton}${githubButton}</div>`
            : '';
        
        const techTitle = getTranslation('projects.techTitle', translations[currentLanguage]) || 'Используемые технологии:';
        const readMoreText = getTranslation('projects.readMore', translations[currentLanguage]) || 'Читать далее';
        const readLessText = getTranslation('projects.readLess', translations[currentLanguage]) || 'Свернуть';
        const showMoreText = getTranslation('projects.showMore', translations[currentLanguage]) || 'Показать все';
        const showLessText = getTranslation('projects.showLess', translations[currentLanguage]) || 'Скрыть';
        
        // Используем изображение проекта или градиент по умолчанию
        const hasImage = project.image && project.image.trim() !== '';
        let imageStyle = `background: linear-gradient(135deg, var(--primary), var(--accent));`;
        
        if (hasImage) {
            // Проверяем, является ли это data URI, URL или локальный путь
            if (project.image.startsWith('data:') || project.image.startsWith('http')) {
                // Для внешних URL добавляем кэширование и обработку ошибок
                imageStyle = `background-image: url('${project.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;`;
            } else {
                // Локальный путь
                const imagePath = project.image.startsWith('/') ? project.image : '/' + project.image;
                imageStyle = `background-image: url('${imagePath}'); background-size: cover; background-position: center; background-repeat: no-repeat;`;
            }
        }
        
        // Разделяем технологии на видимые и скрытые
        const visibleTechs = project.techStack.slice(0, 3);
        const hiddenTechs = project.techStack.slice(3);
        const hasMoreTechs = hiddenTechs.length > 0;
        
        return `
            <div class="project-card" data-index="${index}">
                <div class="project-image ${hasImage ? 'has-image' : ''}" style="${imageStyle}">
                    ${hasImage ? '<div class="project-image-overlay"></div>' : ''}
                    ${buttons ? `<div class="project-overlay">${buttons}</div>` : ''}
                </div>
                <div class="project-info">
                    <h3>${projectTitle}</h3>
                    <div class="project-description-wrapper">
                        <p class="project-description">${projectDescription}</p>
                        <button class="project-read-more-btn" data-project="${index}">${readMoreText}</button>
                    </div>
                    <div class="project-tech-section">
                        <h4 class="project-tech-title">${techTitle}</h4>
                        <div class="project-tags">
                            ${visibleTechs.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            ${hasMoreTechs ? hiddenTechs.map(tech => `<span class="tech-tag tech-tag-hidden">${tech}</span>`).join('') : ''}
                        </div>
                        ${hasMoreTechs ? `<button class="project-show-tech-btn" data-project="${index}">${showMoreText}</button>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Обновить наблюдатели для новых карточек
    document.querySelectorAll('.project-card').forEach(card => {
        projectObserver.observe(card);
    });
    
    // Добавить обработчики для кнопок "Читать далее" и "Показать все"
    setupProjectInteractions();
}

// Настройка интерактивности проектов
function setupProjectInteractions() {
    // Обработчик для "Читать далее" / "Свернуть"
    document.querySelectorAll('.project-read-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectIndex = this.getAttribute('data-project');
            const description = this.previousElementSibling;
            const isExpanded = description.classList.contains('expanded');
            
            if (isExpanded) {
                description.classList.remove('expanded');
                this.textContent = getTranslation('projects.readMore', translations[currentLanguage]) || 'Читать далее';
            } else {
                description.classList.add('expanded');
                this.textContent = getTranslation('projects.readLess', translations[currentLanguage]) || 'Свернуть';
            }
        });
    });
    
    // Обработчик для "Показать все" / "Скрыть" технологий
    document.querySelectorAll('.project-show-tech-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectIndex = this.getAttribute('data-project');
            const projectCard = this.closest('.project-card');
            const hiddenTechs = projectCard.querySelectorAll('.tech-tag-hidden');
            const isExpanded = hiddenTechs[0] && hiddenTechs[0].classList.contains('show');
            
            hiddenTechs.forEach(tech => {
                if (isExpanded) {
                    tech.classList.remove('show');
                } else {
                    tech.classList.add('show');
                }
            });
            
            if (isExpanded) {
                this.textContent = getTranslation('projects.showMore', translations[currentLanguage]) || 'Показать все';
            } else {
                this.textContent = getTranslation('projects.showLess', translations[currentLanguage]) || 'Скрыть';
            }
        });
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
// Update current year in footer
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

window.addEventListener('load', () => {
    updateCurrentYear();
    renderProjects();
});

