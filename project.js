// Wait for script.js to load and then initialize
let checkCount = 0;
const maxChecks = 20; // Maximum 1 second wait
const projectPageI18n = {
    ru: {
        loadErrorTitle: 'Ошибка загрузки',
        loadErrorText: 'Не удалось загрузить данные проектов. Пожалуйста, обновите страницу.',
        backToProjects: 'Вернуться к проектам',
        projectNotSpecifiedTitle: 'Проект не указан',
        projectNotSpecifiedText: 'Не указан ID проекта в URL.',
        projectNotFoundTitle: 'Проект не найден',
        projectNotFoundText: (id) => `Проект с ID "${id}" не существует.`
    },
    en: {
        loadErrorTitle: 'Loading Error',
        loadErrorText: 'Could not load project data. Please refresh the page.',
        backToProjects: 'Back to Projects',
        projectNotSpecifiedTitle: 'Project Not Specified',
        projectNotSpecifiedText: 'No project ID was provided in the URL.',
        projectNotFoundTitle: 'Project Not Found',
        projectNotFoundText: (id) => `Project with ID "${id}" does not exist.`
    },
    de: {
        loadErrorTitle: 'Ladefehler',
        loadErrorText: 'Projektdaten konnten nicht geladen werden. Bitte aktualisieren Sie die Seite.',
        backToProjects: 'Zurück zu den Projekten',
        projectNotSpecifiedTitle: 'Projekt nicht angegeben',
        projectNotSpecifiedText: 'In der URL wurde keine Projekt-ID angegeben.',
        projectNotFoundTitle: 'Projekt nicht gefunden',
        projectNotFoundText: (id) => `Projekt mit der ID "${id}" existiert nicht.`
    }
};

function getProjectPageText(lang, key, ...args) {
    const selectedLang = projectPageI18n[lang] ? lang : 'ru';
    const value = projectPageI18n[selectedLang][key];
    if (typeof value === 'function') {
        return value(...args);
    }
    return value || projectPageI18n.ru[key];
}

function waitForScripts() {
    checkCount++;
    
    if (window.projectsData && window.translations) {
        initProjectPage();
    } else if (checkCount < maxChecks) {
        // Wait a bit more if scripts haven't loaded yet
        setTimeout(waitForScripts, 50);
    } else {
        // Timeout - show error
        const language = localStorage.getItem('language') || 'ru';
        document.getElementById('project-content').innerHTML = `
            <div class="project-not-found">
                <h1>${getProjectPageText(language, 'loadErrorTitle')}</h1>
                <p>${getProjectPageText(language, 'loadErrorText')}</p>
                <a href="index.html#projects" class="btn btn-primary">${getProjectPageText(language, 'backToProjects')}</a>
            </div>
        `;
    }
}

// Start checking when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForScripts);
} else {
    // DOM is already ready
    waitForScripts();
}

function initProjectPage() {
    // Access global variables from script.js
    const projectsData = window.projectsData || [];
    const translations = window.translations || {};
    
    if (projectsData.length === 0) {
        document.getElementById('project-content').innerHTML = `
            <div class="project-not-found">
                <h1>${getProjectPageText(currentLanguage, 'loadErrorTitle')}</h1>
                <p>${getProjectPageText(currentLanguage, 'loadErrorText')}</p>
                <a href="index.html#projects" class="btn btn-primary">${getProjectPageText(currentLanguage, 'backToProjects')}</a>
            </div>
        `;
        return;
    }
    
    // Get current language from localStorage or default to 'ru'
    let currentLanguage = localStorage.getItem('language') || 'ru';
    
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (!projectId) {
        document.getElementById('project-content').innerHTML = `
            <div class="project-not-found">
                <h1>${getProjectPageText(currentLanguage, 'projectNotSpecifiedTitle')}</h1>
                <p>${getProjectPageText(currentLanguage, 'projectNotSpecifiedText')}</p>
                <a href="index.html#projects" class="btn btn-primary">${getProjectPageText(currentLanguage, 'backToProjects')}</a>
            </div>
        `;
        return;
    }
    
    // Find project by ID
    const project = projectsData.find(p => p.id === projectId);
    
    if (!project) {
        document.getElementById('project-content').innerHTML = `
            <div class="project-not-found">
                <h1>${getProjectPageText(currentLanguage, 'projectNotFoundTitle')}</h1>
                <p>${getProjectPageText(currentLanguage, 'projectNotFoundText', projectId)}</p>
                <a href="index.html#projects" class="btn btn-primary">${getProjectPageText(currentLanguage, 'backToProjects')}</a>
            </div>
        `;
    } else {
        // Render project details
        renderProject(project, currentLanguage, translations);
        setupLanguageSwitcher(project, currentLanguage, translations);
    }
}

function renderProject(project, currentLanguage, translations) {
    const projectTitle = typeof project.title === 'object' 
        ? project.title[currentLanguage] || project.title.ru 
        : project.title;
    
    const projectDescription = typeof project.description === 'object' 
        ? project.description[currentLanguage] || project.description.ru 
        : project.description;
    
    const liveText = getTranslationHelper('projects.live', translations[currentLanguage]) || 'Live-версия';
    const githubText = getTranslationHelper('projects.github', translations[currentLanguage]) || 'GitHub';
    const techTitle = getTranslationHelper('projects.techTitle', translations[currentLanguage]) || 'Используемые технологии:';
    
    // Image handling
    const hasImage = project.image && project.image.trim() !== '';
    let imageStyle = `background: linear-gradient(135deg, var(--primary), var(--accent));`;
    
    if (hasImage) {
        if (project.image.startsWith('data:') || project.image.startsWith('http')) {
            imageStyle = `background-image: url('${project.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;`;
        } else {
            const imagePath = project.image.startsWith('/') ? project.image : '/' + project.image;
            imageStyle = `background-image: url('${imagePath}'); background-size: cover; background-position: center; background-repeat: no-repeat;`;
        }
    }
    
    const liveButton = project.liveUrl 
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary project-detail-btn">${liveText}</a>`
        : '';
    
    const githubButton = project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary project-detail-btn">${githubText}</a>`
        : '';
    
    const buttons = liveButton || githubButton 
        ? `<div class="project-detail-buttons">${liveButton}${githubButton}</div>`
        : '';
    
    const content = `
        <div class="project-detail-header">
            <h1 class="project-detail-title">${projectTitle}</h1>
            ${buttons}
        </div>
        
        <div class="project-detail-image ${hasImage ? 'has-image' : ''}" style="${imageStyle}">
            ${hasImage ? '<div class="project-image-overlay"></div>' : ''}
        </div>
        
        <div class="project-detail-description">
            ${projectDescription.replace(/\n/g, '<br>')}
        </div>
        
        <div class="project-detail-tech">
            <h2 class="project-detail-tech-title">${techTitle}</h2>
            <div class="project-tags">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('project-content').innerHTML = content;
}

function getTranslationHelper(key, obj) {
    const keys = key.split('.');
    let value = obj;
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

function setupLanguageSwitcher(project, currentLanguage, translations) {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderProject(project, currentLanguage, translations);
            updateProjectStaticLanguage(currentLanguage, translations);
        });
    });
    
    // Set active language button
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
    
    updateProjectStaticLanguage(currentLanguage, translations);
}

function updateProjectStaticLanguage(currentLanguage, translations) {
    if (!translations || !translations[currentLanguage]) return;
    
    // Update navigation and other elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslationHelper(key, translations[currentLanguage]);
        if (translation) {
            element.textContent = translation;
        }
    });
}
