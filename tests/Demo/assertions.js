import { Selector, fixture } from 'testcafe';

fixture`My fixture`
    .skipJsErrors(true);

test('My test one', async t => {
const chBox = Selector('.custom-control-label').nth(1);
const chBoxState = Selector('.custom-control-input').nth(1);
const verifyChkBoxState = await chBoxState.checked
//Not ok
await t.expect(verifyChkBoxState).notOk()
if(!verifyChkBoxState)
{
   await t.click(chBox)
   .wait(3000)
}
const verifyChkBoxState1 = await chBoxState.checked
console.log(verifyChkBoxState1)
await t.expect(verifyChkBoxState1).ok()

//contains //not contains
const result = await t.expect(Selector('.text-success').innerText).contains('Impressive')
const result1 = await t.expect(Selector('.text-success').innerText).notContains('Yes')

//eql //notEql
const tabWebTables = await Selector('.text-success').filterVisible().innerText;

console.log("String is" + tabWebTables);
await t.expect('Impressive').eql(tabWebTables);
await t.expect('Yes').notEql(tabWebTables);
}).page`https://demoqa.com/radio-button`;
