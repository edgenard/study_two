StudyTwo.Models.Card = Backbone.Model.extend({
  urlRoot: "/api/cards",
  

  toJSON: function () {
    var json = {card: _.clone(this.attributes)};
    if (this.front_image) {
      json.card.front_image = this.front_image;
    } 
    if(this.back_image) {
      json.card.back_image = this.back_image;
    }
    
    return json;
  },


});