StudyTwo.Collections.Cards = Backbone.Collection.extend({
  url: "api/cards",
  model: StudyTwo.Models.Card,
  
  getOrFetch: function (id) {
    var card = this.get(id);
    if (card) {
      card.fetch();
    } else {
      card = new StudyTwo.Models.Card({id: id});
      card.fetch();
    }
    
    return card;
  }
})