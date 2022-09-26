import { QrClient, QrRequestBody } from "./qrSDK";

let new_QR = new QrClient('YOUR_TOKEN_IS_HERE')

//Object for receiving qr code
let qr: QrRequestBody = {
    frame_name: "no-frame",
    qr_code_text: "https://www.qr-code-generator.com/",
    image_format: "SVG",
    qr_code_logo: 'no-logo',
    marker_left_template: 'version1'
    
    
}

//Regular qr code generation
new_QR.createQR(qr).then(response => console.log(response))

