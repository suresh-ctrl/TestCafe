import { Selector, fixture } from 'testcafe';

fixture`Test A`
.meta('Reg','Mobile')
    .skipJsErrors(true);

test
.meta('Env','SIT')
('TestA.1', async t => {
console.log('TestA.1 - Demo')
}).page`https://demoqa.com/webtables`;

test('TestA.2', async t => {
    console.log('TestA.2')
}).page`https://demoqa.com/webtables`;

