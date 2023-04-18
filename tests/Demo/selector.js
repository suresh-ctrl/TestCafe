import { Selector, fixture } from 'testcafe';

//parameterized function For ID
const elementWithID = Selector((id)=>
{
    return document.getElementById(id);
})

//Options.dependencies // To pass functions, var or obj to selector query

const persistentID = 'item-3';

const elementWithPersistentID = Selector(()=>
{
    return document.getElementById(persistentID);
},
{
    dependencies : {persistentID}
})

fixture`My fixture`
    .page`{
        https://www.toolsqa.com/
    }`
    .skipJsErrors(true);

test
.skip
('My test two', async t => {
//selector Query
const tabWebTables = Selector('#item-3').withExactText('Web Tables');
await t.click(tabWebTables)
.wait(2000);
const webtables = Selector('.main-header');
//GetText
const webTablesString = await webtables.textContent;
console.log("String is" + webTablesString);
//assertions
await t.expect("Web Tables").eql(webTablesString);
}).page`https://demoqa.com/elements`;

test.skip
('My test two', async t => {
//selector Query //#item-3
const tabWebTables = elementWithID('item-3').withExactText('Web Tables');
await t.click(tabWebTables)
.wait(2000);
const webtables = Selector('.main-header');
//GetText
const webTablesString = await webtables.textContent;
console.log("String is" + webTablesString);
//assertions
await t.expect("Web Tables").eql(webTablesString);
}).page`https://demoqa.com/elements`;

test
.skip
('My test two', async t => {
//selector Query //#item-3
const tabWebTables = elementWithPersistentID.withExactText('Web Tables');
await t.click(tabWebTables)
.wait(2000);
const webtables = Selector('.main-header');
//GetText
const webTablesString = await webtables.textContent;
console.log("String is" + webTablesString);
//assertions
await t.expect("Web Tables").eql(webTablesString);
}).page`https://demoqa.com/elements`;

//Using nth and Child
test
.skip
('My test two', async t => {
//selector Query //#item-3
const tabWebTables = Selector('.menu-list').nth(0).child(3);
await t.click(tabWebTables)
.wait(2000);
const webtables = Selector('.main-header');
//GetText
const webTablesString = await webtables.textContent;
console.log("String is" + webTablesString);
//assertions
await t.expect("Web Tables").eql(webTablesString);
}).page`https://demoqa.com/elements`;

//using withText (RegEx) and withAttribute
test
.skip
('My test two', async t => {
//selector Query //#item-3
const tabWebTables = Selector('.menu-list').nth(0).child(3).withText(/Web Elements/)
await t.click(tabWebTables)
.wait(2000)
const webtables = Selector('.main-header').withAttribute('class');
//GetText
const webTablesString = await webtables.textContent;
console.log("String is" + webTablesString);
//assertions
await t.expect("Web Tables").eql(webTablesString);
}).page`https://demoqa.com/elements`;

//using FilterVisible and FilterHidden // innerText
test
.skip
('My test two', async t => {
//selector Query //#item-3
const tabWebTables = await Selector('#verticalListContainer').child(0).filterVisible().innerText;

console.log("String is" + tabWebTables);
//assertions
await t.expect('Cras justo odio').eql(tabWebTables);
}).page`https://demoqa.com/selectable`;

//Count //exists
test
.skip
('My test two', async t => {
//selector Query //#item-3
const tabWebTables = Selector('.rct-collapse.rct-collapse-btn');
const elementExists = tabWebTables.exists;
await t.maximizeWindow()
.expect(elementExists).ok()
.click(tabWebTables)
.wait(3000);
const chkBox = Selector('.rct-checkbox');
const chkBoxCounter = await chkBox.count;
console.log(chkBoxCounter);
await t.click(chkBox.nth(chkBoxCounter - 1));
}).page`https://demoqa.com/checkbox`;

//Parent //chilc //sibling //next //prev
test
('My test two', async t => {
//selector Query //#item-3
const chkBoxParent = Selector('#item-1').nth(0).parent();
await t.maximizeWindow()
.click(chkBoxParent.child(1))
.wait(3000)
const webtables = Selector('.main-header').withAttribute('class');
//GetText
const webTablesString = await webtables.textContent;
console.log("String is" + webTablesString);
//assertions
await t.expect('Check Box').eql(webTablesString);

const prevSibling = Selector('#item-1').prevSibling();
await t.click(prevSibling)
.wait(3000)
const webtables1 = Selector('.main-header').withAttribute('class');
//GetText
const webTablesString1 = await webtables1.textContent;
console.log("String is" + webTablesString1);
//assertions
await t.expect('Text Box').eql(webTablesString1);

const nextSibling = Selector('#item-1').nextSibling();
await t.click(nextSibling)
.wait(3000)
const webtables2 = Selector('.main-header').withAttribute('class');
//GetText
const webTablesString2 = await webtables2.textContent;
console.log("String is" + webTablesString2);
//assertions
await t.expect('Radio Button').eql(webTablesString2);
}).page`https://demoqa.com/elements`;


