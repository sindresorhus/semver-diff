import test from 'ava';
import semverDiff from './index.js';

test('main', t => {
	t.is(semverDiff('0.0.1', '1.0.0'), 'major');
	t.is(semverDiff('0.0.1', '0.1.0'), 'minor');
	t.is(semverDiff('0.0.1', '0.0.2'), 'patch');
	t.is(semverDiff('0.0.1-foo', '1.0.0'), 'premajor');
	t.is(semverDiff('0.0.1-foo', '0.1.0'), 'preminor');
	t.is(semverDiff('1.1.1-foo', '1.1.2'), 'prepatch');
	t.is(semverDiff('0.0.1-foo', '0.0.1-foo.bar'), 'prerelease');
	t.is(semverDiff('0.0.1', '0.0.1'), undefined);
	t.is(semverDiff('0.0.2', '0.0.1'), undefined);

	t.is(semverDiff('0.0.1', '0.0.1+foo.bar'), 'build');
	t.is(semverDiff('0.0.1+0', '0.0.1'), undefined);
	t.is(semverDiff('0.0.1+2', '0.0.1+2'), undefined);
	t.is(semverDiff('0.0.1+3', '0.0.1+2'), undefined);
	t.is(semverDiff('0.0.1+1', '0.0.1+2'), 'build');
	t.is(semverDiff('0.0.1+2', '0.0.1+2.0'), 'build');
	t.is(semverDiff('0.0.1+2.0', '0.0.1+2'), undefined);
	t.is(semverDiff('0.0.1+2.a', '0.0.1+2.0'), undefined);
	t.is(semverDiff('0.0.1+2.0', '0.0.1+2.a'), 'build');
});
