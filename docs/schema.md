# Schema Information

## activity 
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null

## deck
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
blog_id     | integer   | not null, foreign key (references blogs)
follower_id | integer   | not null, foreign key (references users)

## flashcard
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
body        | string    |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
tag_id      | integer   | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
is_tutor        | boolean   | not null

## study_groups
column name  | data type  | details
-------------|------------|----------------------
id           | integer    | not null, primary key 
title        | string     | not null
description  | text       | 
tutor_id     | integer    | not null

## study_group_students
column name      | data type  | details
-----------------|------------|----------------------
id               | integer    | not null, primary key 
study_group_id   | integer    | not null, foreign key (references study_groups)
student_id       | integer    | not null, foreign key (references users)


