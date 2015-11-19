import { test } from 'qunit';
import moduleForAcceptance from 'ember-2015-tdd-by-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | assignment');

test('visiting /assignment', function(assert) {
  visit('/');

  andThen(function() {
    var unassigned = find('.unassigned .cards');
    assert.equal(unassigned.length, 3);
    var project = find('.unassigned .cards:eq(0) .todo_project');
    assert.equal(project.text(), 'first');
  });
});
