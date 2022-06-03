import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftsService } from "../Services/GiftsService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){

    let gifts = ProxyState.gifts
    let template = ''
    gifts.forEach(g => template += Gift.ListTemplate(g))
    document.getElementById('gifts').innerHTML = template
}



export class GiftsController{
    constructor(){
     
        console.log('is controller working');
        this.getGift()
        ProxyState.on('gifts',_draw)
        _draw()

    }


    async getGift(){
        try {
            await giftsService.getGift()
            console.log('get gift');
        } catch (error) {
        Pop.toast(error)
        console.log(error.message, 'error');
        }
      
    }



    async search(){
        window.event.preventDefault()
        let input = window.event.target.search.value
        giftsService.search(input)
        this.getGift()
    }

}