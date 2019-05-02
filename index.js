'use strict';
const semver = require('semver');

module.exports = (versionA, versionB) => {
	versionA = semver.parse(versionA);
	versionB = semver.parse(versionB);

	const cmpResult = semver.compareBuild(versionA, versionB);
	if (cmpResult >= 0) {
		return;
	}

	return semver.diff(versionA, versionB) || 'build';
};
