package org.example.controller;



import org.example.entity.Contact;
import org.example.service.ContactService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/*
 REST-контроллер для управления контактами.
 Предоставляет эндпоинты для создания контактов, получения контактов по проекту
 и назначения ролей контактам.
 */
@RestController
@RequestMapping("/api/contacts")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    //Эндпоинт для создания нового контакта.
    @PostMapping
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }

    //Эндпоинт для получения списка контактов, связанных с конкретным проектом.
    @GetMapping("/project/{projectId}")
    public List<Contact> getContactsByProject(@PathVariable Long projectId) {
        return contactService.getContactsByProject(projectId);
    }

    //Эндпоинт для назначения роли контакту в рамках проекта.
    @PostMapping("/{contactId}/assign-role")
    public Contact assignRole(
            @PathVariable Long contactId,
            @RequestParam Long projectId,
            @RequestParam String role
    ) {
        return contactService.assignRole(contactId, projectId, role);
    }
}

