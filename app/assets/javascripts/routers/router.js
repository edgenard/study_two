StudyTwo.Routers.Router = Backbone.Router.extend({
  
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.decks = options.decks;
    this.userId = options.$rootEl.data("user-id");
  },

  routes: {
    "":"index",

  },
  
  index: function () {

    this.decks.fetch();  
    var decksIndexView = new StudyTwo.Views.DecksIndex({
      collection: this.decks,
      userId: this.userId
    });  
    this._swapView(decksIndexView);
    
  },
  
  
  
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
  
})