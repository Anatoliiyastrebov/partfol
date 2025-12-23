// Translations - make available globally for project.js
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
                reactDesc: 'Компоненты, хуки, состояние',
                responsive: 'Responsive Design',
                responsiveDesc: 'Адаптивная вёрстка для всех устройств',
                validation: 'Form Validation',
                validationDesc: 'Валидация форм и данных',
                uxui: 'UX/UI Design',
                uxuiDesc: 'Проектирование интерфейсов и UX'
            },
            backend: {
                node: 'Node.js',
                nodeDesc: 'Express, серверная разработка',
                db: 'Базы данных',
                dbDesc: 'MongoDB, SQL основы',
                api: 'API',
                apiDesc: 'REST, интеграции',
                dataProcessing: 'Data Processing',
                dataProcessingDesc: 'Обработка и валидация данных'
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
            gdpr: 'Ваши данные используются исключительно для ответа на ваш запрос. Дополнительную информацию вы найдете в нашей <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Политике конфиденциальности</a>.',
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
                notConfigured: 'Форма не настроена. Пожалуйста, настройте config.js',
                consent: 'Я согласен на обработку моих персональных данных в соответствии с <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Политикой конфиденциальности</a>.',
                consentError: 'Пожалуйста, согласитесь на обработку ваших данных.'
            }
        },
        footer: {
            name: 'Анатолий Ястребов',
            rights: 'Все права защищены.',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
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
                apiDesc: 'REST, integrations',
                dataProcessing: 'Data Processing',
                dataProcessingDesc: 'Data processing and validation'
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
            gdpr: 'Your data is used exclusively to respond to your inquiry. For more information, please see our <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.',
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
                notConfigured: 'Form is not configured. Please configure config.js',
                consent: 'I agree to the processing of my personal data in accordance with the <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.',
                consentError: 'Please agree to the processing of your data.'
            }
        },
        footer: {
            name: 'Anatolii Yastrebov',
            rights: 'All rights reserved.',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
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
                apiDesc: 'REST, Integrationen',
                dataProcessing: 'Data Processing',
                dataProcessingDesc: 'Datenverarbeitung und Validierung'
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
            gdpr: 'Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in unserer <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
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
                notConfigured: 'Formular ist nicht konfiguriert. Bitte konfigurieren Sie config.js',
                consent: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zu.',
                consentError: 'Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.'
            }
        },
        footer: {
            name: 'Anatolii Yastrebov',
            rights: 'Alle Rechte vorbehalten.',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
        }
    }
};

