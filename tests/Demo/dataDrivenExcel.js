import { ClientFunction, Selector, fixture } from 'testcafe';
import xlsx from 'node-xlsx';

//Req variable
const excelFile = xlsx.parse('./data/testData.xlsx')
const excelSheet = excelFile.find(Sheets => Sheets.name == 'data')
const excelSheetData = excelSheet.data;

const header = excelSheetData.shift()
const dataSet = excelSheetData.map((row) => {

    const user = {}

    row.forEach((data, idx) => user[header[idx]] = data)

    return user
})

fixture`My fixture`
    .skipJsErrors(true);

dataSet.forEach(data =>{
    console.log(data);

    test
    (`My test one - ${data.ExpectedResult}`, async t => {

        //Declaration
        const usename = Selector('#username')
        const pwd = Selector('#password')
        const submit = Selector('.radius')

        //Action
        await t.typeText(usename, data.Username)
        .typeText(pwd, data.Password)
        .click(submit)
        .wait(3000)

        //Validation
        const text = await Selector('#flash').innerText
        console.log(text)
        text.includes(data.ExpectedResult)
        // await t.expect('https://the-internet.herokuapp.com/login').contains(getLocation)
    }).page`https://the-internet.herokuapp.com/login`;
    
})
