'use strict';

var utils = require('pouchdb-utils');

exports.purgeOnDelete = utils.toPromise(function (callback) {

    var db = this;
    db.changes({
        since: 'now',
        live: true,
        include_docs: true
    }).on('change', function (change) {
        if (change.deleted && typeof db.purge == 'function')
            db.purge(change.doc);

    }).on('error', function (err) {
        // handle errors
    });

  callback(null, 'hello');
});

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(exports);
}
