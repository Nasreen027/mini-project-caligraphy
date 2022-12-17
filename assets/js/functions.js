function makeProductColumn(product = {}) {
    return ` <div class="col-md-4 col-sm-6 pd display">
    <div class="shadow-lg" style="width: 25rem;overflow:hidden">
<div class="zoom">
<a href=""><img src="${defaultImageUrl}${product.image}" class="card-img-top w-100" style="height:20rem" alt="..."></a>
</div>
<div class="card-body container-fluid">
<h5>${product.name}</h5>
</div>
</div>
</div>`
}



function makeProductGrid(title, products = [], length, buttonSelector, showButton=true) {
let gridHtml = `
<div class="container mt-5">
    <div class="top">
      <h2 class="right">${title}</h2>
      <div class="left">
      `

      if(showButton){
          gridHtml+=`<button id="btn-go-back-east" class="btn bt ${buttonSelector}">Show More/Less</button>`
        }


    gridHtml+=`</div>
    </div>
    <div class="row" id="estcard">
`



    const columns = products.map((item, index) => {
        if (length) {
            if ((index + 1) <= length) {
                return makeProductColumn(item)
            }
        }
        else {
            return makeProductColumn(item)
        }
    })

    gridHtml += columns.join("")


    gridHtml += `</div>
    </div>`

    return gridHtml
}
