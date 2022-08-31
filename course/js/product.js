let info_product = {
    "1" : {
        "name": "Шпагат Macrametr",
        "name_long": "4 мм, 100 нитей",
        "cost": "332",
        "sale": "no",
        "img_product": "../img/image_2022-08-28_21-10-31.png",
        "color": ["#EEAA56", "#A5C3B3", "#68171E", "#596479", "#EED737", "#6F6D3A", "#2C354E", "#8A8767", "#0C0C0B"],
        "long": "4",
        "manufacturer": "Macrametr",
        "number": "1",
        "compoud": "100% хлопок",
        "text": "Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий и приятный на ощупь, при желании, можно легко расплести в бахрому."
    },
    "2" : {
        "name": "Веревка “Zефирка”",
        "name_long": "4 мм, 100 м",
        "cost": "32",
        "sale": "no",
        "img_product": "../img/image_2022-08-29_01-19-50.png",
        "color": ["#EEAA56", "#A5C3B3", "#68171E", "#596479"],
        "long": "4",
        "manufacturer": "Зефирка",
        "number": "2",
        "compoud": "75% синтетика",
        "text": "Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий и приятный на ощупь, при желании, можно легко расплести в бахрому."
    },
    "3" : {
        "name": "Шпагат джутовый",
        "name_long": "Сибшнур 500 м",
        "cost": "23",
        "sale": "no",
        "img_product": "../img/image_2022-08-29_01-19-19.png",
        "color": ["#EEAA56", "#A5C3B3"],
        "long": "3",
        "manufacturer": "Сибшнур",
        "number": "3",
        "compoud": "75% хлопок",
        "text": "Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий и приятный на ощупь, при желании, можно легко расплести в бахрому."
    },
    "4" : {
        "name": "Пряжа Arachna",
        "name_long": "\"Macrame MAXI\"",
        "cost": "132",
        "sale": "no",
        "img_product": "../img/image_2022-08-29_01-19-26.png",
        "color": ["#EEAA56", "#A5C3B3", "#68171E", "#8A8767", "#0C0C0B", "#A5C3B3", "#68171E"],
        "long": "5",
        "manufacturer": "Macrame",
        "number": "4",
        "compoud": "15% хлопок",
        "text": "Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий и приятный на ощупь, при желании, можно легко расплести в бахрому."
    },
    "5" : {
        "name": "Шнур \"Gamma\"",
        "name_long": "0.8 мм, 50 м",
        "cost": "52",
        "sale": "no",
        "img_product": "../img/image_2022-08-29_01-19-43.png",
        "color": ["#D2AD94", "#8A8767", "#0C0C0B"],
        "long": "0.8",
        "manufacturer": "Гамма",
        "number": "5",
        "compoud": "35% хлопок",
        "text": "Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий и приятный на ощупь, при желании, можно легко расплести в бахрому."
    },
    "6" : {
        "name": "Пряжа Arachna",
        "name_long": "\"Macrame MIN\"",
        "cost": "652",
        "sale": "yes",
        "img_product": "../img/image_2022-08-29_01-21-03.png",
        "color": ["#D2AD94", "#8A8767"],
        "long": "4.5",
        "manufacturer": "Macrame",
        "number": "6",
        "compoud": "35% хлопок 10% синтетика",
        "text": "Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий и приятный на ощупь, при желании, можно легко расплести в бахрому."
    }
}

let main = document.querySelector(".main");
let count_product = document.querySelector("#count_product");
let NewInfo_product = {};
fullnesObj(info_product, NewInfo_product);
ShowProducts(info_product);

let checkbox = document.querySelectorAll(".checkbox");
let clear = document.querySelector(".btn_clear");
let costUP = document.querySelector(".btn_arrowUP");
let costDown = document.querySelector(".btn_arrowDown");
let filter = document.querySelector(".btn_show");
let box_product = document.querySelectorAll(".div_product");

costUP.addEventListener("click", () => sortProduct(true));
costDown.addEventListener("click", () => sortProduct(false));
filter.addEventListener("click", () => {
    NewInfo_product = FilterProducts(info_product);
    let count = 0;
    for(let i = 0; i < box_product.length; i++)
    {
        box_product[i].style.display = "none";
    }
    for(let i in info_product)
    {
        for(let j in NewInfo_product)
        {
            if(info_product[i] == NewInfo_product[j])
            {
                box_product[parseInt(i)-1].style.display = "block";
                count++;
            }
        }
    }
    OutputTextCount(count, count_product);
    indent();
    
});
clear.addEventListener("click", () => {
    let count = 0;
    for(let i = 0; i < box_product.length; i++)
    {
        box_product[i].style.display = "block";
        count++
    }
    for(let i = 0; i < checkbox.length; i++)
    {
        if(checkbox[i].checked)
        {
            checkbox[i].checked = false
        }
    }
    OutputTextCount(count, count_product);
    startPosition();
});

