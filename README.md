# QR code generator SDK
##### SDK for generating and tracking qr codes https://qr-code-generator.com
##### Get your api key here https://app.qr-code-generator.com/api 

### Parameters 
| Parameter Name  |  Type | Default  |  Description |
| ------------ | ------------ | ------------ | ------------ |
| qr_code_text  | string  | Required  | What you like to encode e.g. https://www.yourdomain.com or Free Text   |
|  image_format |  string | SVG  | The output file format for your QR Code. There are different formats available. Possible values: JPG, PNG, SVG, EPS  |
|  qr_code_logo | string  | no-logo  |   |
|  marker_left_template | string  | version1
| marker_bottom_template |    
| marker_right_template   | 
| frame_name  |  string |   |   |


### Example
```javascript
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


```

#### Design Parameters Marker
###### type: string , Default: version1

- marker_left_template
- marker_right_template
- marker_bottom_template

##### Description
![](https://i.ibb.co/bbYQKBy/version-Pic.png)

#### Design Parameters qr_code_logo
###### type: string , Default:  no-logo
##### Description
1. ##### no-logo
2. #####  scan-me
3. ##### scan-me-square
