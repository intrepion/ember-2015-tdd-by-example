import { module, test } from 'qunit';
import Todo from 'ember-2015-tdd-by-example/models/todo';

module('todo');

test('status_code of 1 is Unassigned', function(assert) {
  var subject = Todo.create({status_code: 1});
  assert.equal(subject.get('status'), 'Unassigned');
});