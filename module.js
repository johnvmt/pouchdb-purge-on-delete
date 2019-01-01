'use strict';

exports.purgeOnDelete = function() {
	const db = this;

	if(typeof db.purge !== 'function')
		throw new Error('purge function does not exist');
	else {
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
	}
};

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.PouchDB) {
	window.PouchDB.plugin(exports);
}
