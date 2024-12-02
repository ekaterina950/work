package org.example.entity;



import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String organization;

    private String position;

    private String email;

    @ManyToOne

    private Project project;

    @Enumerated(EnumType.STRING)
    private Role role;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}

