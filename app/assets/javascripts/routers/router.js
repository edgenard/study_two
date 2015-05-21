StudyTwo.Routers.Router = Backbone.Router.extend({
  
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.decks = options.decks;
    this.userId = options.$rootEl.data("user-id");
  },

  routes: {
    "":"index",
    "study/:id": "studyMode",

  },
  
  index: function () {

    this.decks.fetch();  
    var decksIndexView = new StudyTwo.Views.DecksIndex({
      collection: this.decks,
      userId: this.userId
    });  
    this._swapView(decksIndexView);
    
  },
  
  studyMode: function (id) {
    var deck = this.decks.getOrFetch(id);
    var studyView = new StudyTwo.Views.StudyMode({
      collection: deck.dueCards()
    });
    
    this._swapView(studyView);
  },
  
  
  
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
  
})