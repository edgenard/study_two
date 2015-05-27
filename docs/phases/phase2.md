# Phase 2: Creating, Editing, Viewing Decks and Cards

## Rails
### Models with associations
- [x] Deck (title, description, user_id)
   * A deck belongs to a user
   * A deck has many flashcards.
- [x] Card (deck_id, front, back, score)
  * A flashcard belongs to a deck.
    

### Controllers
- [x] Api::DeckController (create, destroy, update, index)
- [x] Api::FlashCardController (create, destroy, show, update)

### Views
- [x] api/decks/index.json.jbuilder


## Backbone
### Models
- [x] Deck ( parses flashcards as cards)
- [x] Card


### Collections
- [x] Decks
- [x] Cards

### Routers
- [x] app Router

### Views
- [x] User Dashboard (user_show page )  
- [x] DeckForm(to create or edit decks)
- [x] CardForm(to create or edit cards)
- [x] DeckShow (Shows deck details and lists cards)


## Gems/Libraries
