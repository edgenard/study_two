StudyTwo.Views.CardForm = Backbone.View.extend({
  template: JST['cards/cardForm'],
  tagName: "form",
  className: "card-form",
  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click .add-more": "addMore",
  },
  
  addMore: function (event) {
    event.preventDefault();
    console.log(event);
  }
  
})