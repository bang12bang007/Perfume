const cartProductList = document.querySelector('.cart__product-list');
const total =  document.querySelector('.js-total');
const havingProducts = document.querySelector('.having-products');
const noProducts = document.querySelector('.no-products');

function showProduct() {
    if(carts.length <= 0) {
        // Hiển thị giỏ hàng rỗng
        havingProducts.classList.add('d-none');
        noProducts.classList.remove('d-none');
    }else {
        havingProducts.classList.remove('d-none');
        noProducts.classList.add('d-none');
    }
}

showProduct()

function renderProductCart() {
    const html = carts.map((value, index) => {
        return `
        <li class="cart__product-items">
            <div class="items__container">
                <div class="items__img">
                    <img src="${value.img}" alt="">
                </div>
                <div class="items__content">
                    <a class="items__content-name">${value.product_name}</a>
                    <p>
                        <a href="">Black</a>,
                        <a href="">300ML</a>
                    </p>
                    <p class="items__price pc-none show-mobile">$${value.price}</p>
                </div>
            </div>
            
            <div class="items__right">
                <div class="items__quantify">
                    <button class="items__quantify--action"><i class="fa-solid fa-minus"></i></button>
                    <span>${value.quantify}</span>
                    <button class="items__quantify--action"><i class="fa-solid fa-plus"></i></button>
                </div>
                <a href="#" class="items__clear pc-none show-mobile">
                    <i class="fa-regular fa-trash-can"></i>
                </a>
            </div> 
            <p class="items__price hidden-mobile">$${value.price}</p>
            <a href="#" onclick="clearProduct(${index})" class="items__clear hidden-mobile">
                <i class="fa-regular fa-trash-can"></i>
            </a>
        </li>
        `
    })
    cartProductList.innerHTML = html.join('');
    localStorage.setItem('cart', JSON.stringify(carts))
    total.innerHTML = totalCart.innerHTML;
}

renderProductCart()

function clearProduct(index) {
    carts.splice(index, 1);
    renderCart();
    renderProductCart();
    showProduct()
    
}



