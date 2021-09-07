CREATE DATABASE final_project2;

CREATE TABLE trackerList (
  tracker_id SERIAL PRIMARY KEY,
  exercise VARCHAR(200),
  repetition VARCHAR(200),
  weight VARCHAR(200),
  duration VARCHAR(200)
);