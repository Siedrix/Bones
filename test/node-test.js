var vows = require('vows'),
    assert = require('assert');

var Loki = {};
Loki.Bones = require('../lib/bones.js').Bones;
console.log(Loki);

vows.describe('Promise').addBatch({
	'Do I have bones' : {
        topic: new Loki.Bones(),

        'is bones': function (bones) {
            assert.equal (bones.isBones, true);
        }
    }
}).export(module);
