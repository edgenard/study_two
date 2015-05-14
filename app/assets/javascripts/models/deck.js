StudyTwo.Models.Deck = Backbone.Model.extend({
  urlRoot: "/api/decks",
  
  parse: function (payload) {
    if (payload.cards) {
      this.cards().set(payload.cards);
      delete payload.cards
    }
    
    return payload;
  },
  
  cards: function () {
    if (!this._cards) {
      this._card = new StudyTwo.Collections.Cards();
    }
    return this._cards;
  }
  
})