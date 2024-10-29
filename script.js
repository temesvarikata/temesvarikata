document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');

    // Egyszerű mock API, amit JavaScript-en belül hozunk létre
    const api = {
        getProjects: function () {
            return [
                { id: 1, title: 'Weboldal 1', description: 'Ez az első weboldal bemutatása.' },
                { id: 2, title: 'Weboldal 2', description: 'Ez a második weboldal bemutatása.' },
                { id: 3, title: 'Weboldal 3', description: 'Ez a harmadik weboldal bemutatása.' }
            ];
        }
    };

    // Projektek lista generálása
    const projects = api.getProjects();
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });

    // Kapcsolati űrlap kezelése
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Az üzenet elküldve!');
        contactForm.reset();
    });
});
