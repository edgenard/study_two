StudyTwo.Views.CardForm = Backbone.View.extend({
  template: JST['cards/cardForm'],
  tagName: "form",
  className: "form card-form",
  initialize: function (options) {
    this.deck = options.deck
    this.collection = options.collection
    this.listenTo(this.model, "sync", this.render);
    
  },
  
  render: function () {
    var content = this.template({card: this.model, deck: this.deck});
    this.$el.html(content);
    return this;
  },
  

  
})