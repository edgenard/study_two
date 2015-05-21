StudyTwo.Views.DeckShow = Backbone.View.extend({
  template: JST['decks/deckShow'],
  initialize: function () {
    this.listenTo(this.model, "sync add remove change", this.render)
    this.listenTo(this.model.cards(), "sync add remove change", this.render)
  },
  
  tagName: "section",
  className: "deck-show",
  
  render: function () {
    var content = this.template({deck: this.model});
    this.$el.html(content);
    return this;
  },
  
})