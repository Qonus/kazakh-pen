DROP FUNCTION IF EXISTS get_users;
CREATE FUNCTION get_users(p_user_id int DEFAULT NULL, p_limit int default null)
RETURNS TABLE (
  user_id int,
  type user_type,
  first_name varchar,
  last_name varchar,
  description text,
  birth_date date,
  death_date date,
  nationality varchar,
  image text,
  created_at timestamp,
  updated_at timestamp,
  article_count bigint,
  total_likes bigint
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    u.user_id,
    u.type,
    u.first_name,
    u.last_name,
    u.description,
    u.birth_date,
    u.death_date,
    u.nationality,
    u.image,
    u.created_at,
    u.updated_at,
    COUNT(a.article_id) AS article_count,
    COALESCE(SUM(a.likes), 0) AS total_likes
  FROM 
    users u
  LEFT JOIN 
    article_users au ON au.user_id = u.user_id
  LEFT JOIN 
    articles a ON a.article_id = au.article_id
  WHERE 
    (p_user_id IS NULL OR u.user_id = p_user_id)
  GROUP BY 
    u.user_id
  ORDER BY
    total_likes DESC
  LIMIT COALESCE(p_limit, (SELECT COUNT(*) FROM users));
END;
$$ LANGUAGE plpgsql;



DROP FUNCTION IF EXISTS get_articles;
CREATE OR REPLACE FUNCTION get_articles(p_article_id INT DEFAULT NULL, p_limit int default null)
RETURNS TABLE (
    article_id INT,
    type article_type,
    title VARCHAR,
    content TEXT,
    likes INT,
    image TEXT,
    published_date DATE,
    updated_at TIMESTAMP,
    created_at TIMESTAMP
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        a.article_id,
        a.type,
        a.title,
        a.content,
        a.likes,
        a.image,
        a.published_date,
        a.updated_at,
        a.created_at
    FROM
        articles a
    WHERE
        p_article_id IS NULL OR a.article_id = p_article_id
    ORDER BY a.likes DESC
    LIMIT COALESCE(p_limit, (SELECT COUNT(*) FROM articles));
END;
$$ LANGUAGE plpgsql;



DROP FUNCTION IF EXISTS get_article_users;

CREATE FUNCTION get_article_users(p_article_id INT)
RETURNS TABLE (
  user_id INT,
  type user_type,
  first_name VARCHAR,
  last_name VARCHAR,
  description TEXT,
  birth_date DATE,
  death_date DATE,
  nationality VARCHAR,
  image TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  article_count bigint,
  total_likes bigint
) AS $$
BEGIN
  RETURN QUERY
  SELECT u.user_id, u.type, u.first_name, u.last_name, u.description, u.birth_date, u.death_date, u.nationality, u.image, u.created_at, u.updated_at, u.article_count, u.total_likes
  FROM get_users() u
  JOIN article_users au ON au.user_id = u.user_id
  WHERE au.article_id = p_article_id;
END;
$$ LANGUAGE plpgsql;



DROP function IF EXISTS get_user_articles;
CREATE FUNCTION get_user_articles(p_user_id int)
RETURNS TABLE (
  article_id int,
  type article_type,
  title varchar,
  content text,
  likes int,
  image text,
  published_date date,
  updated_at timestamp,
  created_at timestamp
) AS $$
BEGIN
  RETURN QUERY
  SELECT a.article_id, a.type, a.title, a.content, a.likes, a.image, a.published_date, a.updated_at, a.created_at
  FROM get_articles() a
  JOIN article_users au ON au.article_id = a.article_id
  WHERE au.user_id = p_user_id;
END;
$$ LANGUAGE plpgsql;