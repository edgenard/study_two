# Phase 1: User Authentication, Students, Tutors

## Rails
### Models, associations
* User - with boolean for tutor(email, password, is_tutor, session_token)
  * A student has many tutors through study groups
  * A tutor has many students through study groups.
  * A tutor has many study groups
  * A student has many study groups through StudyGroupStudents.
  
* StudyGroup (title, description, tutor_id)
  * A study group belongs to a tutor.
  * A study group has many students through StudyGroupStudents


* StudyGroupStudents (study_group_id, student_id)
  * A study group students belongs to a student
  * A study group students belongs to a study group
  


### Controllers
* UsersController (create, new, destroy, update)
* SessionsController (create, new, destroy)


### Views
* root/landing_page.html.erb
* users/new.html.erb
* users/edit.html.erb
* users/show.html.erb (dashboard - Backbone app initialized)
* session/new.html.erb

## Backbone
### Models


### Collections



### Views


## Gems/Libraries
