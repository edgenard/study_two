StudyTwo.Views.CardForm = Backbone.View.extend({
  template: JST['cards/cardForm'],
  tagName: "form",
  className: "form card-form",
  initialize: function (options) {
    this.deck = options.deck
    this.collection = options.collection
    this.listenTo(this.model, "sync", this.render);
    
  },
  
  render: function () {
    var content = this.template({card: this.model, deck: this.deck});
    this.$el.html(content);
    return this;
  },
  
  events: {
    "change #front-image": "frontImage",
    "change #back-image": "backImage"
  },
  
  frontImage: function (event) {
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      that._previewFront(reader.result);
      that.model.front_image = reader.result;
    };
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._previewFront("");
      delete that.model.front_image;
    }
    
  },
  
  backImage: function (event) {
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      that._previewBack(reader.result);
      that.model.back_image = reader.result;
      
    };
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._previewBack("");
      delete that.model.back_image;
    }
  },
  
  _previewFront: function (src) {
    if (src) {
      var previewImg = $("<img>");
      previewImg.attr("src", src).attr("id", "preview-front");
      $("#card_front img").remove();
      this.$("#card_front").append(previewImg);
    } else {
      $("#preview-front").remove();
    }
  },
  
  
  _previewBack: function (src) {
    if (src) {
      var previewImg = $("<img>");
      previewImg.attr("src", src).attr("id", "preview-back");
      $("#card_back img").remove();
      this.$("#card_back").append(previewImg);
    } else {
      $("#preview-back").remove();
    }
  }

  
})