StudyTwo.Views.DeckForm = Backbone.View.extend({
  template: JST['decks/deckForm'],
  
  tagName: "form",
  className: "form deck-form",
  
  initialize: function (options) {
    this.model = options.model;
    this.errors = false;
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function () {
    var content = this.template({
      deck: this.model,
      errors: this.errors
    });
    this.$el.html(content);
    return this;
  },
  

  
  
  
})