import { ProxyState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";






export class GiftsController{
    constructor(){
     
        console.log('is controller working');
        this.getGift()

    }


    async getGift(){
        giftsService.getGift()
        console.log('get gift');
    }


}