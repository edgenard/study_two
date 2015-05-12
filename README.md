# StudyTwo

[Heroku link][heroku]

[heroku]: https://studytwo.herokuapp.com/

## Minimum Viable Product
StudyTwo is a clone of StudyBlue built on Rails and Backbone. :

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->
Users can:
- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create decks of flashcards.
- [ ] View and Edit flashcards.
- [ ] Study flashcards
- [ ] See their stats on each flashcard and on each deck 



## Design Docs
* [View Wireframes][views] __Unfinished__
* [DB schema][schema] __Unfinished__

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and dashboard (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase students will be able to sign up,
sign in, sign out and destroy their accounts. I will also add the ability for users to
destroy their accounts. I will also be setting the associations between students, tutors
and study groups. Once a user has created an account they will be redirected to their
dashboard which is were the Backbone app will be initialized. I will then push the app to
Heroku to get a live version to make sure all of the user authentication is working.

[Details][phase-one]

### Phase 2: Study group creation and deck creation   (~2 days)
I will add API routes that send and receive JSON data to allow tutors
to create a study group and invite students to join, remove students from the study group.
Students will be able to see that they have been invited to join a study group and decide
to accept or reject the invitation. If a student joins a study group it will show up on
their dashboard under the list of their study groups.

I will set up the deck model and flashcard model and the appropriate associations to
students or tutors. I will add API routes to allow students and teachers to create decks
of flashcard with with a rich text editor thanks to the
[jWYSISWYG][https://github.com/akzhan/jwysiwyg]. They will also be able to see the decks
of flashcards they have created on their dashboard. Tutors will be able to assign
flashcards to students.Students will see their assigned flashcards when they visit their
dashboard.

__Details unfinihshed__
[Details][phase-two]

### Phase 3: Studying flashcards and stats (~3 days)
I will add the ability for students to study the flashcards by showing them one side. When
the card is "flipped" over I will ask them to rate how to they did on a scale of 1 to 5.
Based on their answer I will will change the order of the flashcards based on a spaced
repetition algorithm. This will make it so that things a student knows well will show up
less frequently than the things they need to work on. Each time a student visits their
dashboard they will be able notified of the things they need to work on. When a student
finishes a study session they will be shown the stats for that session. Stats for a
flashcard session will be a bar graph thats show the distribution of their answers, how
long they have been studying and the number of consecutive days they have studied. Tutors
will also be able to see the stats of each student.


[Details][phase-three]

### Phase 4: Quizzes and Quiz stats (~2 days)
When a tutor decides to create a quiz they will be given the option to create one based on
a set of flash cards which will populate the questions based on the flashcards. The tutor
will then be able to go through each question on the quiz editing them and  deciding
whether to make them fill-in(default) or multiple choice. They will also be able to add
more questions. Quizzes can also be created from a blank slate. Tutors will assign quizzes
to students. A quiz can have a time limit. When a student visits their dashboard they will
be able to see if they have any quizzes assigned, how many questions the quiz has and how
long they have to take it. Once they've taken it they will see be shown the number right
and the number wrong. The tutor will be able to see each students stats on each quiz
they've taken.

[Details][phase-four]

### Phase 5: Activity History (~1 days)
Each student will have the ability to see how they are doing on a topic over time. They
will be able to see how many days they've worked and for how long. They'll be able to earn
badges and or points for being consistent and disciplined in the work.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Study sessions with tutor and one or more students over webRTC with a shared whiteboard.
- [ ] Students can take a quiz during a study session.
- [ ] Ability to drag in quiz problems that students got wrong from past quizzes during study session.
- [ ] Ability to create multiple choice flashcards.
- [ ] Ability to add audio when creating flashcards.
- [ ] Ability to draw on flashcards and quiz questions when creating them via canvas.



[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
