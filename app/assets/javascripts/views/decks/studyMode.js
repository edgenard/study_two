StudyTwo.Views.StudyMode = Backbone.View.extend({
  template: JST['decks/studyMode'],
  tagName: "section",
  className: "study-mode",
  
  
  initialize: function () {
    this.listenTo(this.collection, "next", this.render)

  },
  
  render: function () {
    var content = this.template({cards: this.collection});
    this.$el.html(content);
    this.showCard(this.collection.shift());
    return this;
  },
  
  
  showCard: function (card) {
    this.cardView = new StudyTwo.Views.StudyCard({
      model: card
    });
    
    this.$(".card-view").html(this.cardView.render().$el);
  },
  
  
  events: {
    "click .wrong-answer"        : "wrongAnswer",
    "click .kinda-right-answer"  : "kindaRightAnswer",
    "click .totally-right"       : "totallyRight",
  },
  
  wrongAnswer: function (event) {
    event.preventDefault();
    var oldCardView = this.cardView;
    var card = oldCardView.model;
    card.set("score", 0)
    card.save({score: 0}, {
      success: function (card) {
        console.log("successfully saved card");
        console.log("card has score of", card.get("score"));    
      }
    });
    this.collection.push(card)
    this.collection.trigger("next");
  },
  
  kindaRightAnswer: function (event) {
    event.preventDefault();
    var oldCardView = this.cardView;
    var card = oldCardView.model;
    card.save({score: 1}, {
      success: function (card) {
        console.log("successfully saved card");
        console.log("card has score of", card.get("score"));
      },
    });
    if (this.collection.length > 0) {
      this.collection.trigger("next");
    } else {
      Backbone.history.navigate("", {trigger: true})
    }
    
  },
  
  totallyRight: function (event) {
    event.preventDefault();
    var oldCardView = this.cardView;
    var card = oldCardView.model;
    card.save({score: 2}, {
      success: function (card) {
        console.log("successfully saved card");
        console.log("card has score of", card.get("score"));
      },
    });
    if (this.collection.length > 0) {
      this.collection.trigger("next");
    } else {
      Backbone.history.navigate("", {trigger: true})
    }

  },
  

  
  
})