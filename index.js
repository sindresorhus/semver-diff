'use strict';
const semver = require('semver');

module.exports = (versionA, versionB) => {
	if (semver.gt(versionA, versionB)) {
		return;
	}

	versionA = semver.parse(versionA);
	versionB = semver.parse(versionB);

	for (const key of Object.keys(versionA)) {
		if (key === 'major' || key === 'minor' || key === 'patch') {
			if (versionA[key] !== versionB[key]) {
				return key;
			}
		}

		if (key === 'prerelease' || key === 'build') {
			if (
				JSON.stringify(versionA[key]) !== JSON.stringify(versionB[key])
			) {
				return key;
			}
		}
	}
};
