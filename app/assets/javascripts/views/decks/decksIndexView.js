StudyTwo.Views.DecksIndex = Backbone.View.extend({
  template: JST['decks/deckIndex'],
  tagName: "section",
  className: "studytwo-overview",
  
  initialize: function (options) {
    this.collection = options.collection;
    this.userId = options.userId;
    this.listenTo(this.collection, "sync add remove change", this.render);
  },
  
  
  render: function () {
    var content = this.template({
      decks: this.collection
    });
    
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click  .new-deck"     : "newDeck",
    "click  .delete-deck"  : "deleteDeck",
    "click  .edit-deck"    : "editDeck",
    "click  .just-close"   : "removeForm",
    "click  .add-card"     : "newCard"

  },
  
  newCard: function (event) {
    event.preventDefault();
    this.deckFormView && this.deckFormView.trigger("click .deck-done");
    var deckId = $(event.currentTarget).data("deck-id");
    var card = new StudyTwo.Models.Card();
    this.cardForm(card, deckId);
    
    
  },
  
  cardForm: function (card, deckId) {
    this.cardFormView = new StudyTwo.Views.CardForm({
      model: card,
      deckId: deckId,
      collection: this.collection,
    });
    this.deckFormView && this.deckFormView.remove();
    this.$el.find(".form-space").html(this.cardFormView.render().$el);
  },
  
  
  deckForm : function (deck) {
    this.deckFormView = new StudyTwo.Views.DeckForm({
      model: deck,
      collection: this.collection,
      userId: this.userId
    });
    
    this.$el.find(".form-space").html(this.deckFormView.render().$el);  
  },
  
  removeForm: function (event) {
    event.preventDefault();
    this.deckFormView.remove();
    this.cardFormView.remove();
    this.collection.trigger("sync")
  },
  
  newDeck: function (event) {
    event.preventDefault();
    var deck = new StudyTwo.Models.Deck();
    this.deckForm(deck);
  },
  
  editDeck: function (event) {
    event.preventDefault();
    var deck = this._getDeck(event);
    
    this.deckForm(deck);
    
  },
  

  
  deleteDeck: function (event) {
    event.preventDefault();
    if(!confirm("Are you sure?! Deletes are forever!")) return;
    var deck = this._getDeck(event);
    var collection = this.collection;
    deck.destroy({
      success: function (deck) {
        collection.remove(deck);
      },
      error: function (deck) {
        alert("Did not Work!!");
      }
    });
  },

  
  
  _getDeck: function (event) {
    var deckId = $(event.currentTarget).data("id");
    return this.collection.get(deckId);
    
  }
  
  
  
  
  
  
  
});