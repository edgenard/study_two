# Phase 2: Viewing Blogs and Posts

## Rails
### Models with associations
- [ ] Deck (title, description, user_id)
   * A deck belongs to a user
   * A deck has many flashcards.
- [ ] Card (deck_id, front, back, score)
  * A flashcard belongs to a deck.
    

### Controllers
- [ ] Api::DeckController (create, destroy, show, update, index, new)
- [ ] Api::FlashCardController (create, destroy, show, update)

### Views
- [ ] api/decks/index.json.jbuilder
- [ ] api/decks/\_deck.json.jbuilder
- [ ] api/decks/\_cards.json.jbuilder
- [ ] api/decks/\_card.json.builder

## Backbone
### Models
- [ ] Deck ( parses flashcards as cards)
- [ ] Card


### Collections
- [ ] Decks(used to make dashboard view)
- [ ] Cards

### Views
- [ ] StudyDeck(user_show page )
  * has two templates: users with decks, users without decks
- [ ] DeckForm(to create or edit decks)
- [ ] CardForm(to create or edit cards)
- [ ] DeckShow (Shows deck details and lists cards)
- [ ] CardsIndex( Subview of DeckShow)

## Gems/Libraries
* [jWYSISWYG][https://github.com/akzhan/jwysiwyg] to allow rich text editing in inputs 