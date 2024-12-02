package org.example.service;



import org.example.entity.Contact;
import org.example.entity.Project;
import org.example.entity.Role;
import org.example.repository.ContactRepository;
import org.example.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;


/*
 Сервис для управления контактами.
 Содержит методы для создания контактов, получения контактов по проекту
 и назначения роли контакту.
 */
@Service
public class ContactService {
    private final ContactRepository contactRepository;
    private final ProjectRepository projectRepository;

    public ContactService(ContactRepository contactRepository, ProjectRepository projectRepository) {
        this.contactRepository = contactRepository;
        this.projectRepository = projectRepository;
    }

    //Создает новый контакт и сохраняет его в базе данных.
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    //Возвращает список контактов, связанных с указанным проектом.
    public List<Contact> getContactsByProject(Long projectId) {
        Project project = projectRepository.findById(projectId).orElseThrow();
        return contactRepository.findAll().stream()
                .filter(contact -> project.equals(contact.getProject()))
                .toList();
    }

    //Назначает контакт ролью в рамках определенного проекта.
    public Contact assignRole(Long contactId, Long projectId, String role) {
        Contact contact = contactRepository.findById(contactId).orElseThrow();
        Project project = projectRepository.findById(projectId).orElseThrow();

        contact.setProject(project);
        contact.setRole(Role.valueOf(role));
        return contactRepository.save(contact);
    }
}

