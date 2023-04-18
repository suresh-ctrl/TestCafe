import { Selector, fixture } from 'testcafe';
import { takeSnapshot } from 'testcafe-blink-diff';

fixture`My fixture`
    
    .skipJsErrors(true);

    test('My test one', async t => {

        takeSnapshot(t);
    
    }).page`https://www.google.com/`;

    let testName = ''

test('My test two', async t => {

    const locator = Selector('#APjFqb').withAttribute('type', 'search')
    await t.typeText(locator, 'Kind')
    .pressKey('enter')
    .wait(5000);

    testName = t.testRun.test.name;

    await takeSnapshot(t);

}).page`https://www.google.com/`;
