StudyTwo.Views.DeckOverview = Backbone.View.extend({
  template: JST['decks/deckOverview'],
  tagName: "section",
  className: "study-section",
  
  initialize: function (options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "sync add remove change", this.render);
  },
  
  render: function () {
    var content = this.template({ decks: this.collection});
    this.$el.html(content);
    return this;
  }
  
  
})