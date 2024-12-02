package org.example.controller;



import org.example.entity.Contact;
import org.example.service.ContactService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }

    @GetMapping("/project/{projectId}")
    public List<Contact> getContactsByProject(@PathVariable Long projectId) {
        return contactService.getContactsByProject(projectId);
    }

    @PostMapping("/{contactId}/assign-role")
    public Contact assignRole(
            @PathVariable Long contactId,
            @RequestParam Long projectId,
            @RequestParam String role
    ) {
        return contactService.assignRole(contactId, projectId, role);
    }
}

