PouchDB Purge on Delete
=====

Requirements
----

[PouchDB adapter with purge function implemented](https://github.com/johnvmt/pouchdb-adapter-idb-purge)

Running
-------

    var db = new PouchDB('mydb', {adapter: 'idb'});
    db2.purgeOnDelete(); // Now any docs that are removed will be purged as well