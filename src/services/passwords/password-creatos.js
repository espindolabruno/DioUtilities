import chalk from "chalk";
import { passwordHandler } from "./handler.js";

export async function createPassword(){
    console.log(chalk.greenBright('generating password...'));
    passwordHandler()
}