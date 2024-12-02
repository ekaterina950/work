package org.example.controller;



import org.example.entity.Project;
import org.example.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/*
 REST-контроллер для управления проектами.
 Предоставляет эндпоинты для создания, получения всех проектов
 и получения проекта по его идентификатору.
 */
@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    //Эндпоинт для создания нового проекта.
    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    //Эндпоинт для получения списка всех проектов.
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    //Эндпоинт для получения проекта по его идентификатору.
    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }
}

