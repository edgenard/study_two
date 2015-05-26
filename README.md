# StudyBeige

[Heroku link][heroku]

[heroku]: https://studybeige.space/

## Minimum Viable Product
StudyTwo is a clone of StudyBlue built on Rails and Backbone. :

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->
Users can:
- [x] Create accounts
- [x] Delete accounts
- [x] Edit account information
- [x] Create sessions (log in)
- [x] Delete sessions(log out)
- [x] Create decks of flashcards.
- [x] View and Edit flashcards.
- [x] Study flashcards
- [x] Study Flashcards using spaced repetition 



## Design Docs
* [View Wireframes][views] __Unfinished__

- [x] Make new_user and user dashboard mockups
- [x] Deck creation form view
- [x] Flashcard creation form view
- [x] Deck show view
- [x] Study view before and after answering

* [DB schema][schema] 

 
- [x] User db schema
- [x] Deck db schema
- [x] Flashcard db schema

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and dashboard (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase students will be able to sign up,
sign in, sign out and destroy their accounts. I will also add the ability for users to
destroy their accounts. I will also be setting the associations between students, tutors
and study groups. Once a user has created an account they will be redirected to their
dashboard which is where the Backbone app will be initialized. I will then push the app to
Heroku to get a live version to make sure all of the user authentication is working.

[Details][phase-one]

### Phase 2: Starting Backbone with Deck and FlashCard creation   (~3 days)
I will set up the deck model and flashcard model and the appropriate associations to
users. I will add API routes to allow students and teachers to create decks
of flashcard. They will also be able to see the decks
of flashcards they have created on their dashboard. And to edit deck details and flashcard details.


[Details][phase-two]

### Phase 3: Add styles and picture uploads to cards (~2 days)
I will create an overall design for the site to help users navigate and use it.  I will add picture uploads using the paperclip gem, figaro gem and an Amazon S3 bucket.


[Details][phase-three]

### Phase 4: Add ability to study cards and score them (~1 days)
I will add view in Backbone to allow users to study the cards and score them. 

[Details][phase-four]

### Phase 5: Add spaced repetition (~2 days)
I will implement a spaced repetition algorithm that breaks up the studying of each deck overtime. This will allow the user space out their review to more effectively learn the materials. This will require updates to the deck model and card model on the server side. 

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Add page explaining spaced repetition. Link to it from footer.
- [ ] Add static pages, About and Contact
- [ ] Add ability for users to be tutors and have a class of students
- [ ] Add ability of tutors share decks with students in their class and track their progress.
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
