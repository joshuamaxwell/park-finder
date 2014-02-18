console.log(Backbone.VERSION);

var Playground = Backbone.Model.extend({

  likes: 0,

  dislikes: 0,

  like: function() {
    this.set({likes: ++this.likes});
  },

  dislike: function() {
    this.set({dislikes: ++this.dislikes});
  }

})

var aPlayground = new Playground({name: 'Rock Quarry', city: 'Camperdown'});

aPlayground.like();
console.log(aPlayground);

var PlaygroundView = Backbone.View.extend({

  className: 'playground-card',

  renderTemplate: _.template($('.playground-template').text()),

  initialize: function(){
    this.render();
    $('.playgrounds-list').prepend(this.el);
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    console.log("rendertemplate: ", this.renderTemplate(this.model));
    this.$el.html(this.renderTemplate(this.model));
  }
})

var playgroundCard = new PlaygroundView({model: aPlayground});