





export class Sandbox{
    constructor(data){
        this.tag = data.images.downsized.url
        this.id = data.id

    }


    get template(){
return `
<div class="col-3"></div>
<div>
<span>${this.tag}</span>
<span><img img-fluid src="${this.url}" alt=""></span>
</div>

`

    }
}