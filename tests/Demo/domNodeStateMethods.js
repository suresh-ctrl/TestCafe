
import { Selector, fixture } from 'testcafe';

fixture`My fixture`
    .page`{
        https://www.toolsqa.com/
    }`
    .skipJsErrors(true);

    //Verify Checked state 
    //Make sure type=CheckBox => otherwise results will return "undefined"
test

('Verify CheckBox status', async t => {
//selector Query //#item-3
const chBox = Selector('.rct-checkbox');
const chBoxState = Selector('#tree-node-home');
const verifyChkBoxState = await chBoxState.checked
await t.expect(verifyChkBoxState).notOk()
//Using chai
// assert.isFalse(verifyChkBoxState, "[CheckBox is not checked]");
if(!verifyChkBoxState)
{
   await t.click(chBox)
   .wait(3000)
}
const verifyChkBoxState1 = await chBoxState.checked
console.log(verifyChkBoxState1)
await t.expect(verifyChkBoxState1).ok()
// assert.isTrue(verifyChkBoxState1, "[CheckBox is checked]");
}).page`https://demoqa.com/checkbox`;

//get ClassNames
test

('Get Classnames', async t => {
//selector Query //#item-3
const elementID = Selector('#tree-node');
const getClassNames = await elementID.classNames
console.log(getClassNames)
}).page`https://demoqa.com/checkbox`;

//innerText
test

('Get innertext', async t => {
//selector Query //#item-3
const elementID = Selector('.rct-title');
const getInnerTxt = await elementID.innerText
console.log(getInnerTxt)
}).page`https://demoqa.com/checkbox`;

//getStyle
test

('GetStyle', async t => {
//selector Query //#item-3
const elementName = Selector('.rct-node-icon');
const getColor = await elementName.getStyleProperty('color')
console.log(getColor)
}).page`https://demoqa.com/checkbox`;


//Visible => Should be displayed
test

('Visible', async t => {
//selector Query //#item-3
const elementName = Selector('.rct-title').nth(0).withText('Home');
const getVisibility = await elementName.visible
console.log(getVisibility)
await t.expect(getVisibility).ok()

const elementName1 = Selector('.rct-title').nth(1).withExactText('Desktop');
const getVisibilityCheck = await elementName1.visible
console.log(getVisibilityCheck)
await t.expect(getVisibilityCheck).notOk()
}).page`https://demoqa.com/checkbox`;
