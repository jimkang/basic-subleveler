basic-subleveler
================

Handles boilerplate setup for one-level-deep LevelDB [sublevel](https://github.com/dominictarr/level-sublevel) databases:

- Creates levels using the names and namespaces you provide.
- Gives you access to the `close` method on the db, so you can avoid unnecessary locking.
- Provides a "readAllValuesFromSublevel" method.


Installation
------------

    npm install basic-subleveler

Usage
-----

    var basicSubleveler = require('basic-subleveler');
    var db = basicSubleveler.setUpSubleveledDB({
      dbLocation: 'test.db',
      sublevels: {
        meats: 'm',
        vegetables: 'v'
      }
    });

    // Will return an object with `close` method and `meats` and `vegetables` sublevels. You can do stuff with them. Then:

    db.close(reportClosed);

    function reportClosed(error) {
      if (error) {
        console.log('Error while closing db.'')
        console.log(error);
      }
    }

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
