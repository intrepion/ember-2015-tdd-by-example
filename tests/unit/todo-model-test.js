import { module, test } from 'qunit';
import Todo from '../../models/todo';

module('todo');

test('status_code of 1 is Unassigned', function(assert) {
  var subject = Todo.create({status_code: 1});
  assert.equal(subject.get('status'), 'Unassigned');
  subject.set('status_code', 2);
  assert.equal(subject.get('status'), 'Assigned');
});

test('status_code of 2 is Assigned', function(assert) {
  var subject = Todo.create({status_code: 2});
  assert.equal(subject.get('status'), 'Assigned');
});
