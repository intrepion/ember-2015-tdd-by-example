import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    assign: function(todo) {
      todo.set('status_code', 2);
    }
  },
  unassigned: function() {
    return this.get('model').filter(function(model) {
      return 1 === model.status_code;
    });
  }.property('model.@each.status_code'),
  assigned: function() {
    return this.get('model').filter(function(model) {
      return 2 === model.status_code;
    });
  }.property('model.@each.status_code')
});