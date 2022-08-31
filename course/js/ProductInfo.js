let localString = localStorage.getItem("productInfo");
let LocalObj = JSON.parse(localString);
let logo = document.querySelector(".image_logo");

addInfo(LocalObj);
AddProduct();
AddProductFavorite();

logo.addEventListener("click", () => {
    window.location.href = "home.html";
});

function addInfo(Obj)
{
    let color_product = document.querySelector(".color");
    for(let key in Obj)
    {
        document.getElementById("#namePath").innerHTML = `${Obj[key].name}`;
        document.querySelector(".SelectedImage").src = `${Obj[key].img_product}`;
        for(let i = 0; i < Obj[key].color.length; i++)
        {
            let circle_color = document.createElement("div");
            circle_color.className = "circleColor";
            circle_color.style.backgroundColor = `${Obj[key].color[i]}`;
            color_product.appendChild(circle_color);
        }
        document.querySelector(".name").innerHTML = `${Obj[key].name}` + `${Obj[key].name_long}`;
        document.querySelector(".description").innerHTML = `${Obj[key].text}`;
        document.getElementById("nameCharacters1").innerHTML = `${Obj[key].name_long}`;
        document.getElementById("nameCharacters2").innerHTML = `${Obj[key].manufacturer}`;
        document.getElementById("nameCharacters3").innerHTML = `${Obj[key].compoud}`
        document.getElementById("nameCharacters4").innerHTML = `${Obj[key].name_long}`
        document.querySelector(".price").innerHTML = `${Obj[key].cost}` + " $";
    } 
}

function AddProductFavorite()
{
    let count = 0;
    if(document.querySelector(".AllFavoriteProduct")) document.querySelector(".AllFavoriteProduct").remove();
    let ObjLocStore = localStorage.getItem("favoriteObg");
    let favoriteProduct = JSON.parse(ObjLocStore);
    let modal_window = document.querySelector(".modal_window");
    let AllFavoriteProduct = document.createElement("div");
    let btnFavorive = document.querySelector(".countFavoriteProduct");
    AllFavoriteProduct.className = "AllFavoriteProduct";
    for(let key in favoriteProduct)
    {
        let conteinerFavoriteProduct = document.createElement("div");
        conteinerFavoriteProduct.className = "conteinerFavoriteProduct";
        conteinerFavoriteProduct.setAttribute("data-number", favoriteProduct[key].number.toString());

        let conteinerFavoriveImg = document.createElement("div");
        conteinerFavoriveImg.className = "conteinerFavoriveImg";

        let image_favorite = document.createElement("img");
        image_favorite.className = "image_favorite";
        image_favorite.src = `${favoriteProduct[key].img_product}`;

        let content_text_FavoriteProduct = document.createElement("div");
        content_text_FavoriteProduct.className = "content_text_FavoriteProduct";

        let content_text_f = document.createElement("p");
        content_text_f.className = "content_text";
        content_text_f.innerHTML = `${favoriteProduct[key].name}`;

        let content_text_s = document.createElement("p");
        content_text_s.className = "content_text";
        content_text_s.innerHTML = `${favoriteProduct[key].name_long}`;

        let color_FavoriteProduct = document.createElement("div");
        color_FavoriteProduct.className = "color_FavoriteProduct";

        let favoriteProduct_price = document.createElement("p");
        favoriteProduct_price.className = "favoriteProduct_price";
        favoriteProduct_price.innerHTML = `${favoriteProduct[key].cost}` + " $";

        let conteiner_btn_FavoriteProduct = document.createElement("div");
        conteiner_btn_FavoriteProduct.className = "conteiner_btn_FavoriteProduct";

        for(let i = 0; i < favoriteProduct[key].color.length; i++)
        {
            if(i < 4) {
                let circle_color = document.createElement("div");
                circle_color.className = "circle_color";
                circle_color.style.backgroundColor = `${favoriteProduct[key].color[i]}`;
                color_FavoriteProduct.appendChild(circle_color);
            }
            if(i > 4 && i + 1 === favoriteProduct[key].color.length) 
            {
                let circle_color = document.createElement("div");
                circle_color.className = "circle_color";
                circle_color.innerHTML ="+" + `${favoriteProduct[key].color.length - 4}`;
                color_FavoriteProduct.appendChild(circle_color);
            }
        }

        modal_window.appendChild(AllFavoriteProduct);

        AllFavoriteProduct.appendChild(conteinerFavoriteProduct);

        conteinerFavoriteProduct.appendChild(conteinerFavoriveImg);
        conteinerFavoriveImg.appendChild(image_favorite);

        conteinerFavoriteProduct.appendChild(content_text_FavoriteProduct);
        content_text_FavoriteProduct.appendChild(content_text_f);
        content_text_FavoriteProduct.appendChild(content_text_s);

        conteinerFavoriteProduct.appendChild(color_FavoriteProduct);

        conteinerFavoriteProduct.appendChild(favoriteProduct_price);

        conteinerFavoriteProduct.appendChild(conteiner_btn_FavoriteProduct);
        count++;

    }
    if(count == 0)
    {
        btnFavorive.style.visibility = "hidden";
    } 
    else 
    {
        btnFavorive.style.visibility = "visible";
        btnFavorive.innerHTML = `${count}`;
    }
}

