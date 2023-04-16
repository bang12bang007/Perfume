var products = [
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
    {
        img: "./acsset/img/product-item-17.jpg",
        name: "Glorious Eau",
        current_price: 45,
        old_price: 65,
        cate: "",
        deal: true
    },
    {
        img: "./acsset/img/product-item-21.jpg",
        name: "The Alchemist",
        current_price: 45,
        old_price: 65,
        cate: "",
        deal: true
    },
    {
        img: "./acsset/img/product-item-22.jpg",
        name: "The Alchemist",
        current_price: 45,
        old_price: 65,
        cate: "",
        deal: true
    },
    {
        img: "./acsset/img/product-item-19.jpg",
        name: "The Alchemist",
        current_price: 45,
        old_price: 65,
        cate: "",
        deal: true
    },
    {
        img: "./acsset/img/product-item-18.jpg",
        name: "The Alchemist",
        current_price: 45,
        old_price: 65,
        cate: "",
        deal: true
    },
    {
        img: "./acsset/img/product-item-20.jpg",
        name: "The Alchemist",
        current_price: 45,
        old_price: 65,
        cate: "",
        deal: true
    },
]

localStorage.setItem('products', JSON.stringify(products))

const container = document.querySelector('.js-container-product');
const categories = document.querySelectorAll('.js-cate');
const cateContent = document.querySelector('.js-cate-content');
const cateItems = document.querySelectorAll('.js-cate-items');
const dealContainer = document.querySelector('.deal__container');

for(const cateItem of cateItems) {
    cateItem.addEventListener('click',()=>{
        cateContent.innerHTML = cateItem.textContent;
    })
}

function renderDeal() {
    // let list = products.filter(value => {
    //     return value.deal == true;
    // })
    const html = products.map((value, index) => {
        if(value.deal == true) {
            return `
                <li class="deal__items">
                <div class="product">
                    <span class="product__label">New</span>
                    <div class="product__img-link">
                        <a href="#" class="product__img">
                            <img src="${value.img}" alt="">
                        </a>
                        <div class="product__action">
                            <a href=""><i class="fa-regular fa-heart"></i></a>
                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                            <span class="add-to-cart" data-info=${index}><i class="fa-solid fa-bag-shopping"></i></span>
                        </div>
                    </div>
                    <div class="product__content">
                        <div class="product__time">
                            <div class="product__time-items">
                                <span>00</span>
                                <span>days</span>
                            </div>
                            <div class="product__time-items">
                                <span>00</span>
                                <span>days</span>
                            </div>
                            <div class="product__time-items">
                                <span>00</span>
                                <span>days</span>
                            </div>
                            <div class="product__time-items">
                                <span>00</span>
                                <span>days</span>
                            </div>
                        </div>
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
                </li>
                `
        }
    })
    dealContainer.innerHTML = html.join('');
}

renderDeal()

function render(arr) {
    const html = arr.map((value, index) => {
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
                        <span class="add-to-cart" data-info=${index}><i class="fa-solid fa-bag-shopping"></i></span>
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

const storedCart = JSON.parse(localStorage.getItem('cart'))
var carts = storedCart ?? [];   

const addCarts = document.querySelectorAll('.add-to-cart');
const cartContainer = document.querySelector('.js-cart-container');
const noProduct = document.querySelector('.no-product');
const havingProduct = document.querySelector('.having-product');
const cartQuantify = document.querySelector('.js-cart-quantify');
const totalCart = document.querySelector('.cart-total-js');

function updateCart() {
    var totalQuantify = 0;
    var totalPrice = 0;
    if(carts.length > 0) {
        havingProduct.classList.remove('d-none');
        noProduct.classList.add('d-none');
    }else {
        havingProduct.classList.add('d-none');
        noProduct.classList.remove('d-none');
    }
    var quantify = carts.map(val => {
        totalQuantify += val.quantify;
        totalPrice += val.quantify * val.price;
    })
    totalCart.innerHTML = "$"+totalPrice;
    cartQuantify.innerHTML = totalQuantify;
}

function renderCart() {
    const html = carts.map((value, index) => {
        return `
        <li>
            <div class="minicart__product">
                <div class="minicart__product-img">
                    <img src="${value.img}" alt="">
                </div>
                <div class="minicart__product-desc">
                    <a class="minicart__product-name">${value.product_name}</a>
                    <p>
                        <a href="">Black</a>,
                        <a href="">300ML</a>
                    </p>
                    <div class="minicart__product-act">
                        <p>
                            <span>$${value.price}</span>
                            <span>(x${value.quantify})</span>
                        </p>
                        <a  onclick="clearProduct(${index})">
                            <i class="fa-regular fa-trash-can"></i>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        `
    })
    updateCart();
    cartContainer.innerHTML = html.join('');
    localStorage.setItem('cart', JSON.stringify(carts))
}

renderCart()

function findProduct(id, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].id == id) {
            return i;
        }
    }
    return -1;
}

function clearProduct(index) {
    carts.splice(index, 1);
    renderCart();
}

for(const addCart of addCarts) {
    addCart.addEventListener('click', ()=> {
        for(var i = 0; i < products.length; i++) {
            if(addCart.dataset.info == i) {
                let id = addCart.dataset.info
                let img = products[i].img
                let product_name = products[i].name
                let price = products[i].current_price
                let quantify = 1;
                if(carts.length  == 0) {
                    carts.push({
                        id,
                        img,
                        product_name,
                        price,
                        quantify
                    })
                    renderCart();
                }
                else if(findProduct(id, carts) < 0) {
                    carts.push({
                        id,
                        img,
                        product_name,
                        price,
                        quantify
                    })
                    renderCart();
                }
                else if(findProduct(id, carts) >= 0) {
                    carts[findProduct(id, carts)].quantify += 1;
                    renderCart();
                }
                
                console.log(carts);
            }
        }
    })
}

$('.deal__container').slick({
    dots: true,
    infinite: false,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });
