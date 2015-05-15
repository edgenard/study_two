StudyTwo.Models.Card = Backbone.Model.extend({
  urlRoot: "api/cards",
  
  initialize: function (options) {
    this.deck_id = options.deck_id
  }
  
})