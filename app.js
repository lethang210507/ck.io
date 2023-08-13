let products = {
    data: [
        { 
            name: " Model #1 ",
            price: "$5.98",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHDBJKJ3YnRWL_DV3AZNWugm7Cf3RW32pwQ&usqp=CAU",
           
        },

        {
            name: "Model #2 ", 
            
            price: "$11.25",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1sXo5fXZwq7AgN7q9k_nNY6DshHSzqbECBM7wm_d2_LpKQ4E" },

        {
            name: "Model #3",
            price: "$5",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFXh8owqlhgpUtDcj_QFQeqyX634wlCf8tg&usqp=CAU"
        },

        {
            name: "Model #4",
            price: "$14.99",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEDt56IctCfRb_sBQDk3E0ZgUKSIlyD-PD_zrcY042ZD-NJ4G6"
        },

        {
            name: " Model #5",
            price: "$16.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnTkjJhIi8fO7VD7v1K9VfA7MimXMxRZ7Mjw&usqp=CAU"
        },

        {
            name: "Model #6",
            price: "$16.99",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRknR3utSBTD99-yrjF-GilyzOBeeImraaoZtfM35li2XVpGSND"
        },

        {
            name: "12 Angry Men",
            price: "$14.99",
            image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/949dc08db84df94831890d04c8c8d1b9a58e786629d1e73eaceba892c88abfed._UY500_UX667_RI_TTW_.jpg"
        },

        {
            name: "schindler's list",
            price: "$14.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNsIL7FOL2PA86j0aIn_O9mcyMJnijUIEZg&usqp=CAU"
        },

        {
            name: "Fight Club",
            price: "$4.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlwhUYqxPn9RnZLInF6ZaGpj0xnY7aoiD6w&usqp=CAU"
        },

        {
            name: "Inception",
            price: "$9.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSM29-ZHlZE-d9aKRJWBsK6A5rw7fxuVsgKBOfg3URnfkzW1EWIcvjEuGWJtaljvgMG4Q&usqp=CAU"
        },

        {
            name: "The Matrix",
            price: "$14.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7EGKviZLraj0zIf6l-zbDLlzBBpNyk7DoQ&usqp=CAU"
        },

        {
            name: "Se7en",
            price: "$32.46",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv907mlawyyCht3PCYE9hwMluPzmX1ItsAdg&usqp=CAU"
        },

        {
            name: "It's a Wonderful Life",
            price: "$9.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnohnfn4cKWUGPX8hTAparJfpJCQLr4WdCw&usqp=CAU"
        },
        {
            name: "seven samurai",
            price: "$14.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ln1hi8zMRaY8oHleAFk0jJLfDOR8qUakGA&usqp=CAU"
        }, {
            name: "The Silence of the Lambs",
            price: "$4.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAdHZ3LJq35Q8u628SZcZdb-us5HPD8NxKQ&usqp=CAU"
        }, {
            name: "Interstellar",
            price: "$10,14",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGT_TB-IiH7bEDabeB1xDo1hwIfejIy1qxw&usqp=CAU"
        },
    ]
}

for (let key in products.data) {
    let items = products.data[key]

    // let card = document.createElement("div")
    // card.classList.add("card")

    // let imgContainer = document.createElement("div")
    // imgContainer.classList.add("image-container")

    // let image = document.createElement("img")
    // image.setAttribute("src", items.image)
    // imgContainer.appendChild(image)
    // card.appendChild(imgContainer)

    // let container = document.createElement("div")
    // container.classList.add("container")

    // let name = document.createElement("h5");
    // name.classList.add("product-name");
    // name.innerText = items.name.toUpperCase();
    // container.appendChild(name);

    // let price = document.createElement("h6");
    // price.innerHTML = "<b>Price:</b> " + items.price;
    // container.appendChild(price);

    // let btn = document.createElement("button")
    // btn.setAttribute("onclick", "addToCart()")
    // btn.innerHTML = "Thêm vào giỏ hàng"
    // container.appendChild(btn)
  
    // card.appendChild(container);
    
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="image-container">
        <img src="${items.image}">
        </div>
        <div class="container">
        <h5 class="product-name">${items.name}</h5>
        <h6><b>Price:</b>${items.price}</h6>
        <button onclick="addToCart(${key})">Add to watch</button>
        </div>`
    document.getElementById("products").appendChild(card);
}

for (let items of products.data){
    let product = JSON.parse(localStorage.product)
    product.push({
        name: items.name,
        Reviews: items.name , 
        images: items.image
    })

    localStorage.setItem("product", JSON.stringify(product))
}


const addToCart = ( key ) => {
    // get item has key param
    let item = products.data[key];

    let cart = localStorage.getItem("cart")
    cart = JSON.parse(cart);
    if  ( cart == null ) {
        cart = [
            {
                product: item,
                quantity: 1
            }
        ];
        localStorage.setItem("cart", JSON.stringify(cart))
    } else {
        for ( product_item of cart ) {
            if ( product_item.product.name == item.name ) {
                // Xử lý trùng item đã thêm vào giỏ hàng
                product_item.quantity += 1;
                localStorage.setItem("cart", JSON.stringify(cart))
                return;
            }
        }
        cart.push( {
            product: item,
            quantity: 1
        } );
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}
