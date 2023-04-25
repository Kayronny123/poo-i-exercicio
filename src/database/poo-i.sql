
CREATE TABLE videos (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    title TEXT NOT NULL,
    time INTEGER NOT NULL,
    data_upload DATE NOT NULL
);
DROP TABLE videos;
INSERT INTO videos (id, title, time, data_upload) VALUES
("V001", "pegadinhas", 50, "2023-04-25");
SELECT * FROM videos;