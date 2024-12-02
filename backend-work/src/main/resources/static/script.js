const apiUrl = "/api";


// Привязывается к форме "project-form" и отправляет POST-запрос на сервер для создания нового проекта.
document.getElementById("project-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;

    // Отправка данных о проекте на сервер
    const response = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
    });

    // Проверка успешности запроса
    if (response.ok) {
        alert("Project created successfully!");
        e.target.reset();
    } else {
        alert("Failed to create project.");
    }
});

// Привязывается к форме "contact-form" и отправляет POST-запрос для добавления нового контакта.
document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fullName = document.getElementById("contact-name").value;
    const organization = document.getElementById("contact-organization").value;
    const position = document.getElementById("contact-position").value;
    const email = document.getElementById("contact-email").value;

    // Отправка данных о контакте на сервер
    const response = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, organization, position, email }),
    });

    // Проверка успешности запроса
    if (response.ok) {
        alert("Contact created successfully!");
        e.target.reset();
    } else {
        alert("Failed to create contact.");
    }
});

// Привязывается к форме "role-form" и отправляет POST-запрос для назначения роли контакту в проекте.
document.getElementById("role-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const projectId = document.getElementById("project-id").value;
    const contactId = document.getElementById("contact-id").value;
    const role = document.getElementById("role").value;

    // Отправка данных для назначения роли
    const response = await fetch(`${apiUrl}/contacts/${contactId}/assign-role?projectId=${projectId}&role=${role}`, {
        method: "POST",
    });

    // Проверка успешности запроса
    if (response.ok) {
        alert("Role assigned successfully!");
        e.target.reset();
    } else {
        alert("Failed to assign role.");
    }
});

// Привязывается к кнопке "load-projects" и отправляет GET-запрос для получения списка всех проектов.
document.getElementById("load-projects").addEventListener("click", async () => {
    const response = await fetch(`${apiUrl}/projects`);
    if (response.ok) {
        const projects = await response.json();
        const tableBody = document.getElementById("projects-table-body");
        tableBody.innerHTML = "";

        // Добавление каждого проекта в таблицу
        projects.forEach(project => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${project.id}</td>
                <td>${project.name}</td>
                <td>${project.description}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        alert("Failed to load projects.");
    }
});

// Привязывается к кнопке "load-contacts" и отправляет GET-запрос для получения контактов, связанных с указанным проектом.
document.getElementById("load-contacts").addEventListener("click", async () => {
    const projectId = document.getElementById("load-contacts-project-id").value;

    if (!projectId) {
        alert("Please enter a Project ID.");
        return;
    }

    // Добавление каждого контакта в таблицу
    const response = await fetch(`${apiUrl}/contacts/project/${projectId}`);
    if (response.ok) {
        const contacts = await response.json();
        const tableBody = document.getElementById("contacts-table-body");
        tableBody.innerHTML = "";

        contacts.forEach(contact => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${contact.id}</td>
                <td>${contact.fullName}</td>
                <td>${contact.project?.name || "N/A"}</td>
                <td>${contact.role || "N/A"}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        alert("Failed to load contacts.");
    }
});
