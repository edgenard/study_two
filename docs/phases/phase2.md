# Phase 2: Viewing Blogs and Posts

## Rails
### Models with associations
- [x] Deck (title, description, user_id)
   * A deck belongs to a user
   * A deck has many flashcards.
- [x] Card (deck_id, front, back, score)
  * A flashcard belongs to a deck.
    

### Controllers
- [x] Api::DeckController (~~create~~, ~~destroy~~, ~~update~~, ~~index~~)
- [x] Api::FlashCardController (create, destroy, show, update)

### Views
- [x] api/decks/index.json.jbuilder


## Backbone
### Models
- [x] Deck ( parses flashcards as cards)
- [x] Card


### Collections
- [x] Decks(used to make dashboard view)
- [x] Cards

### Routers
- [x] app Router

### Views
- [ ] StudyDeck(user_show page )
  
- [x] DeckForm(to create or edit decks)
- [x] CardForm(to create or edit cards)
- [ ] DeckShow (Shows deck details and lists cards)
- [ ] CardsIndex( Subview of DeckShow)

## Gems/Libraries
* [jWYSISWYG][https://github.com/akzhan/jwysiwyg] to allow rich text editing in inputs 