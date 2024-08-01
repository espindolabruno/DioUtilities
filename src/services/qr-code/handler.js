import qr from 'qrcode-terminal'

export async function handler (err, choose) {

    if(err) 
        return console.log('vagination error: ' + err)
    
    const isSmall = choose.qrcodeTypeSchema == 2

    qr.generate(choose.linkSchema, {small: isSmall}) 
}