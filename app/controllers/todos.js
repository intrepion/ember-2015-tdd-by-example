import Ember from 'ember';

export default Ember.Controller.extend({
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