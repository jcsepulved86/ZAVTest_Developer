CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    mail VARCHAR(180),
    phone VARCHAR(180),
	motivo VARCHAR(200),
    comentarios VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);