import { ClientFunction, Selector, fixture } from 'testcafe';

//Req variable
const dataSet = require('../../data/data.json')

//global var
const getLocation = ClientFunction(()=>
{
    return window.location.href.toString();
})

fixture`My fixture`
    .skipJsErrors(true);

dataSet.forEach(data =>{
    console.log(data);

    test
    (`My test one - ${data.expectedResult}`, async t => {

        //Declaration
        const usename = Selector('#username')
        const pwd = Selector('#password')
        const submit = Selector('.radius')

        //Action
        await t.typeText(usename, data.username)
        .typeText(pwd, data.password)
        .click(submit)
        .wait(3000)

        //Validation
        const text = await Selector('#flash').innerText
        await t.expect(text).contains(data.expectedResult)
        // await t.expect('https://the-internet.herokuapp.com/login').contains(getLocation)
    }).page`https://the-internet.herokuapp.com/login`;
    
})
