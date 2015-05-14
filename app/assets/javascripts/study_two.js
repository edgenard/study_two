window.StudyTwo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var userDecks = new StudyTwo.Collections.Decks();
    new StudyTwo.Routers.Router({
      $rootEl: $("#app"),
      decks: userDecks,
    });
    Backbone.history.start();
  }
};


