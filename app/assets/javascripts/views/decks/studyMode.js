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
    var streakNow = Math.floor(card.get("streak") / 2);
    
    card.save({score: 0, streak: streakNow}, {
      success: function (card) {
        
      }
    });
    this.collection.push(card)
    this.collection.trigger("next");
  },
  
  kindaRightAnswer: function (event) {
    event.preventDefault();
    var oldCardView = this.cardView;
    var card = oldCardView.model;
    var streakNow = card.get("streak") + 1;
    
    card.save({score: 1, streak: streakNow}, {
      success: function (card) {
    
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
    var streakNow = card.get("streak") + 3;
  
    card.save({score: 2, streak: streakNow}, {
      success: function (card) {
         debugger;
      },
    });
    if (this.collection.length > 0) {
      this.collection.trigger("next");
    } else {
      Backbone.history.navigate("", {trigger: true})
    }

  },
  

  
  
})