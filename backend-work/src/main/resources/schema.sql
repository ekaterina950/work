CREATE TABLE IF NOT EXISTS project (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS contact (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    position VARCHAR(255),
    email VARCHAR(255),
    project_id BIGINT REFERENCES project(id),
    role VARCHAR(50)
);
