DROP TABLE if exists article_users;

DROP TABLE if exists users;

DROP TYPE if exists user_type;

DROP TABLE if exists articles;

DROP TYPE if exists article_type;

CREATE TYPE user_type AS ENUM('historical_figure', 'simple_user');

CREATE TABLE
  users (
    user_id SERIAL PRIMARY KEY,
    type user_type NOT NULL DEFAULT 'simple_user',
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    description TEXT,
    birth_date DATE,
    death_date DATE,
    nationality VARCHAR(50) DEFAULT 'Казак',
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE
OR REPLACE FUNCTION update_updated_at_column () RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at BEFORE
UPDATE ON users FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column ();

CREATE TYPE article_type AS ENUM('opinion', 'work', 'biography');

CREATE TABLE
  articles (
    article_id SERIAL PRIMARY KEY,
    type article_type NOT NULL DEFAULT 'opinion',
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    likes INT DEFAULT 0,
    image TEXT,
    published_date DATE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE
  article_users (
    article_id INT REFERENCES articles (article_id) ON DELETE CASCADE,
    user_id INT REFERENCES users (user_id) ON DELETE CASCADE,
    PRIMARY KEY (article_id, user_id)
  );
