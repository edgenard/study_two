StudyTwo.Views.CardForm = Backbone.View.extend({
  template: JST['cards/cardForm'],
  tagName: "form",
  className: "form card-form",
  initialize: function (options) {
    this.deckId = options.deckId
    this.collection = options.collection
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function () {
    var content = this.template({card: this.model, deckId: this.deckId});
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click .add-more": "addMore",
    "click .card-done": "saveCard",
  },
  
  addMore: function (event) {
    event.preventDefault();
    console.log(event);
  },
  
  saveCard: function (event) {
    event.preventDefault();
    var cardData = this.$el.serializeJSON();
    var cardForm = this;
    var collection = this.collection;
    var deckId = this.deckId
    this.model.save(cardData, {
      success: function (card) {
        collection.fetch();
        Backbone.history.navigate("", {trigger: true});
      }
    })
  }
  
})