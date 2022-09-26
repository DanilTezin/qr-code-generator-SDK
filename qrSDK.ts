import fetch from 'cross-fetch';

export interface QrRequestBody {
    frame_name?: string
    qr_code_text?: string
    image_format?: string
    qr_code_logo?: string
}

export class QrClient{
    private accesstoken: string; 
    private urlQR: string;

    constructor(accesstoken: string){
        this.accesstoken = accesstoken
        this.checkToken(accesstoken)
        this.urlQR = `https://api.qr-code-generator.com/v1/create?access-token=${accesstoken}`
    }

    private checkToken(accesstoken: string){
        accesstoken ===  ''  && console.log('Token empty')           
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