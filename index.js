// https://github.com/umdjs/umd/blob/master/returnExports.js
// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['semver'], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('semver'));
	} else {
		// Browser globals (root is window)
		root.returnExports = factory(root.semver);
	}
}(this, function (semver) {

	'use strict';

	return function (a, b) {
		if (semver.gt(a, b)) {
			return null;
		}

		a = semver.parse(a);
		b = semver.parse(b);

		for (var key in a) {
			if (key === 'major' || key === 'minor' || key === 'patch') {
				if (a[key] !== b[key]) {
					return key;
				}
			}

			if (key === 'prerelease' || key === 'build') {
				if (JSON.stringify(a[key]) !== JSON.stringify(b[key])) {
					return key;
				}
			}
		}

		return null;
	};

}));
