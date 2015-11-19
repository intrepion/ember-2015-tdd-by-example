import { test } from 'qunit';
import moduleForAcceptance from 'ember-2015-tdd-by-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | assignment');

test('visiting /assignment', function(assert) {
  visit('/');

  andThen(function() {
    var unassigned = find('table.unassigned tr.cards');
    assert.equal(unassigned.length, 3);
  });
});