function AddProduct()
{   
    if(document.querySelector(".AllFavoriteProduct")) document.querySelector(".AllFavoriteProduct").remove();
    let ObjLocStore = localStorage.getItem("favoriteObg");
    let AllProducts = document.querySelector(".AllProducts");
    let product = JSON.parse(ObjLocStore);
    if(!isEmptyObject(product)) 
    {
        let look = document.querySelector(".loockSame");
        let headCharacters = document.createElement("p");
        headCharacters.className = "subtitle";
        headCharacters.innerHTML = "Смотрите также";
        look.prepend(headCharacters);
    }

    for(let key in product)
    {
        let div_product = document.createElement("div");
        div_product.className = "div_product";

        let content_img = document.createElement("div");
        content_img.className = "content_img";
        let image_like = document.createElement("img");
        image_like.className = "image_like";
        let image_dot = document.createElement("img");
        image_dot.className = "image_dot";

        let content_product = document.createElement("div");
        content_product.className = "content_product";
        let image_product = document.createElement("img");
        image_product.className = "image_product";

        let content_text_product = document.createElement("div");
        content_text_product.className = "content_text_product";
        let content_text_f = document.createElement("p");
        content_text_f.className = "content_text";
        let content_text_s = document.createElement("p");
        content_text_s.className = "content_text";

        let color_product = document.createElement("div");
        color_product.className = "color_product";

        let cost_product = document.createElement("p");
        cost_product.className = "cost_product";

        let btn_product = document.createElement("button");
        btn_product.className = "btn_product";
        let image_kosh = document.createElement("img");
        image_kosh.className = "image_kosh";
        let btn_product_p = document.createElement("p");

        image_like.src = "../img/heard.svg";
        image_dot.src = "../img/dot.svg";
        image_product.src = `${product[key].img_product}`;
        image_kosh.src = "../img/koshik.svg";
        content_text_s.innerHTML = `${product[key].name}`;
        content_text_f.innerHTML = `${product[key].name_long}`;
        for(let i = 0; i < product[key].color.length; i++)
        {
            if(i < 4) {
                let circle_color = document.createElement("div");
                circle_color.className = "circle_color";
                circle_color.style.backgroundColor = `${product[key].color[i]}`;
                color_product.appendChild(circle_color);
            }
            if(i > 4 && i + 1 === product[key].color.length) 
            {
                let circle_color = document.createElement("div");
                circle_color.className = "circle_color";
                circle_color.innerHTML ="+" + `${product[key].color.length - 4}`;
                color_product.appendChild(circle_color);
            }
        }
        cost_product.innerHTML = `${product[key].cost}` + " $";
        btn_product_p.innerHTML = "В корзину";

        AllProducts.appendChild(div_product);

        div_product.appendChild(content_img);
        content_img.appendChild(image_like);
        content_img.appendChild(image_dot);

        div_product.appendChild(content_product);
        content_product.appendChild(image_product);

        div_product.appendChild(content_text_product);
        content_text_product.appendChild(content_text_s);
        content_text_product.appendChild(content_text_f);

        div_product.appendChild(color_product);

        div_product.appendChild(cost_product);

        div_product.appendChild(btn_product);
        btn_product.appendChild(image_kosh);
        btn_product.appendChild(btn_product_p);
    }
}