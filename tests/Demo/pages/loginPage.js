import { Selector, t } from "testcafe"

class LoginPage{

    constructor()
    {
        this.usename = Selector('#username')
        this.pwd = Selector('#password')
        this.submit = Selector('.radius')
        this.result = Selector('#flash')
    }

    async SetUsername(username)
    {
        await t.typeText(this.usename, username);
    }

    async SetPassword(pwd)
    {
        await t.typeText(this.pwd, pwd);
    }

    async ClickSubmit()
    {
        await t.click(this.submit);
    }

    async CheckResults(text)
    {
        await t.expect(this.result.innerText).contains(text);
        await t.wait(3000);
    }
}

export default new LoginPage()
