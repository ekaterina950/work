const apiUrl = "/api";

// Create Project
document.getElementById("project-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;

    const response = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
        alert("Project created successfully!");
        e.target.reset();
    } else {
        alert("Failed to create project.");
    }
});

// Create Contact
document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fullName = document.getElementById("contact-name").value;
    const organization = document.getElementById("contact-organization").value;
    const position = document.getElementById("contact-position").value;
    const email = document.getElementById("contact-email").value;

    const response = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, organization, position, email }),
    });

    if (response.ok) {
        alert("Contact created successfully!");
        e.target.reset();
    } else {
        alert("Failed to create contact.");
    }
});

// Assign Role
document.getElementById("role-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const projectId = document.getElementById("project-id").value;
    const contactId = document.getElementById("contact-id").value;
    const role = document.getElementById("role").value;

    const response = await fetch(`${apiUrl}/contacts/${contactId}/assign-role?projectId=${projectId}&role=${role}`, {
        method: "POST",
    });

    if (response.ok) {
        alert("Role assigned successfully!");
        e.target.reset();
    } else {
        alert("Failed to assign role.");
    }
});

// Load Projects
document.getElementById("load-projects").addEventListener("click", async () => {
    const response = await fetch(`${apiUrl}/projects`);
    if (response.ok) {
        const projects = await response.json();
        const tableBody = document.getElementById("projects-table-body");
        tableBody.innerHTML = "";

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

// Load Contacts
document.getElementById("load-contacts").addEventListener("click", async () => {
    const projectId = document.getElementById("load-contacts-project-id").value;

    if (!projectId) {
        alert("Please enter a Project ID.");
        return;
    }

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
