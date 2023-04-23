const storedCart = JSON.parse(localStorage.getItem('cart'))
var carts = storedCart ?? [];   

const cartContainer = document.querySelector('.js-cart-container');
const noProduct = document.querySelector('.no-product');
const havingProduct = document.querySelector('.having-product');
const cartQuantifies = document.querySelectorAll('.js-cart-quantify');
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
    cartQuantifies.forEach(cartQuantify => {
        cartQuantify.innerHTML = totalQuantify;
    })
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

function addCart(index, q) {
    let i = products.findIndex((value) => {
        return value.id == index;
    });
    let id = index
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
        carts[findProduct(id, carts)].quantify += q;
        renderCart();
    }
}