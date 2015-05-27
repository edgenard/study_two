# Schema Information


## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | 
user_id     | integer   | not null, foreign key (references users)

## cards
column name              | data type | details
-------------------------|-----------|-----------------------
id                       | integer   | not null, primary key
deck_id                  | integer   | not null, foreign key (references deck)
front                    | text      | not null
back                     | text      | not null
score                    | integer   | not null 
streak                   | integer   | not null
due_date                 | datetime  | not null
front_image_file_name    | string    |
front_image_content_type | string    |
front_image_updated_at   | datetime  |
back_image_file_name     | string    |
back_image_content_type  | string    |
back_image_updated_at    | string    |
streak                   | integer   |
due_date                 | datetime  |




## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
uid             | string    | 
provider        | string    | 


## sessions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
session_token   | string    | not null



