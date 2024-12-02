package org.example.service;



import org.example.entity.Project;
import org.example.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;


/*
 Сервисный класс для управления проектами.
 Содержит бизнес-логику для операций над проектами.
 */
@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    //Создает новый проект и сохраняет его в базе данных.
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    //Возвращает список всех проектов из базы данных.
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    //Возвращает проект по его идентификатору.
    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElseThrow();
    }
}

