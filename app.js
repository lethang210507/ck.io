let products = {
    data: [
        { 
            name: " Model #1 ",
            price: "5 materials",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHDBJKJ3YnRWL_DV3AZNWugm7Cf3RW32pwQ&usqp=CAU",
           
        },

        {
            name: "Model #2 ", 
            
            price: "5 materials",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1sXo5fXZwq7AgN7q9k_nNY6DshHSzqbECBM7wm_d2_LpKQ4E" },

        {
            name: "Model #3",
            price: "4 materials",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFXh8owqlhgpUtDcj_QFQeqyX634wlCf8tg&usqp=CAU"
        },

        {
            name: "Model #4",
            price: "5 materials",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEDt56IctCfRb_sBQDk3E0ZgUKSIlyD-PD_zrcY042ZD-NJ4G6"
        },

        {
            name: " Model #5",
            price: "6 materials",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnTkjJhIi8fO7VD7v1K9VfA7MimXMxRZ7Mjw&usqp=CAU"
        },

        {
            name: "Model #6",
            price: "4 materials",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRknR3utSBTD99-yrjF-GilyzOBeeImraaoZtfM35li2XVpGSND"
        },

        {
            name: "Model #7",
            price: "5 materials",
            image: "https://scontent.subi.vn/cmsmedia/long-den-vay-ca-dep-mat-va-doc-dao-1e854b9be2162d324e95baaeb255ff38.jpg"
        },

        {
            name: "Model #8",
            price: "6 materials",
            image: "https://lamthucong.com/wp-content/uploads/2019/08/cach_gap_den_long_trung_thu_bang_giay_chua_bao_gio_de_hon_7.jpg"
        },

        {
            name: "Model #9",
            price: "5 materials",
            image: "https://cdn.tgdd.vn//News/0//cach-lam-long-den-bang-chai-nhua-03-845x600.jpg"
        },

        {
            name: "Model #10",
            price: "6 materials",
            image: "https://cdn.tgdd.vn//News/0//cach-lam-long-den-keo-quan-02-845x600.jpg"
        },

        {
            name: "Model #11",
            price: "7 materials",
            image: "https://cdn.tgdd.vn//News/0//cach-lam-long-den-bang-ong-hut-845x600.jpg"
        },

        {
            name: "Model #12",
            price: "5 materials",
            image: "https://www.wikihow.com/images_en/thumb/2/2e/Make-a-Paper-Lantern-Step-15-Version-6.jpg/550px-nowatermark-Make-a-Paper-Lantern-Step-15-Version-6.jpg.webp"
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
