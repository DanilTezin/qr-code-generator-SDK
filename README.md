# QR code generator SDK
##### SDK for generating and tracking qr codes https://qr-code-generator.com
##### Get your api key here https://app.qr-code-generator.com/api 

### Install
```
npm i qr-code-generator-sdk
```


### Example
```javascript
import { QrClient } from 'qr-code-generator-sdk'

let new_QR = new QrClient('YOUR_TOKEN_IS_HERE')

let qrParam = {
    frame_name: "no-frame",
    qr_code_text: "https://www.npmjs.com/package/qr-code-generator-sdk",
    image_format: "SVG",
    qr_code_logo: 'no-logo',
    marker_left_template: 'version1'
}

//Regular qr code generation
new_QR.createQR(qrParam).then(response => console.log(response))

```
### Result
![](https://i.ibb.co/XXWfg5q/svgviewer-png-output-1.png)



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
