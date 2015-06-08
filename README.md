# StudyBeige

[LIVE LINK](http://www.studybeige.space/)

## What is it
A smart flashcard app inspired by [StudyBlue](https://www.studyblue.com/). It implements a spaced repetition algorithm to make studying more efficient.

## How to use it

* Sign up
* Create a deck
* Add cards to deck.
* Study cards. 
	* You are shown the front and you must remember or figure out what is on the back
	* Score your answer. The better your score the more time will pass before that card becomes due. 
	* A wrong answer will be put in the back of the current set of cards to be reviewed again before the study session ends. 



## Techs used to make it

* Rails - User auth in Rails, otherwise provides JSON API for backbone front end. 
* Backbone.js - Consuming RESTful JSON API
* Postgresql
* Git


## Implementing it (Fun begins)

This project provided several interesting problems:

1. Dealing deck-macking, card-making and adding pictures to cards.
  * Dealing with model associations on the front-end because Backbone doesn't provide a default way of dealing with this. 
  * Adding pictures to the cards proved to be more involved than I first thought
    * setting up with Paperclip and Amazon S3
    * Adding custom validations for the cards because users would have the option to include either text or pictures.
    * Overriding what gets sent to the server 

2. Deciding how to present information to the user.
  * I wanted the least number of user interactions as possible. (Why? [Magic Ink](http://worrydream.com/MagicInk/))
  * I wanted to present the most important information prominently. Which in this case is what the user needs to study and when.
  * I wanted to give the user feedback as fast as possible. 
  * When studying I knew that nothing else mattered but the current card being studied. 

3. Implementing a spaced repetition algorithm. 
  * I chose a good-enough algorithm
  * This still required several changes throughout the whole stack from the DB to the front-end. 
  * Making due-dates human friendly.


## DB Schema and Wireframes 

* [DB Schema](docs/schema.md) 
* [Wireframes](docs/views.md)

## Todo 
- [ ] Write Tests. 
- [ ] Add static page about spaced repetition and this specific implementation
- [ ] Add ability for users to be tutors and to have students. 
- [ ] Make decks and individual cards shareable between users. 
- [ ] Add ability to search for cards, decks and users.
- [ ] Tutors can assign decks to students and write and assign quizzes. 
- [ ] Create multiple choice flashcards. 
- [ ] Study Sessions between uses using WebRTC   



