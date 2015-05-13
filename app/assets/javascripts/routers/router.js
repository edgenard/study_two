StudyTwo.Routers.Router = Backbone.Router.extend({
  
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.decks = options.decks;
  },
  
  events: {
    "": index,
  },
  
  index: function () {
    this.decks.fetch();
    
    var decksIndexView = new StudyTwo.Views.DecksIndex({
      collection: this.collection
    })
    
  }
  
})