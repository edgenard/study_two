StudyTwo.Views.DecksIndex = Backbone.View.extend({
  template: JST['decks/deckIndex'],
  tagName: "section",
  className: "user-home",
  
  initialize: function (options) {
    this.collection = options.collection;
    this.userId = options.userId;
    this.deckOverview = new StudyTwo.Views.DeckOverview({
      collection: this.collection
    });
  
  },
  
  
  render: function () {
    var content = this.template({errors: this.errors});
    
    this.$el.html(content);
    this.$el.prepend(this.deckOverview.render().$el);
    
    
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
  
  
  saveDeck: function (event, callback) {
    event && event.preventDefault();
    var deckData = this.$(".deck-form").serializeJSON().deck;
  
    var deck;
    if (this.deckFormView) {
      deck = this.deckFormView.model;
    } else {
      deck = this.deckShowView.model;
        //Quick and dirty validation
        //TODO: Write better validation, need to check if blank
      if (deckData.title.length <= 1) return;
    }


    deck.set("user_id", this.userId);
    
    var collection = this.collection;
  
    var that = this;
    deck.save(deckData, {
      success: function (deck) {
        collection.add(deck);
        that.deckFormView && that.deckFormView.remove();
        callback && callback();
      },
      error: function (deck, response) {
        that.deckFormView.errors = response.responseJSON;
        that.deckFormView.render();
      },
      
    });
    
    
  },
  
  
  

  newCard: function (event) {
    event.preventDefault();
    var deck;
    if (this.deckFormView) {
      deck = this.deckFormView.model;
      this.saveDeck(false, function(){
        var card = new StudyTwo.Models.Card();
        this.cardForm(card, deck);
      }.bind(this));
    } else {
      deck = this.deckShowView.model;
      var card = new StudyTwo.Models.Card();
      this.cardForm(card, deck);
    }
    
    
      
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
    this.cardForm(card, deck);
    
    
  },
  
  saveCard: function (event) {
    event && event.preventDefault();
    var cardData = this._getCardFormData();
    var collection = this.collection;
    cardData.deck_id = this.cardFormView.deck.id;
    var card = this.cardFormView.model;
    var that = this;
    var deck = this.collection.getOrFetch(cardData.deck_id);
    if (this.deckShowView) {
      this.deckShowView.remove();
    }
    var showView = this.deckShowView = new StudyTwo.Views.DeckShow({model: deck});

    this.disableFormInputs(this.cardFormView.$el);
    card.save(cardData, {
      success: function (card) { 
        deck.cards().add(card);
        that.$el.find(".form-space").html(showView.render().$el);
        collection.fetch();
        that.cardFormView.remove();
      },
      error: function (card, response) {
        that.enableFormInputs(that.cardFormView.$el);
        that.cardFormView.errors = response.responseJSON;
        that.cardFormView.render();
      }
    });
  },
  
  disableFormInputs: function ($form) {
    $form.find("input").attr("disabled", "disabled");
    $form.find("button").attr("disabled", "disabled");
    $form.find("div").attr("contenteditable", "false");
  },
  
  enableFormInputs: function ($form) {
    $form.find("input").removeAttr("disabled");
    $form.find("button").removeAttr("disabled");
    $form.find("div").attr("contenteditable", "true");
  },
  
  
  saveCardAndMore: function (event) {
    event && event.preventDefault();
    var oldCard = this.cardFormView;
    
    this.deckFormView = null;
  
    var cardData = this._getCardFormData();
    
    var collection = this.collection;
    var that = this;
    cardData.deck_id = oldCard.deck.id;
    oldCard.model.save(cardData, {
      success: function (card) {  
        collection.fetch();
        var deck = oldCard.deck;
        oldCard.remove();
        var newCard = new StudyTwo.Models.Card();
        this.cardForm(newCard, deck);
      },
      error: function (card, response) {
        that.enableFormInputs(that.cardFormView.$el);
        that.cardFormView.errors = response.responseJSON;
        that.cardFormView.render();
      }
    });
    
    
  },
  
  _getCardFormData: function () {
    var formData = {};
    var value;
    $(".card-form").children("div[contenteditable]").each(function () {
      value =  this.textContent;
      if (this.id === "card_front") {
        formData["front"] = value;
      } else {
        formData["back"] = value;
      }
    });
    
    return formData;
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
    card.destroy({
      success: function (card) {
        deck.cards().remove(card);
        collection.fetch();
        that.deckShowView && that.$el.find(".form-space").html(showView.render().$el)
      }
    });
    
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