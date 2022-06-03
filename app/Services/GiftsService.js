import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";


const gifApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    setTimeout: 5000
})

let params = {
    api_key: 'QqUaTFMrgpN3C1eL3H9eZ0FY4ez4yTJ1',
    rating: 'pg',
    q: ''
}




class GiftsService {

    async getGift() {
        const res = await gifApi.get('search', { params })
        console.log("im working", res.data);
        ProxyState.gifts = res.data.data
        console.log('proxystate gifs',ProxyState.gifts);
    }


    search(input){
        params.q = input
    }


}





export const giftsService = new GiftsService()