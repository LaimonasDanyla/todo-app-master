/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			//need to add priority false as well
			// so whne new todo item is created they will have also a priority false
			priority: false
		},

		//toggle the 'priority' sate of this todo item.
		togglePriority: function() {
			this.save({
				priority: !this.get('priority')
			});
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				//!this. means not (in this case not comleted)
				//check how.save and this.get works in backbonejs
				completed: !this.get('completed')
			});
		}
	});
})();
