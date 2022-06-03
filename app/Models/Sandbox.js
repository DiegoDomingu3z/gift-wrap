





export class Sandbox{
    constructor(data){
        this.tag = data.tag
        this.url = data.url
        this.id = data.id

    }


    get Template(){
return `

<div class="col-4 p-5">
<div class=" p-5 bg-light elevation-4 text-center">
<span class="text-dark">${this.tag}</span>
<span><img class="img-fluid" src="${this.url}" alt=""></span>
</div>
</div>
`

    }
}