// Структура проектов (объявлена здесь, чтобы быть доступной везде)
const projectsData = [
    {
        id: "net-bolezny",
        title: {
            ru: "Net Bolezny",
            en: "Net Bolezny",
            de: "Net Bolezny"
        },
        shortDescription: {
            ru: "Веб-форма для опроса состояния здоровья с интуитивным интерфейсом и адаптивным дизайном. Ориентирована на простоту использования и удобство заполнения.",
            en: "Web form for health status survey with intuitive interface and adaptive design. Focused on ease of use and convenient filling.",
            de: "Webformular für Gesundheitsumfrage mit intuitiver Benutzeroberfläche und adaptivem Design. Fokus auf Benutzerfreundlichkeit und bequemes Ausfüllen."
        },
        description: {
            ru: `🧠 <strong>О проекте</strong><br><br>Net-Bolezny — это веб-форма для опроса состояния здоровья, разработанная для удобного сбора информации о самочувствии пользователя. Приложение ориентировано на интуитивный пользовательский опыт и современный интерфейс с акцентом на простоту и адаптивность.<br><br>⸻<br><br>🎯 <strong>Цель проекта</strong><br><br>Создать лёгкое и удобное веб-приложение с формой опроса, которое:<br>• позволяет пользователю быстро и понятно заполнить анкету о здоровье;<br>• работает на любых устройствах (адаптивно);<br>• служит основой для возможной интеграции с backend-логикой.<br><br>⸻<br><br>🛠 <strong>Моя роль и вклад</strong><br><br>В этом проекте я отвечал за:<br><br><strong>🧩 Проектирование интерфейса</strong><br>• Продумал структуру вопросов и порядок заполнения, чтобы пользователь не запутался и мог с лёгкостью пройти весь опрос.<br><br><strong>💡 Реализация frontend-части</strong><br>• Создал отзывчивый, лёгкий и понятный интерфейс формы;<br>• Обеспечил валидацию вводимых данных (проверка заполнения обязательных полей);<br>• Организовал логическую навигацию между шагами анкеты (если есть пошаговый ввод);<br>• Закладывал архитектуру так, чтобы форму можно было легко подключить к backend-обработке.<br><br><strong>🧰 Использованные технологии</strong><br>• HTML/CSS — адаптивная верстка и стили, подходящие для разных экранов;<br>• JavaScript / (React/Next.js) — логика управления состоянием формы, валидация и интерактивность;<br>• Responsive Design — интерфейс одинаково удобен на телефонах, планшетах и ПК.`,
            en: `🧠 <strong>About the project</strong><br><br>Net-Bolezny is a web form for health status survey, designed for convenient collection of information about user's well-being. The application is focused on intuitive user experience and modern interface with emphasis on simplicity and adaptability.<br><br>⸻<br><br>🎯 <strong>Project goal</strong><br><br>Create a lightweight and convenient web application with a survey form that:<br>• allows users to quickly and clearly fill out a health questionnaire;<br>• works on any devices (responsive);<br>• serves as a foundation for possible integration with backend logic.<br><br>⸻<br><br>🛠 <strong>My role and contribution</strong><br><br>In this project I was responsible for:<br><br><strong>🧩 Interface design</strong><br>• Designed the structure of questions and filling order so that users don't get confused and can easily complete the entire survey.<br><br><strong>💡 Frontend implementation</strong><br>• Created a responsive, lightweight and clear form interface;<br>• Ensured input data validation (checking required fields);<br>• Organized logical navigation between survey steps (if there is step-by-step input);<br>• Built architecture so that the form can be easily connected to backend processing.<br><br><strong>🧰 Technologies used</strong><br>• HTML/CSS — adaptive layout and styles suitable for different screens;<br>• JavaScript / (React/Next.js) — form state management logic, validation and interactivity;<br>• Responsive Design — the interface is equally convenient on phones, tablets and PCs.`,
            de: `🧠 <strong>Über das Projekt</strong><br><br>Net-Bolezny ist ein Webformular für eine Gesundheitsumfrage, entwickelt für die bequeme Erfassung von Informationen über das Wohlbefinden des Benutzers. Die Anwendung konzentriert sich auf intuitive Benutzererfahrung und moderne Benutzeroberfläche mit Schwerpunkt auf Einfachheit und Anpassungsfähigkeit.<br><br>⸻<br><br>🎯 <strong>Projektziel</strong><br><br>Erstellen Sie eine leichte und bequeme Webanwendung mit einem Umfrageformular, die:<br>• es Benutzern ermöglicht, schnell und klar einen Gesundheitsfragebogen auszufüllen;<br>• auf allen Geräten funktioniert (responsiv);<br>• als Grundlage für eine mögliche Integration mit Backend-Logik dient.<br><br>⸻<br><br>🛠 <strong>Meine Rolle und Beitrag</strong><br><br>In diesem Projekt war ich verantwortlich für:<br><br><strong>🧩 Interface-Design</strong><br>• Entwickelte die Struktur der Fragen und die Reihenfolge der Ausfüllung, damit Benutzer nicht verwirrt werden und die gesamte Umfrage leicht abschließen können.<br><br><strong>💡 Frontend-Implementierung</strong><br>• Erstellte eine responsive, leichte und klare Formularoberfläche;<br>• Gewährleistete Validierung der Eingabedaten (Überprüfung der Pflichtfelder);<br>• Organisierte logische Navigation zwischen Umfrageschritten (falls es schrittweise Eingabe gibt);<br>• Baute Architektur auf, damit das Formular leicht mit Backend-Verarbeitung verbunden werden kann.<br><br><strong>🧰 Verwendete Technologien</strong><br>• HTML/CSS — adaptive Layouts und Styles für verschiedene Bildschirme;<br>• JavaScript / (React/Next.js) — Formularzustandsverwaltungslogik, Validierung und Interaktivität;<br>• Responsive Design — die Benutzeroberfläche ist gleichermaßen bequem auf Telefonen, Tablets und PCs.`
        },
        techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Form Validation", "UX/UI Design"],
        liveUrl: "https://net-bolezny.vercel.app/",
        githubUrl: null,
        image: null
    },
    {
        id: "my-health-form",
        title: {
            ru: "My Health Form",
            en: "My Health Form",
            de: "My Health Form"
        },
        shortDescription: {
            ru: "Веб-приложение с адаптивной формой для сбора информации о состоянии здоровья пользователя. Проект ориентирован на удобство ввода данных и приятный пользовательский опыт.",
            en: "Web application with an adaptive form for collecting user health information. The project focuses on data entry convenience and a pleasant user experience.",
            de: "Webanwendung mit einem adaptiven Formular zur Erfassung von Gesundheitsinformationen des Benutzers. Das Projekt konzentriert sich auf die Bequemlichkeit der Dateneingabe und eine angenehme Benutzererfahrung."
        },
        description: {
            ru: `🧠 <strong>Кратко о проекте</strong><br><br>MyHealthForm — это веб-приложение с адаптивной формой для сбора информации о состоянии здоровья пользователя. Проект ориентирован на удобство ввода данных и приятный пользовательский опыт при заполнении анкеты.<br><br>⸻<br><br>🎯 <strong>Цель проекта</strong><br><br>Создать простой, понятный и отзывчивый интерфейс формы, который позволяет пользователю:<br>• быстро и интуитивно вводить данные о собственном здоровье;<br>• получить удобный опыт взаимодействия на любых устройствах;<br>• заложить основу для последующей интеграции с серверной логикой или базой данных.<br><br>⸻<br><br>🛠 <strong>Моя роль и вклад</strong><br><br>Я отвечал за:<br>• <strong>Прототипирование интерфейса</strong> — продумал структуру и последовательность вопросов, чтобы минимизировать когнитивную нагрузку пользователя;<br>• <strong>Frontend-разработку</strong> — реализовал интерактивную форму с проверкой вводимых данных и подтверждением заполнения;<br>• <strong>Адаптивную вёрстку</strong> — интерфейс одинаково удобно работает на мобильных, планшетах и на десктопах;<br>• <strong>Техническую реализацию логики формы</strong> — валидация, управление состоянием и последующая отправка (готовность к backend-интеграции).<br><br><strong>Инструменты и технологии:</strong><br>• HTML/CSS (Layout, Flex/Grid, адаптивные стили),<br>• JavaScript,<br>• UX-ориентированные решения для комфортного заполнения.`,
            en: `🧠 <strong>Briefly about the project</strong><br><br>MyHealthForm is a web application with an adaptive form for collecting user health information. The project focuses on data entry convenience and a pleasant user experience when filling out the questionnaire.<br><br>⸻<br><br>🎯 <strong>Project goal</strong><br><br>Create a simple, clear and responsive form interface that allows users to:<br>• quickly and intuitively enter their health data;<br>• get a convenient interaction experience on any device;<br>• lay the foundation for subsequent integration with server logic or database.<br><br>⸻<br><br>🛠 <strong>My role and contribution</strong><br><br>I was responsible for:<br>• <strong>Interface prototyping</strong> — designed the structure and sequence of questions to minimize user cognitive load;<br>• <strong>Frontend development</strong> — implemented an interactive form with input validation and completion confirmation;<br>• <strong>Adaptive layout</strong> — the interface works equally well on mobile, tablets and desktops;<br>• <strong>Technical implementation of form logic</strong> — validation, state management and subsequent submission (readiness for backend integration).<br><br><strong>Tools and technologies:</strong><br>• HTML/CSS (Layout, Flex/Grid, adaptive styles),<br>• JavaScript,<br>• UX-oriented solutions for comfortable filling.`,
            de: `🧠 <strong>Kurz zum Projekt</strong><br><br>MyHealthForm ist eine Webanwendung mit einem adaptiven Formular zur Erfassung von Gesundheitsinformationen des Benutzers. Das Projekt konzentriert sich auf die Bequemlichkeit der Dateneingabe und eine angenehme Benutzererfahrung beim Ausfüllen des Fragebogens.<br><br>⸻<br><br>🎯 <strong>Projektziel</strong><br><br>Erstellen Sie eine einfache, klare und reaktionsschnelle Formularoberfläche, die es Benutzern ermöglicht:<br>• schnell und intuitiv ihre Gesundheitsdaten einzugeben;<br>• eine bequeme Interaktionserfahrung auf jedem Gerät zu erhalten;<br>• die Grundlage für die anschließende Integration mit Serverlogik oder Datenbank zu legen.<br><br>⸻<br><br>🛠 <strong>Meine Rolle und Beitrag</strong><br><br>Ich war verantwortlich für:<br>• <strong>Interface-Prototyping</strong> — entwickelte die Struktur und Sequenz der Fragen, um die kognitive Belastung des Benutzers zu minimieren;<br>• <strong>Frontend-Entwicklung</strong> — implementierte ein interaktives Formular mit Eingabevalidierung und Bestätigung der Ausfüllung;<br>• <strong>Adaptives Layout</strong> — die Benutzeroberfläche funktioniert gleichermaßen gut auf Mobilgeräten, Tablets und Desktops;<br>• <strong>Technische Implementierung der Formularlogik</strong> — Validierung, Zustandsverwaltung und anschließende Übermittlung (Bereitschaft für Backend-Integration).<br><br><strong>Tools und Technologien:</strong><br>• HTML/CSS (Layout, Flex/Grid, adaptive Styles),<br>• JavaScript,<br>• UX-orientierte Lösungen für komfortables Ausfüllen.`
        },
        techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Form Validation", "UX/UI Design"],
        liveUrl: "https://myhealthform.vercel.app/",
        githubUrl: null,
        image: null
    },
    {
        id: "wellness-checkup",
        title: {
            ru: "Wellness Checkup",
            en: "Wellness Checkup",
            de: "Wellness Checkup"
        },
        shortDescription: {
            ru: "Комплексная система оценки здоровья с многоуровневой валидацией данных. Структурированная форма с логической последовательностью вопросов.",
            en: "Comprehensive health assessment system with multi-level data validation. Structured form with logical question sequence.",
            de: "Umfassendes Gesundheitsbewertungssystem mit mehrstufiger Datenvalidierung. Strukturiertes Formular mit logischer Fragensequenz."
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
        id: "ainur-sherbakova",
        title: {
            ru: "Ainur Sherbakova",
            en: "Ainur Sherbakova",
            de: "Ainur Sherbakova"
        },
        shortDescription: {
            ru: "Веб-интерфейс интерактивной формы для сбора данных о состоянии здоровья. Быстрая и удобная анкета, адаптированная под различные устройства.",
            en: "Web interface for an interactive form to collect health data. Fast and convenient questionnaire adapted for various devices.",
            de: "Web-Interface für ein interaktives Formular zur Erfassung von Gesundheitsdaten. Schneller und bequemer Fragebogen, angepasst für verschiedene Geräte."
        },
        description: {
            ru: `🧠 <strong>О проекте</strong><br><br>Ainur Sherbakova — это веб-интерфейс интерактивной формы для сбора данных о состоянии здоровья пользователя. Проект служит примером быстрой и удобной анкеты, адаптированной под различные устройства.<br><br>⸻<br><br>🎯 <strong>Цель проекта</strong><br><br>Создать:<br>• простой и понятный интерфейс для ввода информации о самочувствии;<br>• отзывчивую форму, которая одинаково удобно работает на мобильных и десктопных устройствах;<br>• основу для последующей обработки данных (например, через API или сервер-логики).<br><br>⸻<br><br>🛠 <strong>Моя роль и вклад</strong><br><br>В этом проекте я отвечал за весь фронтенд-цикл — от интерфейса до логики заполнения:<br><br><strong>📌 Интерфейс и UX</strong><br>• Спроектировал удобный пользовательский интерфейс формы;<br>• Оптимизировал последовательность полей, чтобы процесс заполнения был плавным;<br><br><strong>🧠 Frontend-разработка</strong><br>• Реализовал адаптивную верстку, которая учитывает разные экраны;<br>• Настроил валидацию вводимых данных, чтобы минимизировать ошибки при отправке;<br><br><strong>💻 Технологии</strong><br>• HTML & CSS — для структуры и визуального оформления;<br>• JavaScript / (React/Next.js) — для управления состоянием формы, обработки событий и логики;<br>• Responsive Design — секции подстраиваются под устройства без потери пользовательского опыта.`,
            en: `🧠 <strong>About the project</strong><br><br>Ainur Sherbakova is a web interface for an interactive form to collect user health data. The project serves as an example of a fast and convenient questionnaire adapted for various devices.<br><br>⸻<br><br>🎯 <strong>Project goal</strong><br><br>Create:<br>• a simple and clear interface for entering health information;<br>• a responsive form that works equally well on mobile and desktop devices;<br>• a foundation for subsequent data processing (e.g., through API or server logic).<br><br>⸻<br><br>🛠 <strong>My role and contribution</strong><br><br>In this project I was responsible for the entire frontend cycle — from interface to filling logic:<br><br><strong>📌 Interface and UX</strong><br>• Designed a convenient user interface for the form;<br>• Optimized the sequence of fields so that the filling process is smooth;<br><br><strong>🧠 Frontend development</strong><br>• Implemented adaptive layout that takes into account different screens;<br>• Set up input data validation to minimize errors when submitting;<br><br><strong>💻 Technologies</strong><br>• HTML & CSS — for structure and visual design;<br>• JavaScript / (React/Next.js) — for form state management, event handling and logic;<br>• Responsive Design — sections adapt to devices without losing user experience.`,
            de: `🧠 <strong>Über das Projekt</strong><br><br>Ainur Sherbakova ist ein Web-Interface für ein interaktives Formular zur Erfassung von Gesundheitsdaten des Benutzers. Das Projekt dient als Beispiel für einen schnellen und bequemen Fragebogen, angepasst für verschiedene Geräte.<br><br>⸻<br><br>🎯 <strong>Projektziel</strong><br><br>Erstellen:<br>• eine einfache und klare Benutzeroberfläche zur Eingabe von Gesundheitsinformationen;<br>• ein responsives Formular, das gleichermaßen gut auf Mobilgeräten und Desktop-Geräten funktioniert;<br>• eine Grundlage für die anschließende Datenverarbeitung (z. B. über API oder Server-Logik).<br><br>⸻<br><br>🛠 <strong>Meine Rolle und Beitrag</strong><br><br>In diesem Projekt war ich verantwortlich für den gesamten Frontend-Zyklus — von der Benutzeroberfläche bis zur Ausfülllogik:<br><br><strong>📌 Interface und UX</strong><br>• Entwarf eine bequeme Benutzeroberfläche für das Formular;<br>• Optimierte die Reihenfolge der Felder, damit der Ausfüllprozess reibungslos verläuft;<br><br><strong>🧠 Frontend-Entwicklung</strong><br>• Implementierte ein adaptives Layout, das verschiedene Bildschirme berücksichtigt;<br>• Richtete die Validierung der Eingabedaten ein, um Fehler beim Senden zu minimieren;<br><br><strong>💻 Technologien</strong><br>• HTML & CSS — für Struktur und visuelles Design;<br>• JavaScript / (React/Next.js) — für Formularzustandsverwaltung, Ereignisbehandlung und Logik;<br>• Responsive Design — Abschnitte passen sich an Geräte an, ohne die Benutzererfahrung zu verlieren.`
        },
        techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Form Validation", "UX/UI Design"],
        liveUrl: "https://ainur-sherbakova.vercel.app/",
        githubUrl: null,
        image: null
    },
    {
        id: "my-wellness-tracking",
        title: {
            ru: "My Wellness Tracking",
            en: "My Wellness Tracking",
            de: "My Wellness Tracking"
        },
        shortDescription: {
            ru: "Веб-приложение с интерактивной формой для ввода данных о состоянии здоровья. Ориентировано на удобство заполнения, отзывчивый интерфейс и потенциал для развития.",
            en: "Web application with an interactive form for entering health data. Focused on ease of filling, responsive interface and potential for development.",
            de: "Webanwendung mit einem interaktiven Formular zur Eingabe von Gesundheitsdaten. Fokus auf Benutzerfreundlichkeit, responsive Benutzeroberfläche und Entwicklungspotenzial."
        },
        description: {
            ru: `🧠 <strong>О проекте</strong><br><br>My Wellness Tracking — это веб-приложение с интерактивной формой для ввода данных о состоянии здоровья и благополучии пользователя. Приложение ориентировано на удобство заполнения анкеты, отзывчивый интерфейс и потенциал для развития в полноценный инструмент отслеживания.<br><br>⸻<br><br>🎯 <strong>Цель проекта</strong><br><br>Создать функциональную и легкую в использовании веб-форму, которая:<br>• позволяет пользователю быстро и понятно вводить данные о самочувствии;<br>• корректно отображается на любых устройствах (адаптивный интерфейс);<br>• служит технической базой для возможной серверной логики и хранения данных.<br><br>⸻<br><br>🛠 <strong>Моя роль и вклад</strong><br><br>В этом проекте я отвечал за полный цикл frontend-разработки:<br><br><strong>🧩 Проектирование интерфейса и UX</strong><br>• Продумал последовательность элементов формы для удобного взаимодействия;<br>• Обеспечил интуитивную навигацию и простоту ввода информации.<br><br><strong>💻 Реализация frontend-части</strong><br>• Создал отзывчивую веб-форму с адаптацией под разные экраны;<br>• Настроил клиентскую валидацию данных для корректного ввода;<br>• Подготовил архитектуру, удобную для дальнейшей интеграции с backend-частью.<br><br><strong>🧠 Технологии</strong><br>• HTML & CSS — для структурной разметки и стилизации;<br>• JavaScript / (React/Next.js) — логика управления состоянием формы и обработка событий;<br>• Responsive Design — адаптация интерфейса под мобильные и десктоп-устройства.`,
            en: `🧠 <strong>About the project</strong><br><br>My Wellness Tracking is a web application with an interactive form for entering user health and wellness data. The application is focused on ease of filling out the questionnaire, responsive interface and potential for development into a full-fledged tracking tool.<br><br>⸻<br><br>🎯 <strong>Project goal</strong><br><br>Create a functional and easy-to-use web form that:<br>• allows users to quickly and clearly enter health data;<br>• displays correctly on any device (adaptive interface);<br>• serves as a technical foundation for possible server logic and data storage.<br><br>⸻<br><br>🛠 <strong>My role and contribution</strong><br><br>In this project I was responsible for the full frontend development cycle:<br><br><strong>🧩 Interface and UX design</strong><br>• Designed the sequence of form elements for convenient interaction;<br>• Ensured intuitive navigation and ease of information input.<br><br><strong>💻 Frontend implementation</strong><br>• Created a responsive web form with adaptation to different screens;<br>• Set up client-side data validation for correct input;<br>• Prepared architecture convenient for further integration with the backend part.<br><br><strong>🧠 Technologies</strong><br>• HTML & CSS — for structural markup and styling;<br>• JavaScript / (React/Next.js) — form state management logic and event handling;<br>• Responsive Design — interface adaptation for mobile and desktop devices.`,
            de: `🧠 <strong>Über das Projekt</strong><br><br>My Wellness Tracking ist eine Webanwendung mit einem interaktiven Formular zur Eingabe von Gesundheits- und Wohlbefindensdaten des Benutzers. Die Anwendung konzentriert sich auf die Benutzerfreundlichkeit beim Ausfüllen des Fragebogens, responsive Benutzeroberfläche und Entwicklungspotenzial zu einem vollwertigen Tracking-Tool.<br><br>⸻<br><br>🎯 <strong>Projektziel</strong><br><br>Erstellen Sie ein funktionales und benutzerfreundliches Webformular, das:<br>• es Benutzern ermöglicht, schnell und klar Gesundheitsdaten einzugeben;<br>• korrekt auf allen Geräten angezeigt wird (adaptives Interface);<br>• als technische Grundlage für mögliche Server-Logik und Datenspeicherung dient.<br><br>⸻<br><br>🛠 <strong>Meine Rolle und Beitrag</strong><br><br>In diesem Projekt war ich verantwortlich für den vollständigen Frontend-Entwicklungszyklus:<br><br><strong>🧩 Interface- und UX-Design</strong><br>• Entwarf die Reihenfolge der Formularelemente für bequeme Interaktion;<br>• Gewährleistete intuitive Navigation und einfache Informationseingabe.<br><br><strong>💻 Frontend-Implementierung</strong><br>• Erstellte ein responsives Webformular mit Anpassung an verschiedene Bildschirme;<br>• Richtete die clientseitige Datenvalidierung für korrekte Eingabe ein;<br>• Bereitete Architektur vor, die für die weitere Integration mit dem Backend-Teil bequem ist.<br><br><strong>🧠 Technologien</strong><br>• HTML & CSS — für strukturelles Markup und Styling;<br>• JavaScript / (React/Next.js) — Formularzustandsverwaltungslogik und Ereignisbehandlung;<br>• Responsive Design — Interface-Anpassung für Mobil- und Desktop-Geräte.`
        },
        techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Form Validation", "UX/UI Design"],
        liveUrl: "https://my-wellness-tracking.vercel.app/",
        githubUrl: null,
        image: null
    }
];

// Make projectsData and translations available globally for project.js
window.projectsData = projectsData;
window.translations = translations;

// Get current language from localStorage or default to 'ru'
let currentLanguage = localStorage.getItem('language') || 'ru';

// Оптимизированный IntersectionObserver для карточек проектов
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            projectObserver.unobserve(entry.target); // Отключаем после показа
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '50px'
});

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
    const speed = isDeleting ? 80 : 300; // Увеличено до 300 для печати, удаление замедлено до 80
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
    
    // Update GDPR notice with HTML
    const gdprNotice = document.querySelector('.contact-gdpr-notice');
    if (gdprNotice) {
        const gdprText = getTranslation('contact.gdpr', translations[lang]);
        if (gdprText) {
            gdprNotice.innerHTML = gdprText;
        }
    }
    
    // Update consent checkbox label
    const consentLabel = document.querySelector('.checkbox-label span');
    if (consentLabel) {
        const consentText = getTranslation('contact.form.consent', translations[lang]);
        if (consentText) {
            consentLabel.innerHTML = consentText;
        }
    }
    
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

