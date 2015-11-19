import { test } from 'qunit';
import moduleForAcceptance from 'ember-2015-tdd-by-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | assignment');

test('visiting /assignment', function(assert) {
  visit('/assignment');

  andThen(function() {
    assert.equal(currentURL(), '/assignment');
  });
});
