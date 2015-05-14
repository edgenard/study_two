StudyTwo.Collections.Decks = Backbone.Collection.extend({
  url: "/api/decks",
  model: StudyTwo.Models.Deck,
  
  getOrFetch: function (id) {
    var deck = this.get(id);
    if (deck) {
      deck.fetch();
    } else {
      deck = new StudyTwo.Models.Deck({id: id});
      deck.fetch();
    }
    return deck;
  }
})