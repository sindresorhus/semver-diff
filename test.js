'use strict';
var assert = require('assert');
var semverDiff = require('./');

it('should get the semver diff type', function () {
	assert.strictEqual(semverDiff('0.0.1', '1.0.0'), 'major');
	assert.strictEqual(semverDiff('0.0.1', '0.1.0'), 'minor');
	assert.strictEqual(semverDiff('0.0.1', '0.0.2'), 'patch');
	assert.strictEqual(semverDiff('0.0.1-foo', '0.0.1-foo.bar'), 'prerelease');
	assert.strictEqual(semverDiff('0.0.1', '0.0.1+foo.bar'), 'build');
	assert.strictEqual(semverDiff('0.0.1', '0.0.1'), null);
	assert.strictEqual(semverDiff('0.0.2', '0.0.1'), null);
});
