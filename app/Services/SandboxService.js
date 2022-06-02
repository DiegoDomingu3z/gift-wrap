import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";

const sandBoxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
    setTimeout: 5000
})

// let params = {
//     api_key: 'QqUaTFMrgpN3C1eL3H9eZ0FY4ez4yTJ1',
//     rating: 'g',
//     q: 'Look you did it'





class SandboxService {

    async getPresents() {
        const res = await sandBoxApi.get()
        console.log("im working", res.data);
        ProxyState.gifts = res.data.map(g => new Gift(g))
    }



}


export const sandboxService = new SandboxService()