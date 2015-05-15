# Schema Information


## deck
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | 
user_id     | integer   | not null, foreign key (references users)

## flashcard
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references deck)
front       | text      | not null
back        | text      | not null
score       | float     | not null



## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique




