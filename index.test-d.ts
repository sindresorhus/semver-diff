import {expectType} from 'tsd';
import semverDiff = require('.');

expectType<semverDiff.Result | undefined>(semverDiff('1.1.1', '1.1.2'));