function ShowProducts(product)
{   
    let count = 0;
    if(document.querySelector(".products") != null) document.querySelector(".products").remove();
    let product_conteiner = document.createElement("div");
    product_conteiner.className = "products";
    main.appendChild(product_conteiner);

    for(let key in product)
    {
        count++;

        let div_product = document.createElement("div");
        div_product.className = "div_product";
        div_product.setAttribute("data-price", product[key].cost.toString());
        div_product.setAttribute("data-startPosition", product[key].number.toString());

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

        image_like.src = "../img/like.svg";
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

        product_conteiner.appendChild(div_product);

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
    OutputTextCount(count, count_product);
    indent();
}

function OutputTextCount(count, outputCount)
{
    if(count == 0) outputCount.innerHTML = `Товар не найден`;
    else if(count == 1) outputCount.innerHTML = `Подобран ${count} товар`;
    else if(count < 5 && count != 1) outputCount.innerHTML = `Подобрано ${count} товара`;
    else if(count > 4) outputCount.innerHTML = `Подобрано ${count} товаров`;
}

//sotr
function sortProduct(increase)
{
    const products = document.querySelector(".products");
    for(let i = 0; i < products.children.length; i++)
    {
        for(let j = i; j < products.children.length; j++)
        {   
            if(!increase)
            {
                if(parseInt(products.children[i].getAttribute("data-price")) > parseInt(products.children[j].getAttribute("data-price")))
                {
                    replaceNode = products.replaceChild(products.children[j], products.children[i]);
                    insertAfter(replaceNode, products.children[i]);
                }
            }
            else{
                if(parseInt(products.children[i].getAttribute("data-price")) < parseInt(products.children[j].getAttribute("data-price")))
                {
                    replaceNode = products.replaceChild(products.children[j], products.children[i]);
                    insertAfter(replaceNode, products.children[i]);
                }
            }
        }
    }
    indent();
}

function startPosition()
{
    const products = document.querySelector(".products");
    for(let i = 0; i < products.children.length; i++)
    {
        for(let j = i; j < products.children.length; j++)
        {   
            if(parseInt(products.children[i].getAttribute("data-startPosition")) > parseInt(products.children[j].getAttribute("data-startPosition")))
            {
                replaceNode = products.replaceChild(products.children[j], products.children[i]);
                insertAfter(replaceNode, products.children[i]);
            }
        }
    }
    indent();
}

function insertAfter(elem, refElem)
{
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

 //filter
 function FilterProducts(product) {
    let tempObj = {};
    let tempObjWidth = {};
    let tempObjManuf = {};
    let isChecked = false;
    for(let i = 0; i < checkbox.length; i++)
    {
        if(checkbox[i].checked)
        {   
            let name = checkbox[i].parentElement.parentElement.firstElementChild.textContent;
            for(let key in product) if(checkbox[i].value == product[key].long) tempObjWidth[key] = product[key];
            for(let key in product) if(checkbox[i].value == product[key].manufacturer) tempObjManuf[key] = product[key];
            startPosition();
            isChecked = true;
        }
    }
    if (isEmptyObject(tempObjWidth) && !isEmptyObject(tempObjManuf)) tempObj = tempObjManuf;
    else if (isEmptyObject(tempObjManuf) && !isEmptyObject(tempObjWidth)) tempObj = tempObjWidth;
    else if(!isEmptyObject(tempObjWidth) && !isEmptyObject(tempObjManuf))
    {   
        for(let i in tempObjManuf)
        {
            for(let j in tempObjWidth)
            {
                if(tempObjManuf[i].manufacturer == tempObjWidth[j].manufacturer) tempObj[i] = tempObjWidth[j];
            } 
        }
        
    }
    if(isEmptyObject(tempObj) && isChecked) return tempObj;
    if(isEmptyObject(tempObj)) tempObj = product;
    return tempObj;
 }

 //indent
 function indent()
 {
    let product = document.querySelectorAll(".div_product");
    let page_width = 1346;
    let product_width = 0;

    for(let i = 0; i < product.length; i++)
    {
        let pr_w = product[i].offsetWidth;
        product_width = product_width + pr_w;
        if((product_width + product[i].offsetWidth) > page_width +227)
        {
            product[i].style.marginRight = "0px";
            product_width = 0;
        }
        else if(product[i].style.marginRight == "0px") product[i].style.marginRight = "12px";
    }
 }

 function fullnesObj(startObg, NewObg)
 {
     for(let key in startObg)
     {
         NewObg[key] = startObg[key];
     }
 }
