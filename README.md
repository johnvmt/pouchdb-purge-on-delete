PouchDB Purge on Delete
=====

Requirements
----

[PouchDB adapter with purge function implemented](https://github.com/johnvmt/pouchdb-adapter-idb-purge)

Running
-------

```js
var db = new PouchDB('mydb', {adapter: 'idb-purge'});
db2.purgeOnDelete(); // Now any docs that are removed will be purged as well
```
