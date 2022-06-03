





export class Gift{
    constructor(data){
        this.url = data.images.downsized.url
        this.tag = data.tag
        this.id = data.id
    }



static ListTemplate(gift){
    return `
    <div class="col-6"> 
    <img class="img-fluid my-2 selectable"
      src="${gift.images.downsized.url}" onclick="app.sandboxController.getUrl('${gift.id}')" alt="">
  </div>

    `
}

}