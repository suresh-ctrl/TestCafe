import { Selector, fixture } from 'testcafe';

fixture`Test D`
.meta('Reg','Desktop')
    .skipJsErrors(true);

test
.meta('Env','E2E')
('Test D.1', async t => {
    console.log('Test D.1 - Demo')
}).page`https://demoqa.com/webtables`;

test('Test D.2', async t => {
    console.log('Test D.2')
}).page`https://demoqa.com/webtables`;

