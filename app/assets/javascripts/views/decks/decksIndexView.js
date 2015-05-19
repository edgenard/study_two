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
    "click  .new-deck"        : "newDeck",
    "click  .delete-deck"     : "deleteDeck",
    "click  .edit-deck"       : "editDeck",
    "click  .close-form"      : "removeForm",
    "click  .add-card"        : "newCard",
    "click .card-done"        : "saveCard",
    "click .deck-done"        : "saveDeck",
    "click .add-more"         : "saveCardAndMore",
    "blur  .deck-title"       : "saveDeck",
    "blur  .deck-description" : "saveDeck",
    "click  .edit-card"       : "editCard",
    "click .delete-card"      : "deleteCard",

  },
  
  removeForm: function (event) {
    event && event.preventDefault();
    this.deckFormView && this.deckFormView.remove();
    this.cardFormView && this.cardFormView.remove();
    this.deckShowView && this.deckShowView.remove();
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
    
    this.deckShow(deck);
    
  },
  
  deckShow: function (deck) {
    this.deckShowView = new StudyTwo.Views.DeckShow({ model: deck});
    this.$el.find(".form-space").html(this.deckShowView.render().$el)
  },
  
  deckForm : function (deck) {
    this.deckFormView = new StudyTwo.Views.DeckForm({
      model: deck,
      collection: this.collection,
      userId: this.userId
    });

    this.$el.find(".form-space").html(this.deckFormView.render().$el);  
  },
  
  
  saveDeck: function (event) {
    event && event.preventDefault();
    var deckData = this.$(".deck-form").serializeJSON().deck;
  
    var deck;
    if (this.deckFormView) {
      deck = this.deckFormView.model;
    } else {
      deck = this.deckShowView.model;
    }
    deck.set("user_id", this.userId)
    
    var collection = this.collection;
  
    
    deck.save(deckData, {
      success: function (deck) {
        console.log("successfully saved deck");
            collection.add(deck);
      },
      error: function (deck, response) {
        alert(response.responseJSON.join());
  
      },
      
    });
    
    this.deckFormView && this.deckFormView.remove();
  },
  
  
  

  newCard: function (event) {
    event.preventDefault();
    var deck;
    if (this.deckFormView) {
      deck = this.deckFormView.model;
    } else {
      deck = this.deckShowView.model;
    }
    
    var card = new StudyTwo.Models.Card();
    this.cardForm(card, deck);
      
  },
  cardForm: function (card, deck) {
    this.cardFormView = new StudyTwo.Views.CardForm({
      model: card,
      deck: deck,
      collection: this.collection,
    });
    this.deckFormView && this.saveDeck();
    
    this.$el.find(".form-space").html(this.cardFormView.render().$el);
  },
  
  editCard: function (event) {
    event && event.preventDefault();
    
    var cardAndDeck = this._getCardAndDeck(event);
    var card = cardAndDeck[0];
    var deck = cardAndDeck[1];
    console.log(card, deck);
    this.cardForm(card, deck);
    
    
  },
  
  saveCard: function (event) {
    event && event.preventDefault();
    var cardData = this.$(".card-form").serializeJSON().card
    var collection = this.collection;
    cardData.deck_id = this.cardFormView.deck.id;
    var card = this.cardFormView.model;
    var that = this;
    var showView = this.deckShowView;
    var deck = showView.model
    card.save(cardData, {
      success: function (card) { 
        showView && deck.cards().add(card);
        showView && that.$el.find(".form-space").html(showView.render().$el)
        collection.fetch();
        that.cardFormView.remove();
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
    oldCard.remove();
    var newCard = new StudyTwo.Models.Card();
    this.cardForm(newCard, deck)
    
  },
  
  deleteDeck: function (event) {
    event && event.preventDefault();
    if(!confirm("Are you sure?! Deletes are forever!")) return;
    
    var deck = this._getDeck(event);
    var collection = this.collection;
    var that = this;
    deck.destroy({
      success: function (deck) {
        collection.remove(deck);
        that.removeForm();
      },
      error: function (deck) {
        alert("Did not Work!!");
      }
    });
  },
  
  deleteCard: function (event) {
    event && event.preventDefault();
    if(!confirm("Are you sure?! Deletes are forever!")) return;
    var cardAndDeck = this._getCardAndDeck(event);
    var card = cardAndDeck[0];
    var deck = cardAndDeck[1];
    var collection = this.collection;
    var that = this;
    var showView = this.deckShowView
    card.destroy({
      success: function (card) {
        deck.cards().remove(card);
        collection.fetch();
        showView && that.$el.find(".form-space").html(showView.render().$el)
      }
    })
    
  },

  
  
  _getDeck: function (event) {
    var deckId = $(event.currentTarget).data("deck-id");
    return this.collection.get(deckId); //getOrFetch ??
    
  },
  
  
  _getCardAndDeck: function (event) {
    var cardId = $(event.currentTarget).data("card-id");
    var deck = this.deckShowView.model;
    var card = deck.cards().get(cardId);
    return [card, deck];
  }
  
  
  
  
  
  
  
});