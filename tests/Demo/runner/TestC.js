import { Selector, fixture } from 'testcafe';

fixture`Test C`
.meta('Reg','Mobile')
    .skipJsErrors(true);

test
.meta('Env','E2E')
('Test C.1', async t => {
    console.log('Test C.1 - Demo')
}).page`https://demoqa.com/webtables`;

test('Test C.2', async t => {
    console.log('Test C.2')
}).page`https://demoqa.com/webtables`;

