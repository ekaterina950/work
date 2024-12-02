-- Insert example projects
INSERT INTO project (name, description) VALUES ('Project A', 'Description of Project A');
INSERT INTO project (name, description) VALUES ('Project B', 'Description of Project B');


INSERT INTO contact (full_name, organization, position, email, project_id, role)
VALUES ('John Doe', 'Company A', 'Manager', 'johndoe@example.com', 1, 'AUTHOR');
INSERT INTO contact (full_name, organization, position, email, project_id, role)
VALUES ('Jane Smith', 'Company B', 'Developer', 'janesmith@example.com', 2, 'SPECIALIST');

