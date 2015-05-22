StudyTwo.Views.StudyCard = Backbone.View.extend({
  template: JST['cards/studyCard'],
  tagName: "section",
  className: "study-card-view",
  
  
  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  },
  
  
  events: {
    "click .show-answer": "showBack",
  },
  
  showBack: function (event) {
    event.preventDefault();
    this.$(".card-back").removeClass("hide");
    this.$(".show-answer").addClass("hide");
    this.$(".answer-buttons").removeClass("hide");
  }
})
