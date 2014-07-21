App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

var goodList = [ 'assets/good-1.jpg', 'assets/good-2.jpg', 'assets/good-3.jpg' ];
var badList = [ 'assets/bad-1.jpg', 'assets/bad-2.jpg' ];
var weirdList = [ 'assets/whacky-1.jpg' ];

App.IndexController = Ember.Controller.extend({
	imageUrl: null,

	pickImg: function(list) {
		var randIdx = Math.floor(Math.random() * list.length);
		this.set('imageUrl', list[randIdx]);
	},

	actions: {
		good: function() {
			this.pickImg(goodList);
		},
      	bad: function() {
      		this.pickImg(badList);
      	},
      	weird: function() {
      		this.pickImg(weirdList);
      	}
	}
});
