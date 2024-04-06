import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    PKR: 1,
    LKR: 1.08,
    INR: 0.30,
    USD: 0.00036,
    SAR: 0.014,
    EUR: 0.0033,
    KWD: 0.0011,
    AED: 0.013,
    SGD: 0.0049,
    NZD: 0.0060,
    IDR: 57.25,
};
let input = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.italic.greenBright("ENTER CURRENCY YOU WANNA CONVERT "),
        choices: ["PKR", "LKR", "INR", "USD", "SAR", "EUR", "KWD", "AED", "SGD", "NZD", "IDR"],
    },
    {
        name: "to",
        type: "list",
        message: chalk.italic.whiteBright("IN WHICH CURRENCY YOU WANNA CONVERT"),
        choices: ["PKR", "LKR", "INR", "USD", "SAR", "EUR", "KWD", "AED", "SGD", "NZD", "IDR"],
    },
    {
        name: "amount",
        type: "number",
        message: chalk.italic.blueBright("ENTER AMOUNT YOU WANNA CONVERT"),
    },
]);
let fromCurrency = currency[input.from];
let toCurrency = currency[input.to];
let amount = input.amount;
let basedamount = amount / fromCurrency;
let convertedAmount = basedamount * toCurrency;
console.log(chalk.bold.yellow(convertedAmount.toFixed(2)));
