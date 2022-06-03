import { ProxyState } from "../AppState.js";
import { Sandbox } from "../Models/Sandbox.js";

const sandBoxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
    setTimeout: 5000
})





class SandboxService {

    async getPresents() {
        const res = await sandBoxApi.get()
        console.log("presents is working in service", res.data);
        ProxyState.presents = res.data.map(g => new Sandbox(g))
    }


    async postGift(tag, url){
        let data = {
            url: url,
            tag: tag
          }
          let submission = new Sandbox(data)
          const res = await sandBoxApi.post('', submission)
          console.log('postGift', res.data);
    }



}


export const sandboxService = new SandboxService()