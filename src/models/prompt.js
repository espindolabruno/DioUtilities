import chalk from "chalk"

export const promptSchema = {
    name: 'mainPrompt',
    description: chalk.yellowBright('💠 choose the tool (1 - QR code gerenator || 2 -  Password gerenator)'),
    pattern: /^[1-2]+$/,
    message: chalk.red('❌ Invalid input. Please enter a number between 1 and 2.'),
    required: true,
}