import { Selector, fixture } from 'testcafe';

fixture`My fixture`
    .page`{
        https://www.toolsqa.com/
    }`
    .skipJsErrors(true);

test('My test one', async t => {

}).page`https://demoqa.com/webtables`;
