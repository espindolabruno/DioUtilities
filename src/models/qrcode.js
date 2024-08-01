import chalk from "chalk"

export const qrcodeSchema = {
    properties: {
        linkSchema :{
            description: chalk.yellowBright(' write/paste a link to create a qrcode '),
            required: true
        },
        qrcodeTypeSchema :{
            description: chalk.whiteBright(' choose a type (1 - normal || 2 - terminal )'),
            pattern: /^[1-2]+$/,
            message: chalk.red('❌ Invalid input. Please enter a number between 1 and 2.'),
            required: true
        },
    }
}