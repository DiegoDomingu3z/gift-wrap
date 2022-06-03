import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
    let present = ProxyState.presents
    let template = ''
    present.forEach( g => template += g.Template)
    document.getElementById('presents').innerHTML = template
    
}


export class SandboxController{
    constructor(){
        console.log('sandbox controller is working');
        ProxyState.on('presents', _draw)
        this.getPresents()
        _draw()
    }


    getPresents(){
        try {
            sandboxService.getPresents()
            console.log('loaded presents');
        } catch (error) {
            console.error(error);
        Pop.toast(error.message, 'error')
        }
    }

    getUrl(id){
        let gif = ProxyState.gifts.find(g => g.id == id)
        console.log(gif);
        document.getElementById('url').value = gif.images.downsized.url
    }

    async postGift(){
        try {
            let tag = window.event.preventDefault()
            let url = window.event.preventDefault()
        
            await sandboxService.postGift(tag, url)
            console.log('posting gif');
        } catch (error) {
            console.log(error.message, 'error');
        Pop.toast(error.message, 'error')

        }
    }

   

}
