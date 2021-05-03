import {expectType} from 'tsd';
import semverDiff, {Difference} from './index.js';

expectType<Difference | undefined>(semverDiff('1.1.1', '1.1.2'));
