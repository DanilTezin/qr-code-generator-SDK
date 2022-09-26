import fetch from 'cross-fetch';


type QrCodeLogo = 'no-logo' | 'scan-me' | 'scan-me-square'



type VersionTemplate=
      'version1' | 'version2' 
    | 'version3' | 'version4' 
    | 'version5' | 'version6' 
    | 'version7' | 'version8' 
    | 'version9' | 'version10'
    | 'version11' | 'version11'
    | 'version12' | 'version13'
    | 'version14' | 'version15'| 'version16'


export interface QrRequestBody {
    frame_name?: string
    qr_code_text?: string
    image_format?: string
    qr_code_logo: QrCodeLogo

    marker_left_template?: VersionTemplate
    marker_right_template?: VersionTemplate
    marker_bottom_template?: VersionTemplate
}



export class QrClient{

    private accesstoken: string; 
    private urlQR: string;

    constructor(accesstoken: string){
        this.accesstoken = accesstoken
        this.urlQR = `https://api.qr-code-generator.com/v1/create?access-token=${accesstoken}`
    }


    public async createQR(config: QrRequestBody){
        try {
            return fetch(this.urlQR, 
                {
                    headers: {'Content-Type': 'application/json',},
                    method: "POST",
                    body: JSON.stringify(config),
                }
            ).then(response=> response.text())
        }

        catch (error) {console.log(error)} 

    }

}