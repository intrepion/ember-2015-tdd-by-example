import Ember from 'ember';

export default Ember.Controller.extend({
	model: function() {
		var first = {status_code: 1, project: 'first'};
		var second = {status_code: 1, project: 'second'};
		var third = {status_code: 1, project: 'third'};
		var last = {status_code: 2, project: 'last'};
		return [first, second, third, last];
	}.property(),
	unassigned: function() {
		return this.get('model').filter(function(model) {
			return 1 === model.status_code;
		});
	}.property(),
	assigned: function() {
		return this.get('model').filter(function(model) {
			return 2 === model.status_code;
		});
	}.property()
});