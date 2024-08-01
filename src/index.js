import consolePrompt from "prompt";
import { promptSchema } from "./models/prompt.js";
import { createQrcode } from "./services/qr-code/qrcode-generator.js";
import { createPassword } from "./services/passwords/password-creatos.js";

(function main() {
    consolePrompt.get(promptSchema, async (err, choose) => {

    if (choose.mainPrompt == 1)
        await createQrcode()
    
    if(choose.mainPrompt == 2)
        await createPassword()

    })
})()