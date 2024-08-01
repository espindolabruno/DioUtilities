import consolePrompt from "prompt";
import { qrcodeSchema } from "../../models/qrcode.js";
import { handler } from "./handler.js";

export async function createQrcode (){

    const linkSchema = qrcodeSchema
    consolePrompt.start()
    consolePrompt.get(linkSchema, handler)
      
}