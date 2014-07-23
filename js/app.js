App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

var goodList = [ 'assets/good-1.jpg', 'assets/good-2.jpg', 'assets/good-3.jpg' ];
var badList = [ 'assets/bad-1.jpg', 'assets/bad-2.jpg', 'assets/bad-3.jpg' ];
var weirdList = [ 'assets/whacky-1.jpg', 'assets/whacky-2.gif' ];

App.IndexController = Ember.Controller.extend({
	imageUrl: null,

	pickImg: function(list) {
		var currentImageUrl = this.get('imageUrl');
		var extractedList = list.filter(function(imageUrl) { return imageUrl !== currentImageUrl; });
		if(extractedList.length > 0) {
			var randIdx = Math.floor(Math.random() * extractedList.length);
			this.set('imageUrl', extractedList[randIdx]);
		}
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
