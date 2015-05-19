StudyTwo.Views.DecksIndex = Backbone.View.extend({
  template: JST['decks/deckIndex'],
  tagName: "section",
  className: "user-home",
  
  initialize: function (options) {
    this.collection = options.collection;
    this.userId = options.userId;
    this.deckOverview = new StudyTwo.Views.DeckOverview({
      collection: this.collection
    })
  
  },
  
  
  render: function () {
    var content = this.template({});
    
    this.$el.html(content);
    this.$el.prepend(this.deckOverview.render().$el)
    
    
    return this;
  },
  
  events: {
    "click  .new-deck"     : "newDeck",
    "click  .delete-deck"  : "deleteDeck",
    "click  .edit-deck"    : "editDeck",
    "click  .close-form"   : "removeForm",
    "click  .add-card"     : "newCard",
    "click .card-done"     : "saveCard",
    "click .deck-done"     : "saveDeck",
    "click .add-more"      : "saveCardAndMore",

  },
  
  removeForm: function (event) {
    event && event.preventDefault();
    this.deckFormView && this.deckFormView.remove();
    this.cardFormView && this.cardFormView.remove();
    this.render();
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

    this.$el.find(".form-space").html(this.deckFormView.render().$el);  
  },

  newCard: function (event) {
    event.preventDefault();
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
    this.deckFormView && this.deckFormView.saveDeck() && this.deckForView.remove();
    this.$el.find(".form-space").html(this.cardFormView.render().$el);
  },
  
  
  saveCard: function (event) {
    event.preventDefault();
    var cardData = this.$(".card-form").serializeJSON().card
    var collection = this.collection;
    cardData.deck_id = this.cardFormView.deck.id
    var that = this;
    this.cardFormView.model.save(cardData, {
      success: function (card) {
        that.removeForm();
        collection.fetch();
      },
      error: function (card) {
        console.log(card);
      }
    })
  },
  
  
  saveCardAndMore: function (event) {
    event && event.preventDefault();
    var oldCard = this.cardFormView
    
    this.deckFormView = null;
  
    var cardData = this.$(".card-form").serializeJSON().card
    var collection = this.collection;
    var that = this;
    cardData.deck_id = oldCard.deck.id
    oldCard.model.save(cardData, {
      success: function (card) {
        collection.fetch();
        console.log("successfuly saved");
      },
      error: function (card) {
        console.log("something went wrong");
      }
    });
    
    var deck = oldCard.deck
    var newCard = new StudyTwo.Models.Card();
    this.cardForm(newCard, deck)
    
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