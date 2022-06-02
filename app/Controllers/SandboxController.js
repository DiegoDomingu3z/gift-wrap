import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";

function _draw(){
    let gift = ProxyState.gifts
    let template = ''
    gift.forEach( g => template += g.Template)
    document.getElementById('gifts').innerHTML = template
    
}


export class SandboxController{
    constructor(){
        console.log('sandbox controller is working');
        ProxyState.on('gifts', _draw)
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

   

}
