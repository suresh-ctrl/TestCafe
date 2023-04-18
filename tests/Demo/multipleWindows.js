import { Selector, fixture } from 'testcafe';

fixture`My fixture`
    .page`{
        https://www.toolsqa.com/
    }`
    .skipJsErrors(true);

    let url = '';
    let finalHolder ='';
test('My test one', async t => {

    const firstHolder = await t.getCurrentWindow()
    url = await t.eval(()=> document.documentURI)
    await t.expect('https://www.airindia.in/').eql(url)

    console.log('1st '+ url)
    //.fb-ic
    const ytSelector = Selector('.fb-ic').nth(3)
    await t.click(ytSelector)
    .wait(5000)

    url = await t.eval(()=> document.documentURI)
    await t.expect('https://www.youtube.com/channel/UCnfpyluc2VymxpxWpiL9Oaw').eql(url)

    const secHolder = await t.getCurrentWindow()
    console.log('child '+url)

//switchToParentWindow
    await t.switchToParentWindow()
    url = await t.eval(()=> document.documentURI)
    await t.expect('https://www.airindia.in/').eql(url)
    console.log('parent ' + url)
//openWindow
    await t.openWindow('https://www.youtube.com/')
    url = await t.eval(()=> document.documentURI)
    await t.expect('https://www.youtube.com/').eql(url)
    
    finalHolder = await t.getCurrentWindow()

    console.log('open new '+ url)
//switchToPreviousWindow
    await t.switchToPreviousWindow()

    url = await t.eval(()=> document.documentURI)
    await t.expect('https://www.airindia.in/').eql(url)
    console.log('previous ' + url)
//switchToWindow
    await t.switchToWindow(finalHolder)
    url = await t.eval(()=> document.documentURI)
    await t.expect('https://www.youtube.com/').eql(url)
    console.log('again Win '+ url)
//switchToMainWindow
    await t.switchToMainWindow()
    url = await t.eval(()=> document.documentURI)
    await t.expect('https://www.youtube.com/').eql(url)
    console.log('main ' + url)

}).page`https://www.airindia.in/`;
