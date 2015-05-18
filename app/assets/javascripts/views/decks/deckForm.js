StudyTwo.Views.DeckForm = Backbone.View.extend({
  template: JST['decks/deckForm'],
  
  tagName: "form",
  className: "form deck-form",
  
  initialize: function (options) {
    this.model = options.model;
    this.collection = options.collection;
    this.userId = options.userId;
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function () {
    var content = this.template({
      deck: this.model
    });
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click  .deck-done"     : "saveDeck",
  },
  
  saveDeck: function (event) {
    event.preventDefault();
    
    var deckData = $(".deck-form").serializeJSON().deck;

    this.model.get("user_id") || this.model.set("user_id", this.userId);
    
    var collection = this.collection;
    
    var form = this;
    
    this.model.save(deckData, {
      success: function (deck) {
        form.remove();
        collection.add(deck);
      },
      wait: true,
      error: function (deck, response) {
        alert(response.responseJSON.join());

      },
      
    });
    
  },
  
  
  
})