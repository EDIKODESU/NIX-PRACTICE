let like = document.querySelectorAll(".image_like");
let btnFavorive = document.querySelector(".countFavoriteProduct");
let count_like = 0;
let favoriteObj = {};
AddProduct();
for(let i = 0; i < like.length; i++)
{
    like[i].addEventListener("click", () => {
        let indexObj = like[i].parentElement.parentElement.dataset.startposition;
        if(like[i].classList.contains("active")) 
        {
            like[i].src = "../img/like.svg";
            like[i].classList.remove("active");
            count_like--;
            delete favoriteObj[indexObj];
        } 
        else 
        {
            like[i].src = "../img/heard.svg";
            like[i].classList.add("active");
            count_like++;
            favoriteObj[indexObj] = info_product[indexObj];
        }
        PrintCountLike(count_like);
        localStorage.setItem("favoriteObg", JSON.stringify(favoriteObj));
        AddProduct();
    });
}
let nextPage = document.querySelectorAll(".content_product");
for(let i = 0; i < nextPage.length; i++)
{
    let indexObj = like[i].parentElement.parentElement.dataset.startposition;
    nextPage[i].addEventListener("click", () => {
        let nextPageObg = {};
        nextPageObg[indexObj] = info_product[indexObj];
        localStorage.setItem("productInfo", JSON.stringify(nextPageObg));
        window.location.href = "info_product.html";
    });
}

let deteleFavorite = document.querySelector(".modal_window");
deteleFavorite.addEventListener("click", (e) => {
    if(e.target && e.target.className == 'btn_FavoriteProduct'){
        let numb = e.target.parentElement.parentElement.dataset.number;
        let LocalString = localStorage.getItem("favoriteObg");
        let LocalObj = JSON.parse(LocalString);
        for(let key in LocalObj) { if(numb === LocalObj[key].number) delete LocalObj[key]; }
        for(let key in favoriteObj) { if(numb === favoriteObj[key].number) delete favoriteObj[key]; }
        localStorage.setItem("favoriteObg", JSON.stringify(LocalObj));
        AddProduct();
        let content_product = document.querySelectorAll(".div_product");
        for(let i = 0; i < content_product.length; i++)
        {
            if(content_product[i].dataset.startposition === numb)
            {
                let child = content_product[i].querySelector('.image_like');
                child.src = "../img/like.svg";
                child.classList.remove("active");
                count_like--;
                PrintCountLike(count_like);
            }
        }
    }
});

function PrintCountLike(count_like)
{
    if(count_like == 0)
    {
        btnFavorive.style.visibility = "hidden";
    } 
    else 
    {
        btnFavorive.style.visibility = "visible";
        btnFavorive.innerHTML = `${count_like}`;
    }
}

function AddProduct()
{
    if(document.querySelector(".AllFavoriteProduct")) document.querySelector(".AllFavoriteProduct").remove();
    let ObjLocStore = localStorage.getItem("favoriteObg");
    let favoriteProduct = JSON.parse(ObjLocStore);
    let modal_window = document.querySelector(".modal_window");
    let AllFavoriteProduct = document.createElement("div");
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

        let btn_FavoriteProduct = document.createElement("button");
        btn_FavoriteProduct.className = "btn_FavoriteProduct";

        let image_basket = document.createElement("img");
        image_basket.className = "image_basket";
        image_basket.src = "../img/basket.svg";

        let favoriteBtn_p = document.createElement("p");
        favoriteBtn_p.innerHTML = "Удалить";

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
        conteiner_btn_FavoriteProduct.appendChild(btn_FavoriteProduct);
        btn_FavoriteProduct.appendChild(image_basket);
        btn_FavoriteProduct.appendChild(favoriteBtn_p);
        
    }
}