StudyTwo.Views.DecksIndex = Backbone.View.extend({
  template: JST['decks/deckIndex'],
  tagName: "section",
  className: "user-home",
  
  initialize: function (options) {
    this.collection = options.collection;
    this.userId = options.userId;
    this.listenTo(this.collection, "sync add remove change", this.render);
    this.$formSpace = this.$el.find(".form-space");
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
    "click  .close-form"   : "removeForm",
    "click  .add-card"     : "newCard",
    "click .deck-done"     : "saveDeck",

  },
  
  removeForm: function (event) {
    event.preventDefault();
    this.deckFormView && this.deckFormView.remove();
    this.cardFormView && this.cardFormView.remove();
    this.collection.fetch();
  },
  
  newDeck: function (event) {
    event.preventDefault();
    this.render();
    var deck = new StudyTwo.Models.Deck();
    this.deckForm(deck);
  },
  
  editDeck: function (event) {
    event.preventDefault();
    var deck = this._getDeck(event);
    
    this.deckForm(deck);
    
  },
  
  deckForm : function (deck) {
    this.deckFormView = new StudyTwo.Views.DeckForm({
      model: deck,
      collection: this.collection,
      userId: this.userId
    });
    debugger;
    this.$formSpace.html(this.deckFormView.render().$el);  
  },

  newCard: function (event) {
    event.preventDefault();
    this.deckFormView && this.deckFormView.trigger("click .deck-done");
    var deck = this.deckFormView.model;
    var card = new StudyTwo.Models.Card();
    this.cardForm(card, deck);
      
  },
  cardForm: function (card, deck) {
    this.cardFormView = new StudyTwo.Views.CardForm({
      model: card,
      deck: deck,
      collection: this.collection,
    });
    this.deckFormView && this.deckFormView.remove();
    this.$formSpace.html(this.cardFormView.render().$el);
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
    return this.collection.get(deckId); //getOrFetch ??
    
  }
  
  
  
  
  
  
  
});