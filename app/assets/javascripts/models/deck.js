StudyTwo.Models.Deck = Backbone.Model.extend({
  urlRoot: "/api/decks",
  
  parse: function (payload) {
    if (payload.cards) {
      this.cards().set(payload.cards);
      delete payload.cards
    }
    if (payload.due_cards) {
      this.dueCards().set(payload.due_cards);
      delete payload.due_cards;
    }
    
    return payload;
  },
  
  cards: function () {
    if (!this._cards) {
      this._cards = new StudyTwo.Collections.Cards();
    }
    return this._cards;
  },
  
  dueCards: function () {
    if (!this._dueCards) {
      this._dueCards = new StudyTwo.Collections.Cards();
    }
    return this._dueCards; 
  },

  
  
  
})