import Ember from 'ember';

export default Ember.Object.extend({
  status: function() {
    var status_code = this.get('status_code');
    return 1 === status_code ? 'Unassigned' : 'Assigned';
  }.property('status_code')
});
