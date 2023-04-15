products = [
    // bestseller
    {
        img: "./acsset/img/product-item-1.jpg",
        name: "Blanche Parfum",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    {
        img: "./acsset/img/product-item-2.jpg",
        name: "Tuscan Creations",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    {
        img: "./acsset/img/product-item-3.jpg",
        name: "Terra Rossa",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    {
        img: "./acsset/img/product-item-4.jpg",
        name: "Glorious Eau",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    {
        img: "./acsset/img/product-item-5.jpg",
        name: "The Alchemist",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    {
        img: "./acsset/img/product-item-6.jpg",
        name: "Garden A Winter",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    {
        img: "./acsset/img/product-item-7.jpg",
        name: "Melody Eau",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    {
        img: "./acsset/img/product-item-8.jpg",
        name: "Toilette",
        current_price: 45,
        old_price: 65,
        cate: "bestseller"
    },
    // new arrivals
    {
        img: "./acsset/img/product-item-9.jpg",
        name: "Ambre Royal",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    {
        img: "./acsset/img/product-item-10.jpg",
        name: "Patiala Eau",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    {
        img: "./acsset/img/product-item-11.jpg",
        name: "Mojave Ghost",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    {
        img: "./acsset/img/product-item-13.jpg",
        name: "Rose Elixir",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    {
        img: "./acsset/img/product-item-14.jpg",
        name: "Aoud Queen Roses",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    {
        img: "./acsset/img/product-item-15.jpg",
        name: "Love Eau",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    {
        img: "./acsset/img/product-item-16.jpg",
        name: "Bibliotheque",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    {
        img: "./acsset/img/product-item-2.jpg",
        name: "Tuscan Creations",
        current_price: 45,
        old_price: 65,
        cate: "new arrivals"
    },
    // top rated
    {
        img: "./acsset/img/product-item-10.jpg",
        name: "Patiala Eau",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
    {
        img: "./acsset/img/product-item-12.jpg",
        name: "Bal Afrique",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
    {
        img: "./acsset/img/product-item-8.jpg",
        name: "Exotic Diamond",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
    {
        img: "./acsset/img/product-item-4.jpg",
        name: "Mon Guerlain",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
    {
        img: "./acsset/img/product-item-9.jpg",
        name: "Dainty Diamond",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
    {
        img: "./acsset/img/product-item-13.jpg",
        name: "Magnificent Bangle",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
    {
        img: "./acsset/img/product-item-16.jpg",
        name: "Florale",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
    {
        img: "./acsset/img/product-item-8.jpg",
        name: "The Alchemist",
        current_price: 45,
        old_price: 65,
        cate: "top rated"
    },
]

const container = document.querySelector('.js-container-product');
const categories = document.querySelectorAll('.js-cate');
const cateContent = document.querySelector('.js-cate-content');
const cateItems = document.querySelectorAll('.js-cate-items');

for(const cateItem of cateItems) {
    cateItem.addEventListener('click',()=>{
        cateContent.innerHTML = cateItem.textContent;
    })
    console.log(cateItem.textContent);
}

function render(arr) {
    const html = arr.map(value => {
        return `
        <div class="col c-6 m-4 l-3">
            <div class="product">
                <span class="product__label">New</span>
                <div class="product__img-link">
                    <a href="#" class="product__img">
                        <img src="${value.img}" alt="">
                    </a>
                    <div class="product__action">
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                        <span><i class="fa-solid fa-magnifying-glass"></i></span>
                        <span><i class="fa-solid fa-bag-shopping"></i></span>
                    </div>
                </div>
                <div class="product__content">
                    <h3 class="product__name">${value.name}</h3>
                    <div class="product__rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <p class="product__price">
                        <span class="product__price--old">$${value.old_price}</span>
                        <span class="product__price--new">$${value.current_price}</span>
                    </p>
                </div>
            </div>
        </div>
        `
    })
    container.innerHTML = html.join("");
}

for(const category of categories) {
    category.addEventListener('click', ()=> {
        for(var i = 0; i < categories.length; i++){
            if(category == categories[i]) {
                categories[i].classList.add('active');
            }else {
                categories[i].classList.remove('active');
            }
        }
        var cate = category.innerHTML;
        let list = products.filter(value => {
            return value.cate.toLowerCase().includes(cate.toLowerCase());
        })
        render(list);
    })
}

categories[0].click();