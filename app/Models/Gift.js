





export class Gift{
    constructor(data){
        this.tag = data.tag
        this.url = data.url
    }



get Template(){
    return `
    <div class="col-3">
    <div>
    <span>${this.tag}</span>
    <span><img img-fluid src="${this.url}" alt=""></span>
    </div>
    </div>

    `
}

}