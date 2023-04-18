import { ClientFunction, Selector } from "testcafe";
import loginPage from '../pages/loginPage'

const url = `https://the-internet.herokuapp.com/login`

const getLocation = ClientFunction(()=>
{
    return document.location.href.toString();
})

fixture `Login Page`
.page(url)

test.page(url)
(`Login Page`, async t => {
// await t.expect(url).contains(getLocation())
await t.expect(loginPage.submit.exists).ok();
})

test(`Valid details and Submit Login Page`, async t => {
    loginPage.SetUsername('tomsmith')
    loginPage.SetPassword('SuperSecretPassword!')
    loginPage.ClickSubmit()
    loginPage.CheckResults('You logged into a secure area!')
})

test(`Invalid details and Submit Login Page`, async t => {
    loginPage.SetUsername('test')
    loginPage.SetPassword('tpup!')
    loginPage.ClickSubmit()
    await t.wait(3000);
    loginPage.CheckResults(' Your username is invalid!')
})