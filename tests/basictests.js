var test = require('tape');
var basicSubleveler = require('../index');

test('Basic test', function basicTest(t) {
  t.plan(4);

  var db = basicSubleveler.setUpSubleveledDB({
    dbLocation: __dirname + '/test.db',
    sublevels: {
      meats: 'm',
      vegetables: 'v'
    }
  });

  t.ok(db, 'Creates a db object');
  t.equal(typeof db.meats, 'object', 'db has a meats level.');
  t.equal(typeof db.vegetables, 'object', 'db has a vegetables level.');

  // TODO: Test readAllValues.
  db.close(checkClose);

  function checkClose(error) {
    t.ok(!error, 'There is no error while closing the underlying db.');
  }
});