// Parallax Effect for Hero Section (оптимизировано с throttling)
let lastScrollTime = 0;
const scrollThrottle = 16; // ~60fps

window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollTime < scrollThrottle) return;
    lastScrollTime = now;
    
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 500;
    }
}, { passive: true });

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
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6 секунд timeout (уменьшено с 10)
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message
            }),
            signal: controller.signal,
            cache: 'no-cache',
            keepalive: false
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
        
        // Получаем данные формы
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageTextarea = contactForm.querySelector('textarea');
        const consentCheckbox = contactForm.querySelector('#gdpr-consent');
        
        if (!nameInput || !emailInput || !messageTextarea) {
            return;
        }
        
        // Проверка согласия на обработку данных
        if (!consentCheckbox || !consentCheckbox.checked) {
            const consentError = getTranslation('contact.form.consentError', translations[currentLanguage]) || 'Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.';
            alert(consentError);
            if (consentCheckbox) {
                consentCheckbox.focus();
            }
            return;
        }
        
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageTextarea.value.trim()
        };
        
        // Блокируем кнопку и показываем оптимистичный UI
        button.disabled = true;
        const btnText = button.querySelector('.btn-text');
        const btnIcon = button.querySelector('.btn-icon');
        const sendingText = getTranslation('contact.form.sending', translations[currentLanguage]) || 'Отправка...';
        const submittedText = getTranslation('contact.form.submitted', translations[currentLanguage]) || 'Отправлено! ✓';
        
        if (btnText) {
            btnText.textContent = sendingText;
        }
        if (btnIcon) {
            btnIcon.textContent = '⏳';
        }
        
        // Оптимистичный UI - показываем успех через 500ms (имитация быстрой отправки)
        let optimisticTimeout = setTimeout(() => {
            if (btnText) {
                btnText.textContent = submittedText;
            }
            if (btnIcon) {
                btnIcon.textContent = '✓';
            }
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Сбрасываем форму
            contactForm.reset();
            if (consentCheckbox) {
                consentCheckbox.checked = false;
            }
        }, 500);
        
        try {
            // Отправляем данные на backend
            const result = await sendContactForm(formData);
            
            clearTimeout(optimisticTimeout);
            
            if (result.success) {
                // Подтверждаем успех
                if (btnText) {
                    btnText.textContent = submittedText;
                }
                if (btnIcon) {
                    btnIcon.textContent = '✓';
                }
                button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            } else {
                // Откатываем оптимистичный UI при ошибке
                button.disabled = false;
                if (btnText) {
                    btnText.textContent = getTranslation('contact.form.submit', translations[currentLanguage]) || 'Отправить';
                }
                if (btnIcon) {
                    btnIcon.textContent = '→';
                }
                button.style.background = '';
                alert(result.message || 'Ошибка отправки сообщения');
                return;
            }
        } catch (error) {
            clearTimeout(optimisticTimeout);
            button.disabled = false;
            if (btnText) {
                btnText.textContent = getTranslation('contact.form.submit', translations[currentLanguage]) || 'Отправить';
            }
            if (btnIcon) {
                btnIcon.textContent = '→';
            }
            button.style.background = '';
            alert('Произошла ошибка при отправке формы');
            return;
        }
        
        // Восстанавливаем кнопку через 2 секунды
        setTimeout(() => {
            button.disabled = false;
            if (btnText) {
                btnText.textContent = getTranslation('contact.form.submit', translations[currentLanguage]) || 'Отправить';
            }
            if (btnIcon) {
                btnIcon.textContent = '→';
            }
            button.style.background = '';
        }, 2000);
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
    
    // Оптимизация: кэшируем переводы
    const titleKey = currentLanguage;
    const descKey = currentLanguage;
    
    container.innerHTML = projectsData.map((project, index) => {
        const projectTitle = project.title[titleKey] || project.title.ru;
        const projectShortDescription = project.shortDescription 
            ? (project.shortDescription[descKey] || project.shortDescription.ru)
            : (project.description[descKey] || project.description.ru).substring(0, 120) + '...';
        const projectId = project.id || `project-${index}`;
        
        // Упрощенная обработка изображений
        const hasImage = project.image && project.image.trim() !== '';
        const imageStyle = hasImage 
            ? `background-image: url('${project.image.startsWith('/') ? project.image : '/' + project.image}'); background-size: cover; background-position: center;`
            : `background: linear-gradient(135deg, var(--primary), var(--accent));`;
        
        return `<a href="project.html?id=${projectId}" class="project-card-link"><div class="project-card" data-index="${index}"><div class="project-image${hasImage ? ' has-image' : ''}" style="${imageStyle}"></div><div class="project-info"><h3>${projectTitle}</h3><p class="project-description">${projectShortDescription}</p></div></div></a>`;
    }).join('');
    
    // Оптимизация: используем requestAnimationFrame для батчинга наблюдений
    requestAnimationFrame(() => {
        const cards = container.querySelectorAll('.project-card');
        cards.forEach(card => projectObserver.observe(card));
    });
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

