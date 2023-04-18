import { Selector, fixture } from 'testcafe';

fixture('TestB')
.meta('Reg','Desktop')
    .skipJsErrors(true);

test
.meta('Env','SIT')
('Test B.1', async t => {
    console.log('Test B.1 - Demo')
}).page`https://demoqa.com/webtables`;

test('Test B.2', async t => {
    console.log('Test B.2')
}).page`https://demoqa.com/webtables`;

