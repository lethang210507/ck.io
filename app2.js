fetch(`https://testapi.io/api/trietphan3103/namThangAPIJSI`)
    .then(response => response.json())
    .then((data) => {

        console.log(data)

        let products = data.data   
        for (let key in products) {

            let items = products[key]

            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<div class="image-container">
                        <img src="${items.image}">
                        </div>
                        <div class="container">
                        <a href="${( key % 2 == 0 ) ? './detail.html' : './detail2.html' }" class="product-name">${items.name}</a>
                       
                        <h6><b>Price:</b>${items.price}</h6>
                        <button onclick="addToCart(${key})">Add to cart</button>
                        </div>`
            let productslist = document.getElementById("products")
            if (productslist) {
                document.getElementById("products").appendChild(card);
            }



        }


        for (let i in products) {
            if (localStorage.product) {
                let product = JSON.parse(localStorage.product)
                product.push({
                    name: items.name,
                    price: items.price,
                    content: items.content,
                    images: items.image
                })

                localStorage.setItem("product", JSON.stringify(product))
            }

        }
    })